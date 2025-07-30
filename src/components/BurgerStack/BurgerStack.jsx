// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
      {/* mapping through props.ingredients */}
      {/* using map to loop over stack array, and returning one <li> for each ingredient in it, so each item in the burger stack gets displayed on the screen. */}
      {props.stack.map((ingredient, index) => (

        // styling below that lesson provided
        <li key={index} style={{ backgroundColor: ingredient.color }}>

          {/* Displaying the ingredient name. */}
          {ingredient.name}
          
          {/* Adding the X button and making sure 'X' is on the button */}
          <button onClick={() => props.removeFromBurger(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
