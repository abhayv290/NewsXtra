import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    render() {
        return (
            <div className='container my-5'>
                <h2>Top HeadLines-India</h2>
                <div className="row ">
                    <div className="col-md-4 my-3">
                        <NewsItem />
                    </div>
                    <div className="col-md-4 my-3">
                        <NewsItem />
                    </div>
                    <div className="col-md-4 my-3">
                        <NewsItem />
                    </div>
                   
                </div>
                   
                       
                   

            </div>
        )
    }
}

export default News