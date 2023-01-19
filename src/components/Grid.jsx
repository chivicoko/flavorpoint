import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-column: repeat(auto-fit, minmax(20rem, 1fr));
    grip-gap: 3rem;
`;

export default Grid;