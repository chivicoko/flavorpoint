import styled from "styled-components";

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1.5rem;
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