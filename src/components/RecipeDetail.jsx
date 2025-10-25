import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const RecipeDetail = () => {

  const {id} = useParams();
  const {recipeApi} = useSelector((state)=>state.recipe);

  const meal = recipeApi?.find((m)=>m.idMeal === id);

  if (!meal) {
    return <h1>Meal not found</h1>
  }

  return (
    <div className='recipe-detail' >
      <center><h1 style={{fontSize:"40px ", fontWeight:"normal", color:"white"}} >RECIPE NAME</h1></center>

      <div className="recipe-img">
        <img src={meal.strMealThumb} alt="" />
      </div>

      <div className="rec-instruction">
        <center><h1>INSTRUCTIONS</h1></center>

        <div className="rec-ins">
        {meal.strInstructions}      
        </div>

      </div>

    <button id='back' onClick={()=>window.open(meal.strYoutube,'_blank')}  >Video Tutorial</button>


    </div>
  )
}

export default RecipeDetail