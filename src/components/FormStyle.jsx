import styled from "styled-components";

const FormStyle = styled.form`
    // margin: 0 20rem;
    
    div {        
        // width: 100%;
        box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
        position: relative;
        
        input {
            // background: linear-gradient(35deg, #696969, #a1a1a1);
            background: rgba(0, 0, 0, 0.2);
            box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
            font-size: 1.5rem;
            color: white;
            padding: .5rem 3rem;
            border: 2px solid ;
            border-radius: .5rem;
            outline: none;
            width: 100%;
        }

        svg {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(100%, -50%);
            color: white;
        }
    }
`;

export default FormStyle;