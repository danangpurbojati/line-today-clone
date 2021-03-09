import styled from 'styled-components/macro';
import Slider from "react-slick";

export const SliderWrapper = styled(Slider)`
  ul{
    padding-inline-start: 0;
  }

  .slick-dots{
      position: relative;
      top: -120px;
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
      background-color: grey;
      height: 10px;
      font-weight: bold;
      position: relative;
  }

  .slick-dots .slick-active .loading{
      background-color: red;
      animation: loading 2s ease-in;
      position: absolute;
      top: 0;
      left: 0;
      height: 10px;
  }

  .test-img{
      width: 100%;
      height: 400px;
      background-color: blue;
  }
  .test-img2{
      width: 100%;
      height: 400px;
      background-color: black;
  }
  .test-img3{
      width: 100%;
      height: 400px;
      background-color: red;
  }
  .test-img4{
      width: 100%;
      height: 400px;
      background-color: green;
  }

  .text-content{
      border: 1px solid purple;
      background-color: purple;
      width: 80%;
      height: 60px;
      margin: auto;
      position: relative;
      top: -35px;
  }
`;