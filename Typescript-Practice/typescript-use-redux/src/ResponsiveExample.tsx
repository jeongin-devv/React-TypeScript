import React from 'react';
import './App.css';
import styled from 'styled-components';

const Box = styled.div`
    width: 200px;
    height 200px;
    border: 1px solid red;
    ${({ theme }) => theme.media.desktop`        
        border: 2px solid blue;
        ${(props: { text: any; }) => `&::before{content:"데스크톱 ${props.text}"}`};
    `}
    ${({ theme }) => theme.media.tablet`
        border: 2px solid yellow;
        ${(props: { text: any; }) => `&::before{content:"태블릿 ${props.text}"}`};
    `}
    ${({ theme }) => theme.media.mobile`
        border: 2px solid purple;
        ${(props: { text: any; }) => `&::before{content:"모바일 ${props.text}"}`};
    `}
`;

const App = () => (
  <div className="App">
    <Box />
  </div>
);

export default App;
