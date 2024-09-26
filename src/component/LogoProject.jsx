import React from "react";
import styled from "styled-components";
import w1 from "../Images/w1.jpg";
import w2 from "../Images/w2.jpg";
import w3 from "../Images/w3.jpg";
import w4 from "../Images/w4.jpg";
import w5 from "../Images/w5.jpg";
import w6 from "../Images/w6.jpg";
import w7 from "../Images/w7.jpg";
import w8 from "../Images/w8.jpg";
import w9 from "../Images/w9.jpg";
import w11 from "../Images/s1.jpg";
import w12 from "../Images/s3.jpg";
import w13 from "../Images/s7.jpg";
import w14 from "../Images/s6.jpg";
import w15 from "../Images/s5.jpg";
import w16 from "../Images/s4.jpg";
import w17 from "../Images/s2.jpg";

const images = [
  { src: w1, height: "auto" },
  { src: w2, height: "auto" },
  { src: w3, height: "auto" },
  { src: w4, height: "auto" },
  { src: w5, height: "auto" },
  { src: w6, height: "auto" },
  { src: w7, height: "auto" },
  { src: w8, height: "auto" },
  { src: w9, height: "auto" },
  // { src: w10, height: "auto" },
  { src: w11, height: "auto" },
  { src: w12, height: "auto" },
  { src: w13, height: "auto" },
  { src: w14, height: "auto" },
  { src: w15, height: "auto" },
  { src: w16, height: "auto" },
  { src: w17, height: "auto" },
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

const LogoProject = () => {
  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Logo Design</h2>
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
    </Container>
  );
};

export default LogoProject;
