import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './spinner';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(0);
    const [country] = useState('in');
    const [headline] = useState('India');
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);



    const capitalizeText = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const updateNews = async () => {
        props.setprogress(40)

        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apikey}&page=1&pagesize=3`;
        const data = await fetch(url);
        const parsedata = await data.json();

        setArticles(parsedata.articles);
        setTotalResults(parsedata.totalResults);
        setLoading(false);

        props.setprogress(100)
    };
    useEffect(() => {
        document.title = `${capitalizeText(props.category)} - NewsSelect`;
        updateNews();
    }, [props.category]);

    const fetchMoreData = async () => {
        setPage(page + 1);

        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
        const data = await fetch(url);
        const parsedata = await data.json();

        setArticles([...articles, ...parsedata.articles]);
        setTotalResults(parsedata.totalResults);
        setLoading(false);
    };

    return (
        <>
            <h1 className="text-center my-3 text-success">
                {props.headline}
                {headline}
            </h1>
            {/* {loading && <Spinner />} */}
            <hr />
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length <= totalResults}
                loader={<Spinner />}
                scrollableTarget="scrollable"
                endMessage={
                    <h3 className="text-center">Kitna Scroll Karoge Yarr! 🤣</h3>
                }
            >
                <div className="container">
                    <div className="row">
                        {articles.map((Element, index) => (
                            <div className="col-md-4 my-3" key={index}>
                                <NewsItem
                                    key={Element.url}
                                    title={Element.title}
                                    description={Element.description}
                                    imgurl={Element.urlToImage}
                                    Author={Element.author}
                                    date={Element.publishedAt}
                                    url={Element.url}
                                    Source={Element.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
            <hr />
        </>
    );
};

News.defaultProps = {
    pagesize: 9,
    headline: 'headline',
    country: 'in',
    category: 'general',
};

News.propTypes = {
    pagesize: PropTypes.number,
    headline: PropTypes.string,
    country: PropTypes.string,
    category: PropTypes.string,
};

export default News;
