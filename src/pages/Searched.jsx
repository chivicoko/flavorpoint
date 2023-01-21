import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Grid from '../components/Grid';
import CuisineCard from '../components/CuisineCard';


function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();
    
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

  return (
    
    // the search from the cuisine specific (italian, american, thai, japanese) apis requests requires payment before it can be granted.
    // <Grid>
    //     <h1>Failed to load resource!!!</h1>
    //     <h3>Hello, <em>402 Error (Payment Reiqured!)</em></h3>
    //     <h4>A request has been made for <em><u>{params.search}</u> cuisines</em>. But...</h4> <br />
    //     <h4>"The cuisine specific (italian, american, thai, japanese) api requests requires payment before it can be granted."</h4> <br />
    //     <em>If you make the required payment, go back to the code base, uncomment the code directly below this statement, and run the code again
    //         <br />
    //         It should give you the information you require!
    //     </em>
    // </Grid>


    <Grid>
        {searchedRecipes.map((item) => {
            return (
                <CuisineCard key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </CuisineCard>
            )
        })}
    </Grid>
  )
}

export default Searched;