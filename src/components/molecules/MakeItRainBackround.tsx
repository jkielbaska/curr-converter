import React, { HTMLAttributes, useState, useEffect } from "react";
import { useInterval } from "react-use"; //zastępuje window.setInterval
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { slideInDown } from "react-animations";

interface Render {
  key: number;
  emoji: string;
  offset: number;
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  key: number | string;
  offset: number | string;
}

const SuperContainer = styled.div`
  display: flex;
  align-items: center;
  width: 10vw;
`;

const slideAnimation = keyframes`${slideInDown}`;

const StyledSlidingDiv = styled.div<ContainerProps>`
  left: ${(props: any) => props.offset}px;
  position: absolute;
  fontsize: 48px;
  animation: 7s infinite ${slideAnimation};
`;

const Rain = () => {
  const [emojisToRender, setEmojisToRender] = useState<Render[]>([
    {
      key: 0,
      emoji: "💸",
      offset: 0,
    },
  ]);

  useEffect(() => {
    const tab = new Array(100).fill(1, 0, 100).map(() => {
      const offset = Math.floor(Math.random() * 1000);
      const key = offset + Math.floor(Math.random() * 100000) + Math.random();
      const emoji = "💸";
      return { offset, key, emoji };
    });
    console.log(tab);
    setEmojisToRender(tab);
  }, []);

  return (
    <SuperContainer>
      {emojisToRender.map(({ key, emoji, offset }) => {
        return (
          <StyledSlidingDiv key={key} offset={offset}>
            {emoji}
          </StyledSlidingDiv>
        );
      })}
    </SuperContainer>
  );
};

export const MakeItRainBackround = () => {
  return (
    <>
      <Rain />
    </>
  );
};

// import React, { HTMLAttributes, useState, useEffect } from "react";
// import { useInterval } from "react-use"; //zastępuje window.setInterval
// import styled from "styled-components";

// const SuperContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 10vw;
// `;

// const EmojiContainer = styled.div<ContainerProps>`
//   @keyframes falldown {
//     0% {
//       margin-top: 0;
//     }
//     100% {
//       margin-top: 600px;
//     }
//   }

//   position: absolute;
//   top: 80px;
//   left: ${(props: any) => props.offset}px;
//   fontsize: 48px;
//   animation-name: falldown;
//   animation-duration: 7s;
// `;

// interface Render {
//   key: number;
//   emoji: string;
//   offset: number;
// }

// interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
//   key: number | string;
//   offset: number | string;
// }

// const Rain = () => {
//   const [emojisToRender, setEmojisToRender] = useState<Render[]>([
//     {
//       key: 0,
//       emoji: "💸",
//       offset: 0,
//     },
//   ]);

//   useEffect(() => {
//     const tab = new Array(100).fill(1, 0, 100).map(() => {
//       const offset = Math.floor(Math.random() * 1000);
//       const key = offset + Math.floor(Math.random() * 100000) + Math.random();
//       const emoji = "💸";
//       return { offset, key, emoji };
//     });
//     console.log(tab);
//     setEmojisToRender(tab);
//   }, []);

//   return (
//     <SuperContainer>
//       {emojisToRender.map(({ key, emoji, offset }) => {
//         return (
//           <EmojiContainer key={key} offset={offset}>
//             {emoji}
//           </EmojiContainer>
//         );
//       })}
//     </SuperContainer>
//   );
// };

// export const MakeItRainBackround = () => {
//   return (
//     <>
//       <Rain />
//     </>
//   );
// };
