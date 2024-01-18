import { FaFlag, FaFlagUsa, FaFlagCheckered, FaRegFlag } from "react-icons/fa";
import List from "./List";
import CategoryLink from "./CategoryLink";

import React from 'react';

function Category() {
  return (
    <List>
      <CategoryLink to={'/cuisine/Italian'}>
        <FaFlag />
        {/* <FaPizzaSlice /> */}
        <h4>Italian</h4>
      </CategoryLink>
      <CategoryLink to={'/cuisine/American'}>
        <FaFlagUsa />
        <h4>American</h4>
      </CategoryLink>
      <CategoryLink to={'/cuisine/Thai'}>
        <FaFlagCheckered />
        <h4>Thai</h4>
      </CategoryLink>
      <CategoryLink to={'/cuisine/Japanese'}>
        <FaRegFlag />
        <h4>Japanese</h4>
      </CategoryLink>
    </List>
  )
}


export default Category;