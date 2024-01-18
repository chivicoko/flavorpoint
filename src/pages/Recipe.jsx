import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailWrapper from '../components/DetailWrapper';
import Button from '../components/Button';
import Info from '../components/Info';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await api.json();
        setDetails(detailData);
        // console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.id]);

  return (
    <DetailWrapper>
        <div className='title__img'>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
            {/* {details.diets.map((diet) => (
                <p>{diet}</p>
            ))} */}
            {/* <div className='more__details'>
                <p>Gluten Free? <span>{details.glutenFree === true ? 'YES!' : 'NO'}</span></p>
                <p>Dairy Free? <span>{details.dairyFree === true ? 'YES!' : 'NO'}</span></p>
                <p>Vegan? <span>{details.vegan === true ? 'YES!' : 'NO'}</span></p>
            </div> */}
        </div>

        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''}  onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
            
            {activeTab === 'instructions' && (
                <div>
                    <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                    <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
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