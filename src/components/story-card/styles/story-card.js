import styled from "styled-components/macro"; // If you didn't define macro you will not give the actual class name in the incpect tools

export const Item = styled.div`
  display: flex;
  border-top: 8px solid #222;
  // border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: #fff;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-self: center;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  margin: auto;

  @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
      ${Item}:last-of-type h2 {
          margin-bottom: 50px;
      }
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
      width: 100%;
      padding: 0 45px;
      text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  /* font-size: clamp(35px, 10vw, 51px); */
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
      font-size: 35px;
      text-align: center;
  }
`;
// font-size: clamp(18px, 26px, 27px); font-size: 26px;
export const SubTitle = styled.h2`
font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
      font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 1000px) {
      width: 50%;
  }
`;
