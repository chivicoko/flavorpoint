import styled from "styled-components";
import { motion } from "framer-motion";

const DetailWrapper = styled(motion.div)`
    margin-top: 6rem;
    margin-bottom: 5rem;
    padding-inline: 5rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, red, orange);
        color: #fff;
        border: 2px solid #fff;
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
        .more__details {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }
        .more__details p {
            display: flex;
            justify-content: flex-start;
            gap: 3rem;
            font-size: 1.5rem;
            margin-top: 1rem;
        }
        .more__details p span {
            color: lemonchiffon;
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