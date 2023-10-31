import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './spinner'



export class News extends Component {
    static defaultProps = {
        pagesize: 9,
        headline: 'headline',
        country: 'in',
        category: 'general'
    }


    static PropType = {
        pagesize: PropTypes.number,
        headline: PropTypes.string,
        county: PropTypes.string

    }
    capitlizeText(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 0,
            country: 'in',
            headline: 'India',
          
            loading: true,
            totalResults: 0,
        };
        document.title = `${this.capitlizeText(this.props.category)} -NewsSelect`
    }


    updateNews = async () => {
        this.props.setprogress(40);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=3`;
        const data = await fetch(url);
        const parsedata = await data.json();

        this.setState({
            articles: parsedata.articles,

            totalResults: parsedata.totalResults,
            loading: false,
        })
        this.props.setprogress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }

      


    fetchMoreData = async () => {

       
        this.setState({ page: this.state.page + 1 })

        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        const data = await fetch(url);
        const parsedata = await data.json();



        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults,

            loading: false,
        })



     
    }




    render() {
        return (

            <>
               
                <h1 className='text-center my-3 text-success'>{this.props.headline}{this.state.cthead}</h1>

                {/* {this.state.loading && <Spinner/>} */}
                <hr />


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}

                    // inverse={true}           
                    hasMore={this.state.articles.length <= this.state.totalResults}
                    loader={<Spinner />}
                    scrollableTarget="scrollable"
                    endMessage={
                        <h3 className='text-center'> Kitna Scroll Karoge Yarr !🤣</h3>
                    }
                >
                    <div className="container">
                        <div className="row ">
                            {this.state.articles.map((Element, index) => {

                                return <div className="col-md-4 my-3" key={index}  >
                                    <NewsItem key={Element.url} title={Element.title} description={Element.description} imgurl={Element.urlToImage} Author={Element.author} date={Element.publishedAt} url={Element.url} Source={Element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                <hr />
            </>
        )
    }
}
export default News






