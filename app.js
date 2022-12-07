    // Use IIFE to get human data from form
    const compareBtn = document.getElementById('btn');
    compareBtn.addEventListener('click', (function() {
        return function() {
            octopus.init();
        }
    })());

const model = {
    // Create Human Object
    human: null,
    // Create Dino Objects
    dinosMetadata: [
        {
            species: "Triceratops",
            weight: 13000,
            height: 114,
            diet: "herbavor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "First discovered in 1889 by Othniel Charles Marsh",
        },
        {
            species: "Tyrannosaurus Rex",
            weight: 11905,
            height: 144,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "The largest known skull measures in at 5 feet long."
        },
        {
            species: "Anklyosaurus",
            weight: 10500,
            height: 55,
            diet: "herbavor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Anklyosaurus survived for approximately 135 million years."
        },
        {
            species: "Brachiosaurus",
            weight: 70000,
            height: "372",
            diet: "herbavor",
            where: "North America",
            when: "Late Jurasic",
            fact: "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            species: "Stegosaurus",
            weight: 11600,
            height: 79,
            diet: "herbavor",
            where: "North America, Europe, Asia",
            when: "Late Jurasic to Early Cretaceous",
            fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            species: "Elasmosaurus",
            weight: 16000,
            height: 59,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            species: "Pteranodon",
            weight: 44,
            height: 20,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            species: "Pigeon",
            weight: 0.5,
            height: 9,
            diet: "herbavor",
            where: "World Wide",
            when: "Holocene",
            fact: "All birds are living dinosaurs."
        }
    ],
    // Create Dino Constructor
    Dinosaur: function(species, imageSrc, fact) {
        this.species = species;
        this.imageSrc = imageSrc;
        this.fact = fact;
    }
}

const octopus = {
    init: function () {
        // set up model

        // grab data from form and hide it
        formView.init();
        // initialize model to display animals in the grid
        infographicView.init();
    }
}

const formView = {
        init: function() {
            // store human properties from user's input
            this.userName = document.getElementById('name');
            this.heightFeet = document.getElementById('feet');
            this.heightInches = document.getElementById('inches');
            this.weight = document.getElementById('weight');
            this.diet = document.getElementById('diet');
            console.log(`name ${this.userName.value}`);
            console.log(`feet ${this.heightFeet.value}`);
            console.log(`inches ${this.heightInches.value}`);
            console.log(`weight ${this.weight.value}`);
            console.log(`diet ${this.diet.value}`);

            //get reference to form
            this.form = document.getElementById('dino-compare');
            this.render();
        },

        render: function() {
            // hide form
            this.form.style.display = 'none';
        }
    };

const infographicView = {
        init: function() {
            this.grid = document.getElementById('grid');
            this.render();
        },

        render: function() {

        }
    };

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

    // Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic

// Viewmodel for each of the displayed objects:
// species
// image
// random fact per dinosaur (6 different types of facts, 3 should be
// from methods you create)

// Note: Human (in the center of the grid)
// display name
// doesn't need to have a fact
// Pigeon: always displays the same fact "All birds are dinosaurs"

// 3x3 grid of tiles
// human in the center
