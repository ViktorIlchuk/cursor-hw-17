import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #000000;
    width: 80%;
    margin: auto;
    padding: 25px;
`;

export const Countdown = styled.div`
    color: #fdfdfd;
    font-size: 80px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Line = styled.div`
    background-color: #2bca2b;
    width: ${props => props.width}%;
    height: 40px;
    transition: width .4s;
`;
    
export const Button = styled.button`
    width: 100px;
    height: 20px;
    background-color:#81b4cc;
    color: #000000; 
    margin-top: 20px;
    outline: none;   
`;

