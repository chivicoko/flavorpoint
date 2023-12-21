import Search from "./Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiOrangeSlice } from "react-icons/gi";
import UserImage from "../img/User.png";

import React from 'react';

function Footer() {
  return (
    <Foot>
      <div className="footer__area">
        <p>&copy; Flavor Point 2023. All Rights Reserved</p>
      </div>
    </Foot>
  )
}

const Foot = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(35deg, red, orange);

  .footer__area p {
    color: #fff;
  }
`;

export default Footer;