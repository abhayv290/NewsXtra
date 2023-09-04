
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class Sport extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            page:  1 ,
            loading: false ,
        };
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=20b7a69dec46456ab02e5c4d3fd4f11b&pagesize=20`;
        const data = await fetch(url);
        const parsedata = await data.json();

        //    console.log(parsedata.articles)
        this.setState({ articles: parsedata.articles })
    }
    handlenext = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=20b7a69dec46456ab02e5c4d3fd4f11b&pagesize=20&page=${this.state.page+1}`;
        const data = await fetch(url);
        const parsedata = await data.json();

        //    console.log(parsedata.articles)
        this.setState({
            articles: parsedata.articles,
            page:this.state.page + 1
        })
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }
    handleprevious = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=20b7a69dec46456ab02e5c4d3fd4f11b&pagesize=20&page=${this.state.page-1}`;
        const data = await fetch(url);
        const parsedata = await data.json();

        //    console.log(parsedata.articles)
        this.setState({
            articles: parsedata.articles,
            page:this.state.page - 1
        })
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
    
    



    render() {
        return (
            <div className='container my-5'>
                <h1 className='text-center my-3 text-success'>Trending On Sports</h1>
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
                    <button disabled={this.state.page>=4} type="button" className="btn btn-success"onClick={this.handlenext}>  Next&rarr;</button>
                </div>

            </div>
        )
    }
}

export default Sport