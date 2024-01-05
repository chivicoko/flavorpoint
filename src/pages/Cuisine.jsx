import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Grid from '../components/Grid';
import CuisineCard from '../components/CuisineCard';

function Cuisine() {

    const [ cuisine, setCuisine] = useState([]);
    const params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        // console.log(params.type);
    }, [params.type]);

  return (

    // the cuisine specific (italian, american, thai, japanese) apis requests requires payment before it can be granted.
    // <Grid>
    //     <h1>Failed to load resource!!!</h1>
    //     <h3>Hello, <em>402 Error (Payment Reiqured!)</em></h3>
    //     <h4>A request has been made for the <em><u>{params.type}</u> cuisine</em>. But...</h4> <br />
    //     <h4>"The cuisine specific (italian, american, thai, japanese) api requests requires payment before it can be granted."</h4> <br />
    //     <em>If you make the required payment, go back to the code base, uncomment the code directly below this statement, and run the code again
    //         <br />
    //         It should give you the information you require!
    //     </em>
    // </Grid>


    <Grid>
    {/* <Grid animation={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.5}}> */}
        {cuisine.map((item) => {
            return (
                <CuisineCard key={item.id} className='custom__slide'>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt='' />
                        <h4>{item.title}</h4>
                    </Link>
                </CuisineCard>
            );
        })}
    </Grid>
  );
}

export default Cuisine;