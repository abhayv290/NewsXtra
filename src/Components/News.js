import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
export class News extends Component {
 static defaultProps= {
     pagesize: 12,
     headline: 'headline',
     country: 'in',
     category:'general'
 }


static PropType={
    pagesize: PropTypes.number,
    headline: PropTypes.string,
    county:PropTypes.string

}

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            
            loading: false,
            totalResults: null
        };
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20b7a69dec46456ab02e5c4d3fd4f11b&pagesize=${this.props.pagesize}`;
        const data = await fetch(url);
        const parsedata = await data.json();

        //    console.log(parsedata.articles)
        this.setState({
            articles: parsedata.articles,
            totalResults:parsedata.totalResults
        })
        console.log(Math.ceil(parsedata.totalResults/this.props.pagesize))
        
    }
    handlenext = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=20b7a69dec46456ab02e5c4d3fd4f11b&pagesize=${this.props.pagesize}&page=${this.state.page+1}`;
        const data = await fetch(url);
        const parsedata = await data.json();

        //    console.log(parsedata.articles)
        this.setState({
            articles: parsedata.articles,
            page:this.state.page + 1
        })
        window.scrollTo({top:0,behavior:'smooth'})  
    }
    handleprevious = async () => {
        window.scrollTo({top:0,behavior:'smooth'})  
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=20b7a69dec46456ab02e5c4d3fd4f11b&pagesize=${this.props.pagesize}&page=${this.state.page-1}`;
        const data = await fetch(url);
        const parsedata = await data.json();

        //    console.log(parsedata.articles)
        this.setState({
            articles: parsedata.articles,
            page:this.state.page - 1
        })
    }
    
    



    render() {
        return (
            <div className='container my-5'>
                <h1 className='text-center my-3 text-success'>{this.props.headline}</h1>
                <hr />
                <div className="row ">

                    {this.state.articles.map((Element, index) => {

                        return <div className="col-md-4 my-3" key={index}  >
                            <NewsItem key={Element.url} title={Element.title} description={Element.description} imgurl={Element.urlToImage} url={Element.url} />
                        </div>

                    })}

                </div>

                    <hr />
                <div className="container my-2 d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handleprevious}> &larr; Previous</button>
                    <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pagesize)}  type="button" className="btn btn-success"onClick={this.handlenext}>  Next&rarr;</button>
                </div>

            </div>
        )
    }
}

export default News