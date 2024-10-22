import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './spinner';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeText = (word) => {

        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const updateNews = async () => {
        props.setprogress(40);

        const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apikey}&page=1&pagesize=${props.pagesize}`;
        setLoading(true);
        const data = await fetch(url);
        const parsedata = await data.json();

        setArticles(parsedata.articles);
        setTotalResults(parsedata.totalResults);
        setLoading(false);

        props.setprogress(100);
    };

    useEffect(() => {
        document.title = `${capitalizeText(props.category)} - NewsSelect`;
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.category]);

    const fetchMoreData = async () => {
        const nextPage = page + 1;
        setPage(nextPage);

        const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apikey}&page=${nextPage}&pagesize=${props.pagesize}`;
        const data = await fetch(url);
        const parsedata = await data.json();

        setArticles([...articles, ...parsedata.articles]);
        setTotalResults(parsedata.totalResults);
    };

    return (
        <>
            <h1 className="text-center my-3 text-success">
                {props.headline}
            </h1>
            <hr />
            <InfiniteScroll
                dataLength={articles?.length}
                next={fetchMoreData}
                hasMore={articles?.length < totalResults}
                loader={<Spinner />}
                scrollableTarget="scrollable"
                endMessage={
                    <h3 className="text-center">Kitna Scroll Karoge Yarr! 🤣</h3>
                }
            >
                <div className="container">
                    <div className="row">
                        {articles?.map((element) => (
                            <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem
                                    title={element.title}
                                    description={element.description}
                                    imgurl={element.urlToImage}
                                    author={element.author}
                                    date={element.publishedAt}
                                    url={element.url}
                                    source={element.source.name}
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
    apikey: PropTypes.string.isRequired,
    setprogress: PropTypes.func.isRequired,
};

export default News;
