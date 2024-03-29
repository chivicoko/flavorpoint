import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import "@splidejs/splide/dist/css/splide.min.css";
import Wrapper from './Wrapper';
import Card from './Card';
import { Link } from 'react-router-dom';

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem("popular");

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();

            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);            
        }  
    };

  return (
    <div>
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{perPage: 4, arrows: true, pagination: false, drag: "free", gap: ".1rem"}}>
                {popular.map((recipe) => {
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
  );
}

export default Popular;