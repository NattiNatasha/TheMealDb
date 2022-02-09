import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../../api';
import Preloader from '../../components/preloader/Preloader';

import './Recipe.css'

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <div className="wrap">
            <button className='btn' onClick={goBack}>Go Back</button>
            {
                !recipe.idMeal ? <Preloader /> : (
                    <div className="recipe">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <h2>{recipe.strMeal}</h2>
                        <p>Category: <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{recipe.strCategory}</span></p>
                        <p>Area: <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{recipe.strArea}</span></p>
                        <p>{recipe.strInstructions}</p>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(recipe).map(key => {
                                        if (key.includes('Ingredient') && recipe[key]) {
                                            return (
                                                <tr key={key}>
                                                    <td>{recipe[key]}</td>
                                                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                                </tr>
                                            )
                                        }
                                        return null;
                                    })
                                }
                            </tbody>
                        </table>
                        {
                            recipe.strYoutube ? (
                                <div>
                                    <h4>Video Recipe</h4>
                                    <div className="video-wrap">
                                        <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={id} allowFullScreen='true'></iframe>
                                    </div>
                                </div>
                            ) : ''
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Recipe;