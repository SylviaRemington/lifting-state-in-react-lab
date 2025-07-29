// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        // .map can only return one single item, thus button is in li instead of two separate items / they are linked that way
        <li key={index}>
          {ingredient.name}
          <button onClick={() => props.addToBurger(ingredient)}>+</button>
        </li>
      ))} 
    </ul>
  )
  // return <ul>// map through props.ingredients</ul>;
  // <button>Ingredients List Add</button>
};

export default IngredientList;
