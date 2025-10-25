import Loader from './Loader'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Result = () => {

  const { loading, error, recipeApi=[] , searchTerm, hasSearched} = useSelector((state) => state.recipe);
  const navigate = useNavigate();

   useEffect(() => {
    if (!hasSearched) {
      navigate('/');
    }
  }, [hasSearched , navigate]);


  const handleClick = (mealId) => {
    navigate(`/recipe/${mealId}`);
  };

  if (loading) return <Loader />;
  if (error) return <h1>{error}</h1>;
if (hasSearched && (!recipeApi || recipeApi.length === 0)) {
  return <h1  style={{ color: 'white' }} className='no-results' >No results found!</h1>;
}


  return (

    <div className='result'>

      <div className="userInp">
        <center>
          <h1 style={{ fontSize: "28px", fontWeight: "normal" }} >{searchTerm.toUpperCase()}</h1>
        </center>
      </div>

      <div className="output">
        { recipeApi && recipeApi.map((meal) => {
         return(
           <div
            key={meal.idMeal}
            className='recipe-card'
            onClick={() => handleClick(meal.idMeal)}
            style={{ cursor: 'pointer' }}
          >
             <img src={meal.strMealThumb} alt={meal.strMeal} />

            <div className='recipe-overlay'>
            <h4>{meal.strMeal}</h4>
            <button className='rec-btn' >Recipe</button>
            </div>

          </div>
         )
        })}
      </div>

    </div>
  )
}

export default Result