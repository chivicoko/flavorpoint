import styled from "styled-components";
import { motion } from "framer-motion";

const DetailWrapper = styled(motion.div)`
    margin-top: 6rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2 {
        margin-bottom: 2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 1.7rem;
    }


    p {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;


export default DetailWrapper;