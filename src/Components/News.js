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
            page: 1,

            loading: false,
            totalResults: 0,
        };
        document.title = `${this.capitlizeText(this.props.category)} -NewsSelect`
    }


    updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20b7a69dec46456ab02e5c4d3fd4f11b&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        const data = await fetch(url);
        const parsedata = await data.json();

        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false,
        })
       
    }
    async componentDidMount() {
        this.updateNews();
    }

    // handlenext = async () => {


    //     this.setState({
    //         page: this.state.page + 1
    //     })
    //     this.updateNews();
    //     window.scrollTo({ top: 0, behavior: 'smooth' })
    // }
    // handleprevious = async () => {


    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.updateNews();
    //     window.scrollTo({ top: 0, behavior: 'smooth' })
    // }

    fetchMoreData = async () => {
        
        // setTimeout(async() => {
            this.setState({ page: this.state.page + 1 });
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20b7a69dec46456ab02e5c4d3fd4f11b&page=${this.state.page}&pagesize=${this.props.pagesize}`;
            const data = await fetch(url);
        const parsedata = await data.json();

        //    console.log(parsedata.articles)
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults,
            
            loading: false,
        })
      

    // }, 1000);
}
        



    render() {
        return (
            
            <div className='container my-5'>
                <h1 className='text-center my-3 text-success'>{this.props.headline}</h1>
               
                <hr />
                {this.state.loading && <Spinner/>}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        
                        // inverse={true} 
                        hasMore={this.state.articles.length !==this.state.totalResults}
                        loader= {<Spinner/>}
                    scrollableTarget="scrollableDiv"
                   
                        >
                    {this.state.loading && <Spinner/>}
                <div className="row ">
                        {this.state.articles.map((Element, index) => {

                            return <div className="col-md-4 my-3" key={index}  >
                                <NewsItem key={Element.url} title={Element.title} description={Element.description} imgurl={Element.urlToImage} Author={Element.author} date={Element.publishedAt} url={Element.url} Source={Element.source.name} />
                            </div>


                        })}

                </div>
                        </InfiniteScroll>

                <hr />
                {/* <div className="container my-2 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handleprevious}> &larr; Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-success" onClick={this.handlenext} >  Next&rarr;</button>
                </div> */}

            </div>
        )
    }
}

export default News