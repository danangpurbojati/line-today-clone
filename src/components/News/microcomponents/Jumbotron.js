import React from 'react';
import { 
    JumbotronContentWrapper, 
    JumbotronImages, 
    JumbotronTextWrapper, 
    SliderWrapper, 
    BackArrowWrapper, 
    NextArrowWrapper 
} from '../styles/NewsStyles';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    
    return (
        <NextArrowWrapper
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <FaAngleRight />
        </NextArrowWrapper>
    );
}

const SampleBackArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <BackArrowWrapper
        className={className}
        style={{ ...style, }}
        onClick={onClick}
        >
            <FaAngleLeft />
        </BackArrowWrapper>
    );
}

const Jumbotron = ({news}) => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
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
        <>
            {
                news.map(jumbotron => (
                    (jumbotron.type === 50 && (
                        <SliderWrapper key={jumbotron.id} {...settings}>
                            {
                                jumbotron.sections[0].articles.map(content => (
                                    <JumbotronContentWrapper target="_blank" href={content.url.url}  key={content.id}>
                                        <JumbotronImages src={`https://obs.line-scdn.net/${content.thumbnail.hash}`} alt="img"/>
                                        <JumbotronTextWrapper>
                                            <h3>{content.title}</h3>
                                        </JumbotronTextWrapper>
                                    </JumbotronContentWrapper>
                                ))

                            }
                        </SliderWrapper>
                    ))
                ))
            }

        </>
    )
}

export default Jumbotron
