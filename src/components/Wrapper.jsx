import styled from "styled-components";
import { motion } from "framer-motion";


const Wrapper = styled(motion.div)`
    margin: 4rem 0;
    padding-inline: 4rem;

    h3 {
        color: #fff;
        margin-block: 0;
    }

    .custom__slide {
        padding: 2rem;
    }
    .custom__slide:first-child {
        // padding-left: 1.5rem;
    }
    .custom__slide:last-child {
        // padding-right: 1.5rem;
    }
`;

export default Wrapper;