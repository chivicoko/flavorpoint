import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import Wrapper from './Wrapper';
import Card from './Card';
// import Gradient from './Gradient';
import { Link } from 'react-router-dom';


function Veggie() {
    
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {

        const check = localStorage.getItem("veggie");

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            
            // console.log(data.recipes);
        }  
    };
    // console.log(veggie);

  return (
    <div>
        <Wrapper>
            <h3>Our Vegetarian Picks</h3>
            <Splide options={{perPage: 3, arrows: true, pagination: false, drag: "free", gap: "2rem"}}>
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id} className='custom__slide'>
                            <Card>
                                <Link to={"/recipe/" + recipe.id}>
                                    <img src = {(recipe.image) ? recipe.image : 'https://via.placeholder.com/300x400'} alt={recipe.title} />
                                    <p>{recipe.title}</p>
                                    {/* <img src = {(recipe.image) ? recipe.image : 'https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net'} alt={recipe.title} /> */}
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    </div>
  )
}

export default Veggie;