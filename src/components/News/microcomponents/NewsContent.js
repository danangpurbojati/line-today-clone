import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { NewsContainer, NewsContentWrapper, NewsLink, NewsImageWrapper, NewsTextWrapper } from '../styles/NewsStyles';

const NewsContent = ({news}) => {
    return (
        <NewsContentWrapper>
            {
                news ? (
                    news.filter(newsFilter => newsFilter.type !== 50 && newsFilter.title && newsFilter.sections[0].articles.length > 0).map(newsSection => (
                        <NewsContainer style={{marginBottom: "42px"}} key={newsSection.id}>
                            <h4>{newsSection.title}</h4>
                            <Grid container spacing={3}>
                                {
                                    newsSection.sections[0].articles.map(newsItem => (
                                        <Grid item xs={6} key={newsItem.id}>
                                            <NewsLink target="_blank" href={newsItem.url.url}>
                                                <NewsImageWrapper>
                                                    <img src={`https://obs.line-scdn.net/${newsItem.thumbnail.hash}/w580`} alt={newsItem.title}/>
                                                </NewsImageWrapper>
                                                <NewsTextWrapper>
                                                    <h3>{newsItem.title}</h3>
                                                    <p>{newsItem.publisher}</p>
                                                </NewsTextWrapper>
                                            </NewsLink>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </NewsContainer>
                    ))
                ) : (<CircularProgress />)
            }
        </NewsContentWrapper>
    )
}

export default NewsContent
