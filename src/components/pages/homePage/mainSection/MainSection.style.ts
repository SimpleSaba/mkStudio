import styled from "styled-components";
import image1 from "../../../../assets/images/balcony.jpeg";

export const Wrapper = styled.div`
  display: flex;
  background: radial-gradient(
    circle,
    rgba(70, 53, 16, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const ImageWrapper = styled.div`
  background-image: url(${image1});
  background-size: cover;
  background-attachment: fixed; /* Makes the parallax effect stronger */
  background-position: center center;
  margin: auto;
  width: 80%;
  height: 80vh; /* Full screen height */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;
