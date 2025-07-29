// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        // .map can only return one single item, thus button is in li instead of two separate items / they are linked that way
        // Note to self: The reason there are two {{ and }} is because - first one tells JSX that writing JS & second is the JS object I'm passing to the style attribute.
        <li key={index} style={{ backgroundColor: ingredient.color }}>
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
