import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  text-align: center;
  padding: 165px 45px;
  width: 50%;
  margin: auto;

  @media (max-width: 1500px) {
      align-items: center;
      width: 71%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 640px;
  font-size: 50px;
  font-weight: 900;
  margin: auto;

  @media (max-width: 600px) {
      font-size: 25px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
      font-size: 18px;
  }
`;