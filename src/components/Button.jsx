import styled from "styled-components";

const Button = styled.button`
    padding: .6rem 1.6rem;
    color: #fff;
    background: linear-gradient(35deg, #494949, #313131);
    border: 2px solid black;
    margin-right: 1.5rem;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 2rem;
    cursor: pointer;
    border-radius: .5rem;
    border: 2px solid transparent;
    transition: all .3s linear;

    :hover {
        border: 2px solid orangered;
    }
`;


export default Button;