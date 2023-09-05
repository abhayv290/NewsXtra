import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {

        const { title, description,imgurl,url}=this.props

    
    return(
         
                <div className = "card mx-2">
                    <img src={!imgurl?'https://images.livemint.com/img/2018/12/24/600x338/breaking_news_1545650155659.jpg':imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}.</p>
                        <a href={url} target='blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div >
              
        )
    }
}

export default NewsItem