import styled from "styled-components";


const CuisineCard = styled.div`

    height: 18rem;
    min-height: 13rem;
    border-radius: 2rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(0, 0, 0, 0.3);
    transition: all .3s linear;
    
    :hover img {
        transform: scale(1.03);
    }

    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }
    
    a h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default CuisineCard;