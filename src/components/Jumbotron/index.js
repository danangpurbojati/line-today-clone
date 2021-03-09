import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { SliderWrapper } from './styles/JumbotronStyles';
import DummyTop from '../../assets/dummyData/topCategory';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "red", width: "40px", position: "absolute", top: "50%", right: "0", transform: "translateY(-100%)" }}
        onClick={onClick}
        >lanjut bang</div>
    );
}

const SampleBackArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "yellow", width: "40px", position: "absolute", top: "50%", left: "0", zIndex: "99", transform: "translateY(-100%)" }}
        onClick={onClick}
        >balik bang</div>
    );
}

const Jumbotron = () => {
    const [tops] = useState(DummyTop.templates);
    
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleBackArrow />,
        appendDots: dots => (
                <ul style={{ 
                    margin: "0px", 
                    display: "flex" ,
                    listStyle: "none",
                    justifyContent: "center"
                }}> 
                    {dots}                 
                </ul>
            ),
        customPaging: i => (
            <div className="custom-dot">
                <div>
                    <div className="loading" />
                </div>
            </div>
        )
    };


    return (
        <div>
            <SliderWrapper {...settings}>
                {
                    tops.filter(filterType => filterType.type === 50)[0].sections.filter(jumbotron => jumbotron.type === 1)[0].articles.map(content => (
                        <div style={{height: "400px"}} key={content.id}>
                            <img className="test-img" src={`https://obs.line-scdn.net/${content.thumbnail.hash}`} alt="img"/>
                            <div className="text-content">
                                <p>{content.title}</p>
                            </div>
                        </div>
                    ))
                }
            </SliderWrapper>

            <div>
                <h1>filter rencana berita</h1>
                {
                    tops.filter(newsFilter => newsFilter.type !== 50 && newsFilter.title && newsFilter.sections[0].articles.length > 0).map(newsSection => (
                        <div key={newsSection.id}>
                            <h4>{newsSection.title}</h4>
                            <Grid container spacing={3}>
                                {
                                    newsSection.sections[0].articles.map(newsItem => (
                                        <Grid item xs={6} key={newsItem.id}>
                                            <p>{newsItem.title}</p>
                                            <p>{newsItem.publisher}</p>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Jumbotron
