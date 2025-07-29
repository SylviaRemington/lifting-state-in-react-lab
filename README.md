# Lifting State in React Lab

### About:

- Welcome to Reactville, a constantly evolving virtual metropolis. Let’s build this digital town together, one component at a time.

- Today, you’re stepping into the Reactville Burger Shop, a favorite local eatery known for its mouth-watering burgers. In this interactive app, users build their dream burger, choosing from various breads, meats, and toppings. But there’s a catch: it’s also a lesson in ‘lifting state’ in React. Get ready to stack ingredients and elevate your React skills!

- In this lab, students will create a burger builder app with two main components: an ingredients list and a burger stack. Users will be able to add items from the ingredients list to the burger stack to create the perfect burger.

- **Your primary focus will be on using React to execute the user stories below, reinforcing the concept of lifting state.**


## What you’ll build
- In this lab, you’ll be building a burger stacker application. The interface will be divided into two main areas. On one side, you’ll have a list of ingredients. Users can select from these ingredients, and upon selection, these items will move to the other side of the screen. This second area is where the user’s burger is visually constructed. As ingredients are added, they’ll appear stacked in the order they were selected, forming a burger.

- App: The parent component containing BurgerStack and IngredientList. It will also contain stack state, and two functions for manipulating that state.

- BurgerStack: A ul that renders the elements held in stack. Each ingredient rendered in this component should contain a button for removing the ingredient from the stack.

- IngredientList: A ul that renders the elements held in availableIngredients. Each ingredient rendered in this component should contain a button for adding the ingredient to the stack.

- **Pay special attention to the availableIngredients array held in src/App.jsx. You’ll likely begin by rendering this data.**

## User Stories
<em>Here are the user stories for this lab:<em>

- As a user, I want to be able to see a list of the ingredients that can be added to my burger on the left side of the screen.

- As a user, I want to be able to see a stack of the ingredients that make up my burger on the right side of the screen.

- As a user, I want to click a ‘+’ button on an ingredient to add it to my burger stack. This action will place the ingredient on the stack displayed on the right side of the screen, while keeping the original ingredient list on the left unchanged.

- As a user, I want to click an ‘X’ button on an ingredient in my burger stack to remove it. This will take the ingredient off the stack on the right side of the screen, without changing the ingredient list on the left.

## Lab Exercise

**Your primary goal is to implement the user stories listed above.**

1. In src/App.jsx, import src/components/IngredientList/IngredientList.jsx and src/components/BurgerStack/BurgerStack.jsx and add them to the provided section.

2. Initialize a new useState variable titled stack in src/App.jsx.

3. Reference the provided user stories to build out the remaining functionality of this application.

### Hints
1. There should be two child components in src/App.jsx. One will be responsible for rendering elements in availableIngredients, and the other for elements in stack.

2. Your application will require two functions in src/App.jsx. One called addToBurger and another called removeFromBurger. Think carefully about what arguments might need to be passed in to each function.

3. Notice the properties of each object held in availableIngredients. The color property can be applied to elements with inline styling.

- Inline styling in React involves applying CSS styles directly to elements using the style attribute. The attribute accepts an object with camelCased properties as its value.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

