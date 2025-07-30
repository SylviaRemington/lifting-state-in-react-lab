// src/components/IngredientList/IngredientList.jsx

// Notes: props.ingredients is the array passed from App.jsx
// props.addToBurger is the function passed from App.jsx

const IngredientList = (props) => {

  // Addtl I could add to this if I have time: check if ingredients array has items before mapping & I think I have to also check if the array exists too?
  // ...code here....

  return (
    <ul>
      {/* Using .map() to loop over the ingredients array. */}
      {props.ingredients.map((ingredient, index) => (
        // .map can only return one single item, thus button is in li instead of two separate items / they are linked that way
        // Note to self: The reason there are two {{ and }} is because - first one tells JSX that writing JS & second is the JS object I'm passing to the style attribute.
        <li key={index} style={{ backgroundColor: ingredient.color }}>

          {/* Displaying the ingredient name. */}
          {ingredient.name}

          {/* Adding the + button and making sure '+' is on the button */}
          <button onClick={() => props.addToBurger(ingredient)}>+</button>

        </li>
      ))} 
    </ul>
  )
  // return <ul>// map through props.ingredients</ul>;
  // <button>Ingredients List Add</button>
};

export default IngredientList;

