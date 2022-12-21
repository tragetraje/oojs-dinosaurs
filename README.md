# Dinosaurs 

## Description

The course project for lesson one of Intermediate JavaScript course at Udacity. The task was to build an infographic that is derived from data that is provided, as well as user input data. 

A 3x3 grid of tiles (9 in total) with the human in the center tile should be generated as a result. Each title will contain the species, an image, and a fact. For the human tile, you will display the name of the human rather than species and no fact is necessary for the human. When the user clicks to generate the infographic from the form, the grid will appear and the form will be hidden. The facts displayed should be random per dinosaur with an opportunity of displaying at least 6 different types of facts (3 should be from the methods you create). One of the titles should be for a pigeon in which the tile should always display, “All birds are considered dinosaurs.”


### Project Requirements

To complete this project, your UI must show the following:

- [ ] The form should contain a button which upon clicking, removes the form
- [ ] The button should append a grid with 9 tiles to the DOM with the Human located in the center
- [ ] The Human tile should display the name of the person and an image, the dino tiles should contain the species, an image and a fact, the bird title should contain the species, image, and "All birds are Dinosaurs."


To complete this project, your backend code must:

- [ ] Contain a class and all necessary objects
- [ ] Contain at least 3 methods for comparing dinosaurs to the human
- [ ] Get user data from the DOM
- [ ] Append tiles with object data to DOM

### Above and Beyond

There's no extra credit in this course, but if you plan to use this project in your portfolio, you may enjoy taking this project further. 

Some ideas might be to validate the form data to ensure the data is acceptable and complete. Allow the user to generate a new infographic. Move the tile colors from CSS to JS for more control. Randomize the order of the tiles while keeping the human in the middle. Create a hover state on the tiles that displays the rest of the species statistics. Create additional methods for comparing data. Rewrite the project to use constructor functions, factory functions, the module pattern, and revealing module pattern. Change out data and images to generate an infographic of your own choosing. Allow the user to select different units for the numbers and update your methods to account for this. Make changes to the CSS, and HTML to make the project your own. 


### Code Review Suggestions/ notes for myself


- Add project description, instructions, technologies used, author's name and credits to README.md
- Consider working with `JSON` file and the Fetch API and Promises. E.g.:
    
  ```
     fetch("dino.json")
       .then(response => response.json())
       .then(json => dinos = json.Dinos.map(dino => console.log(dino)))
  ```
- The three methods used to compare the dino data to human data may be moved to JavaScript Prototype [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes].