import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grip-gap: 3rem;
    gap: 3rem;
`;

export default Grid;