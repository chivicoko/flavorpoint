import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '../components/Grid';
import DetailWrapper from '../components/DetailWrapper';
import Button from '../components/Button';
import Info from '../components/Info';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instruction');

    const fetchDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await api.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.id]);

  return (

    // the search from the cuisine specific (italian, american, thai, japanese) apis requests requires payment before it can be granted.
    // <Grid>
    //     <h1>Failed to load resource!!!</h1>
    //     <h3>Hello, <em>402 Error (Payment Reiqured!)</em></h3>
    //     <h4>A request has been made for a cuisine with the id of <em><u>{params.id}</u></em>. But...</h4> <br />
    //     <h4>"The cuisine specific (italian, american, thai, japanese) api requests requires payment before it can be granted."</h4> <br />
    //     <em>If you make the required payment, go back to the code base, uncomment the code directly below this statement, and run the code again
    //         <br />
    //         It should give you the information you require!
    //     </em>
    // </Grid>

    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''}  onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
            
            {activeTab === 'instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>   {/* converting api info that are displayed as html elements to normal texts */}
                    <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>   {/* converting api info that are displayed as html elements to normal texts */}
                </div>
            )}

            {activeTab === 'ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
            )}
        </Info>
    </DetailWrapper>
  )

}

export default Recipe;