import React from "react";
import styled from "styled-components";
import w1 from "../Images/f1.jpg";
import w2 from "../Images/f5.jpg";
import w3 from "../Images/f3.jpg";
import w4 from "../Images/f4.jpg";
import w5 from "../Images/f9.jpg";
import w6 from "../Images/f10.jpg";
import w7 from "../Images/f20.jpg";
import w8 from "../Images/f21.jpg";
import w9 from "../Images/f23.jpg";
import w10 from "../Images/f11.jpg";

const images = [
  { src: w1, height: "auto" },
  // { src: w2, height: "auto" },
  { src: w3, height: "auto" },
  { src: w4, height: "auto" },
  // { src: w5, height: "auto" },
  { src: w6, height: "auto" },
  { src: w7, height: "auto" },
  { src: w8, height: "auto" },
  { src: w9, height: "auto" },
  { src: w10, height: "auto" },
];

const Container = styled.div`
  @media (min-width: 600px) {
    padding: 1rem 2rem;
  }
  @media (min-width: 900px) {
    padding: 1rem 5rem;
  }

  @media (min-width: 1024px) {
  }
  @media (min-width: 1200px) {
    padding: 1rem 8rem;
  }

  a {
    text-align: center;
    color: #fd562a;
    font-size: 23px;
  }
  h5 {
    @media (min-width: 1000px) {
      font-size: 18px;
    }
  }
`;
const Co = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 40px 0;

  a {
    @media (min-width: 1000px) {
      font-size: 24px;
    }
  }
`;
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  overflow: hidden;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ImageItem = styled.img`
  width: 100%;
  height: ${(props) => props.height};
  object-fit: cover;
  border-radius: ${(props) => props.borderRadius};
  margin-top: ${(props) => props.marginTop};
  transition: height 0.3s ease;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  @media (min-width: 1280px) {
    height: ${(props) => props.largeHeight};
  }
`;

const Flyer = () => {
  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>FLYERS/COVER</h2>
      <GalleryContainer>
        {images.map((image, index) => {
          let height = image.height;
          let borderRadius = "10px";
          let largeHeight = height;

          return (
            <ImageItem
              key={index}
              src={image.src}
              alt={`logo-${index + 1}`}
              height={height}
              borderRadius={borderRadius}
              largeHeight={largeHeight}
            />
          );
        })}
      </GalleryContainer>
      <h5 style={{ textAlign: "center", padding: " 0 20px " }}>
        Kindly click below to check my Instagram page to explore all my designs
        over 5 years
      </h5>
      <Co>
        <a href="https://www.instagram.com/soft_graphics?igsh=eGsyZHV5MjlmM2ll">
          SOFT_GRAPHICS
        </a>
      </Co>
    </Container>
  );
};

export default Flyer;
