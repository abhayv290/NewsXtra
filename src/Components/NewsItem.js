import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {

        const { title, description, imgurl, url, Author, date,Source } = this.props


        return (

            <div className="card mx-2">
                <img src={!imgurl ? 'https://images.livemint.com/img/2018/12/24/600x338/breaking_news_1545650155659.jpg' : imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span style={{left:'90%'}} className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
                       {Source}
                    </span>
                      
                    <h5 className="card-title">{title?title:"no title"}</h5>
                    <p className="card-text">{description}.</p>
                    <p className='card-text'><small className='text-muted'>By {Author ? Author : 'unknown'} <br /> last updated at {new Date(date).toGMTString()}</small></p>
                    <a href={url} target='blank' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div >

        )
    }
}

export default NewsItem