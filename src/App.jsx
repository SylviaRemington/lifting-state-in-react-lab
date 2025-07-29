import { useState } from "react";
import './App.css';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx'

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  // BUILD OUT FUNCTIONALITY OF THIS APP

  const [stack, setStack] = useState([]); //initializing stack state as an empty array

  const handleAddToBurger = (availableIngredient) => {
    console.log('AddToBurger is working!');
    //creating a new array that includes all items currently in stack plus any new availableIngredient that I've added.
    setStack([...stack, availableIngredient]);
  }

 
  //need 2 child components in app.jsx -- one responsible for rendering elements in availableIngredients & other for elements in stack


  //removeFromBurger function --with handle?

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      {/* List & Stack components */}
      {/* Note/Reminder to self: JSX requires props to be passed in key=value format. */}
      {/* Passing availableIngredients because passing the full array to IngredientList.jsx and not just one part of the array. */}
      <IngredientList ingredients={availableIngredients} addToBurger={handleAddToBurger} />
      <BurgerStack />
      </section>
    </main>
  );
};

export default App;

// Notes so I have a plan as to what I'm doing:
/*
What I need to do:
1. Initialize the stack state as an empty array
You’ll be adding ingredients to this array when the user clicks +

2. Pass Props to Your Components
Pass availableIngredients and addToBurger() to IngredientList

Pass stack and removeFromBurger() to BurgerStack

3. Implement the addToBurger() Function
Takes in the clicked ingredient

Adds it to the top of the stack (push it to the array)

Updates the state with the new array

4. Implement the removeFromBurger() Function
Takes in the index or ID of the ingredient to remove

Removes that specific ingredient from the stack

Updates the state with the new array

5. In IngredientList Component:
Loop through props.availableIngredients

For each item:

Show the name and color

Add a + button

When clicked, call props.addToBurger(ingredient)

6. In BurgerStack Component:
Loop through props.stack

For each item:

Show the name and color

Add an X button

When clicked, call props.removeFromBurger(index)

TIPS TO KEEP IN MIND:
Use style={{ backgroundColor: ingredient.color }} to show ingredient colors.

Remember to give each <li> a unique key when mapping.

To “stack” the burger from bottom to top, you may want to display the newest ingredient at the end of the array.

Keep keep components basic (they just display and call props functions) — the logic lives in App.

*/