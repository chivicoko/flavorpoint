import styled from "styled-components";

const Card = styled.div`
height: 20rem;
min-height: 13rem;
border-radius: 2rem;
padding: 1rem;
background: rgba(0, 0, 0, 0.2);
box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
backdrop-filter: blur(2px);
-webkit-backdrop-filter: blur(2px);
border: 1px solid rgba(0, 0, 0, 0.3);

a {
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    text-decoration: none;
}
img {
    border-radius: 1.8rem;
    width: 100%;
    height: 70%;
    align-self: flex-start;
    transition: all .3s linear;
}
a:hover img {
    transform: scale(1.03);
}
p {
    z-index: 10;
    color: white;
    width: 100%;
    height: 30%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    padding: 0 .3rem;
    align-self: flex-end;
}
`;

export default Card;