import React from 'react';
import Jumbotron from './microcomponents/Jumbotron';
import NewsContent from './microcomponents/NewsContent';

const News = ({news}) => {

    return (
        <div>
        
            <Jumbotron news={news} />

            <NewsContent news={news} />

        </div>
    )
}

export default News
