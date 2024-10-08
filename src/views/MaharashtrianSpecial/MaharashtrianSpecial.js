import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MaharashtrianSpecialData } from '../../data/MaharashtrianSpecialData';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function MaharashtrianSpecial() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const RecipeDetails = MaharashtrianSpecialData.find((dataObject) => dataObject.id === id);

    if (!RecipeDetails) {
        return (
            <>
                <div>
                    <Navbar />
                </div>
                <div>
                    <h1>Recipe not found</h1>
                    <p>We couldn't find the recipe you're looking for.</p>
                </div>
                <Footer />
            </>
        );
    }


    const embedUrl = RecipeDetails.recipeVideo.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/');

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="w-50 mx-auto">
                <h1 className='text-center heading-deep-blue'>{RecipeDetails.title}</h1>
                <div className="d-flex justify-content-center my-4">
                    <img src={RecipeDetails.image} alt={RecipeDetails.title} className='w-100 rounded h-300' />
                </div>

                <h3 className='text-success text-center heading-navy-blue'>Ingredients:</h3>
                <ul className='bg-secondary text-white rounded py-3'>
                    {RecipeDetails.ingredients.length > 0 ? (
                        RecipeDetails.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.trim()}</li>
                        ))
                    ) : (
                        <p>No ingredients available.</p>
                    )}
                </ul>
                <h3 className='text-success text-center heading-crimson-red'>Instructions:</h3>
                <ul className='bg-secondary text-white rounded p-4'>
                    {RecipeDetails.instructions.length > 0 ? (
                        RecipeDetails.instructions.map((instruction, index) => (
                            <li key={index}>{instruction.trim()}</li>
                        ))
                    ) : (
                        <p>No instructions available.</p>
                    )}
                </ul>
            </div>
            <div className="w-50 mx-auto">
                <h2 className='text-center heading-golden-yellow'>Nutrition :</h2>
                <ul className='bg-secondary text-white rounded p-4 mb-3'>
                    {RecipeDetails.nutrition.length > 0 ? (
                        RecipeDetails.nutrition.map((nutrition, index) => (
                            <li key={index}>{nutrition.trim()}</li>
                        ))
                    ) : (
                        <p>No nutrition available.</p>
                    )}
                </ul>
            </div>
            <div className="w-50 mx-auto mb-3">
                <h2 className='text-center heading-bright-cyan'>Recipe Video</h2>
                <div className="d-flex justify-content-center">
                    <iframe
                        width="560"
                        height="315"
                        src={embedUrl}
                        title={RecipeDetails.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MaharashtrianSpecial;