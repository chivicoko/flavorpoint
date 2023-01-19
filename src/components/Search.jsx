import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import FormStyle from './FormStyle';
import { useNavigate } from 'react-router-dom';


function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch />
            <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
        </div>
    </FormStyle>
  )
}

export default Search;