// import styled from 'styled-components/macro';
// import { Link as ReachRouterLink } from 'react-router-dom';

// // export const Background = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
// //     no-repeat;
// //     height: 100vh;
// //     width: 100%;
// //     box-sizing: border-box;
// // /* 
// //     @media  (max-width: 375px) {
// //       width: auto;
// //     } */
// //    @media (max-width: 1150px) {
// //     ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background-size: none;`};
// //    }
// // `;

// // export const Background = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
// //   url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
// //     no-repeat;

// //     @media screen and (max-width: 650px) {
// //       background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
// //       url(${({ src }) => (src ? `../images/misc/${src}Small.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
// //     no-repeat;
// //         width: 100%;
// //         background-position: initial;
// //     }

// //   @media (max-width: 1100px) {
// //     ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
// //     background-position: center;
// //     background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
// //       url(${({ src }) => (src ? `../images/misc/${src}Small.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
// //     no-repeat;
// //   }
// // `;

// export const Background = styled.div`
//     background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
//     no-repeat;
//     width: 100%;

// @media screen and (max-width: 650px) {
//   background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
//   url(${({ src }) => (src ? `../images/misc/${src}Small.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
// no-repeat;
//     width: 100%;
//     background-position: initial;
// }

// @media (max-width: 1100px) {
// ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
// background-position: center;
// background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
//   url(${({ src }) => (src ? `../images/misc/${src}Small.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
// no-repeat;
// }
// `;

// export const Container = styled.div`
// /* background-size: unset */
//   display: flex;
//   margin: 0 56px;
//   height: 100px; 
//   justify-content: space-between;
//   align-items: center;

//   a {
//     display: flex;
//   }

//   @media (max-width: 1000px) {
//     margin: 0 30px;
//   }
// `;

// export const Logo = styled.img`
//   height: 36px;
//   width: 134px;
//   margin-right: 40px;

//   @media (min-width: 1449px) {
//     height: 45px;
//     width: 167px;
//   }
// `;

// export const ButtonLink = styled(ReachRouterLink)`
//   display: block;
//   background-color: #e50914;
//   width: 84px;
//   height: fit-content;
//   color: white;
//   border: 0;
//   font-size: 20px;
//   border-radius: 3px;
//   padding: 8px 17px;
//   cursor: pointer;
//   text-decoration: none;

//   &:hover {
//     background: #f40612;
//   }
// `;

// // Header Profile
// export const Feature = styled(Container)`
//   padding: 150px 0 500px 0;
//   flex-direction: column;
//   align-items: normal;
//   width: 50%;

//   @media (max-width: 1100px) {
//     // display: none;
//     width: 80%;
//   }
// `;

// export const FeatureCallout = styled.h2`
//   color: white;
//   /* font-size: 50px; */
//   line-height: normal;
//   font-weight: bold;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
//   margin: 0;

//   font-size: clamp(2.5rem, 10vw, 3rem);
//   margin-bottom: 1rem;
//   /* box-shadow: 3px 5px #ffabe1; */
//   letter-spacing: 3px;
// `;

// export const HeaderText = styled.p`
//   color: white;
//   /* font-size: 22px; */
//   line-height: normal;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

//   font-size: clamp(2rem, 2.5vw, 2rem);
//   margin-bottom: 2rem;
// `;

// export const Frame = styled.div``;

// export const TextLink = styled.p`
//   color: #fff;
//   text-decoration: none;
//   margin-right: 30px;
//   font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
//   cursor: pointer;
//   font-size: 20px;
//   padding: 10px;

//   &:hover {
//     text-decoration: underline;
//   }

//   &:last-of-type {
//     margin-right: 0;
//   }
// `;

// export const Group = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const Picture = styled.button`
//   background: url(${({ src }) => src});
//   background-size: contain;
//   border: 0;
//   width: 35px;
//   height: 35px;
//   cursor: pointer;
//   border-radius: 3px;
// `;

// export const Dropdown = styled.div`
//   display: none;
//   position: absolute;
//   background-color: black;
//   padding: 10px;
//   width: 200px;
//   top: 32px;
//   right: 10px;

//   ${Group}:last-of-type ${TextLink} {
//     cursor: pointer;
//   }

//   ${Group} {
//     margin-bottom: 10px;

//     &:last-of-type {
//       margin-bottom: 0;
//     }

//     ${TextLink} {
//       cursor: pointer;
//     }

//     ${Picture} {
//       cursor: default;
//     }
//   }

//   button {
//     margin-right: 10px;
//   }

//   p {
//     font-size: 12px;
//     margin-bottom: 0;
//     margin-top: 0;
//   }
// `;

// export const Profile = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 20px;
//   position: relative;

//   button {
//     cursor: pointer;
//   }

//   &:hover > ${Dropdown} {
//     display: flex;
//     flex-direction: column;
//   }
// `;
// // N:B don't show on small view port 558h
// // Search
// export const Search = styled.div`
//   display: flex;
//   align-items: center;

//   svg {
//     color: white;
//     cursor: pointer;
//   }

//   @media (max-width: 700px) {
//     display: none;
//   }
// `;

// export const SearchIcon = styled.button`
//   cursor: pointer;
//   background-color: transparent;
//   border: 0;
//   outline: 0;
//   height: 32px;
//   width: 32px;
//   padding: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   img {
//     filter: brightness(0) invert(1);
//     width: 16px;
//   }
// `;

// export const SearchInput = styled.input`
//   background-color: rgba(64, 64, 64, 0.5);
//   color: white;
//   border: 1px solid white;
//   transition: width 0.5s;
//   height: 30px;
//   font-size: 14px;
//   border-radius: 4px;
//   margin-left: ${({ active }) => (active === true ? '10px' : '0')};
//   padding: ${({ active }) => (active === true ? '0 10px' : '0')};
//   opacity: ${({ active }) => (active === true ? '1' : '0')};
//   width: ${({ active }) => (active === true ? '200px' : '0px')};

//   &:focus {
//     background-color: rgba(0, 0, 0, 0.8);
//   }
// `;

// // PlayButton
// export const PlayButton = styled.button`
//   box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
//   background-color: #e6e6e6;
//   color: #000;
//   border-width: 0;
//   padding: 10px 20px;
//   border-radius: 5px;
//   max-width: 130px;
//   font-weight: bold;
//   font-size: 20px;
//   margin-top: 10px;
//   cursor: pointer;
//   transition: background-color 0.5s ease;

//   &:hover {
//     background-color: #ff1e1e;
//     color: white;
//   }
// `;

import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

     @media screen and (max-width: 650px) {
       background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
       url(${({ src }) => (src ? `../images/misc/${src}Small.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
     no-repeat;
         width: 100%;
         background-position: initial;
     }

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: cover;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const TextLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: flex;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 54px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${TextLink} {
      cursor: pointer;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: block;
  }
`;

export const FeatureCallout = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
