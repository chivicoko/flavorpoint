import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import List from "./List";
import CategoryLink from "./CategoryLink";

import React from 'react';

function Category() {
  return (
    <List>
      <CategoryLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </CategoryLink>
      <CategoryLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </CategoryLink>
      <CategoryLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </CategoryLink>
      <CategoryLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </CategoryLink>
    </List>
  )
}


export default Category;