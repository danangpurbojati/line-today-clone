import styled from 'styled-components/macro';
import Slider from "react-slick";

export const SliderWrapper = styled(Slider)`
    ul{
        padding-inline-start: 0;
    }

    .slick-dots{
        position: relative;
        top: -110px;
    }

    .slick-dots li {
        background-color: red;
         flex-grow: 1;
         margin: 5px;
        transition: width 0.3s ease-in-out;
    }

    @keyframes loading {
        from {
            width: 0%;
        }

        to {
            width: 100%;
        }
    }

    .custom-dot{
        background-color: #bdb0b0;
        height: 3px;
        font-weight: bold;
        position: relative;
    }

    .slick-dots .slick-active .loading{
        background-color: white;
        animation: loading 5s ease-in;
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
    }
`;

export const JumbotronContentWrapper = styled.a`
    display: block;
    text-decoration: none;
    color: black;
    height: 400px;
    background: white;
`;

export const JumbotronImages = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: top;
`;

export const JumbotronTextWrapper = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 12px 16px;
    width: 90%;
    height: 80px;
    margin: auto;
    position: relative;
    top: -40px;
    box-shadow: 2px 2px 20px 0 rgba(0,0,0,0.1);

    h3{
        font-size: 16px;
    }
`;

export const NextArrowWrapper = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-100%);
    cursor: pointer;
    transition: .3s;
    color: white;
    padding-top: 10px;
    text-align: center;

    &:hover{        
        background-color: rgba(0,0,0,0.8);
    }
`;

export const BackArrowWrapper = styled.div`
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-100%);
    cursor: pointer;
    transition: .3s;
    color: white;
    padding-top: 10px;
    text-align: center;

    &:hover{        
        background-color: rgba(0,0,0,0.8);
    }
`;

export const NewsContentWrapper = styled.div`
    padding: 24px;
    /* border: 1px solid red; */
`;

export const NewsContainer = styled.div`
    /* border: 1px solid blue; */

    h4{
        text-transform: uppercase;
        margin-bottom: 16px;
        font-size: 20px;
    }
`;

export const NewsLink = styled.a`
    display: block;
    text-decoration: none;
    /* background-color: green; */
`;

export const NewsImageWrapper = styled.div`
    width: 100%;
    height: 250px;
    /* border: 1px solid black; */
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
        object-position: center;

    }

    @media (max-width: 720px) {
       height: 150px;
    }
`;

export const NewsTextWrapper = styled.div`
    margin-top: 5px;
    min-height: 80px;

    h3{
        font-size: 16px;
        margin-bottom: 5px;
        color: black
    }

    p{
        font-size: 14px;
        font-weight: 500;
        text-transform: capitalize;
        color: #9f9f9f;
    }

    @media (max-width: 720px) {
       h3{
        font-size: 14px;
       }

       p{
        font-size: 12px;
       }
    }
`;