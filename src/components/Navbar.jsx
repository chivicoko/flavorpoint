import Search from "./Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiOrangeSlice } from "react-icons/gi";
import UserImage from "../img/User.png";

import React from 'react';

function Navbar() {
  return (
    <Nav>
      <div className="logo__form">
        <div className="logo__group">
          <GiOrangeSlice />
          <Logo to={"/flavorpoint"}>Flavor Point</Logo>
        </div>
        <div className="form"><Search /></div>
      </div>
      <div className="user__image"><img src={UserImage} alt="User" /></div>
    </Nav>
  )
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 1rem 2rem;
  // margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(35deg, red, orange);

  .logo__form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 13rem;
  }
  .logo__group {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
      font-size: 3rem;
      color: #fff;
    }
  }

  .user__image {
    cursor: pointer;
  }
  .user__image img {
    border-radius: 50%;
    width: 3rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  // width: 250px;
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Lobster Two', cursive;
`;


export default Navbar;