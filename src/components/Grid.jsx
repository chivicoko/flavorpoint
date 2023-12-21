import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    column-gap: 1rem;
    row-gap: 5rem;
    
    margin: 4rem 0;
    padding-inline: 4rem;

    h4 {
        color: #fff;
        margin: 0;
    }
`;

export default Grid;