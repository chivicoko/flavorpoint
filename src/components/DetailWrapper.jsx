import styled from "styled-components";
import { motion } from "framer-motion";

const DetailWrapper = styled(motion.div)`
    margin-top: 6rem;
    margin-bottom: 5rem;
    padding-inline: 5rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }

    .title__img {
        width: 50vw;
    
        h2 {
            margin-bottom: 2rem;
            // font-size: 1rem;
            color: #fff;
        }

        img {
            border-radius: 1rem;
        }
    }


    li {
        font-size: 1.2rem;
        line-height: 1.7rem;
        color: #fff;
    }

    a {
        color: #fff;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        color: #fff;
    }
`;


export default DetailWrapper;