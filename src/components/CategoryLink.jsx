import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CategoryLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border-radius: 8px;
    margin-right: 2rem;
    text-decoration: none;
    padding: .8rem 1rem;
    cursor: pointer;
    // transform: scale(0.8);

    background: rgba(0, 0, 0, 0.6);
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1px solid orangered;

    h4 {
        color: white;
        font-size: 1rem;
    }

    svg {
        color: white;
        font-size: 2rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }

`;


export default CategoryLink;