    const compareBtn = document.getElementById('btn');
    compareBtn.addEventListener('click', (function() {
        return function() {
            octopus.init();
        }
    })());

    const dinosMetadata = [
        {
            species: "Triceratops",
            weight: 13000,
            height: 114,
            diet: "herbavor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "First discovered in 1889 by Othniel Charles Marsh",
            imgSrc: "images/triceratops.png"
        },
        {
            species: "Tyrannosaurus Rex",
            weight: 11905,
            height: 144,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "The largest known skull measures in at 5 feet long.",
            imgSrc: 'images/tyrannosaurus rex.png'
        },
        {
            species: "Anklyosaurus",
            weight: 10500,
            height: 55,
            diet: "herbavor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Anklyosaurus survived for approximately 135 million years.",
            imgSrc: 'images/anklyosaurus.png'
        },
        {
            species: "Brachiosaurus",
            weight: 70000,
            height: "372",
            diet: "herbavor",
            where: "North America",
            when: "Late Jurasic",
            fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
            imgSrc: 'images/brachiosaurus.png'
        },
        {
            species: "Stegosaurus",
            weight: 11600,
            height: 79,
            diet: "herbavor",
            where: "North America, Europe, Asia",
            when: "Late Jurasic to Early Cretaceous",
            fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
            imgSrc: 'images/stegosaurus.png'
        },
        {
            species: "Elasmosaurus",
            weight: 16000,
            height: 59,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
            imgSrc: 'images/elasmosaurus.png'
        },
        {
            species: "Pteranodon",
            weight: 44,
            height: 20,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
            imgSrc: 'images/pteranodon.png'
        },
        {
            species: "Pigeon",
            weight: 0.5,
            height: 9,
            diet: "herbavor",
            where: "World Wide",
            when: "Holocene",
            fact: "All birds are living dinosaurs.",
            imgSrc: 'images/pigeon.png'
        }
    ];

const model = {
    // Create Human Object
    human: null,
    // Create Dino Objects
    dinosaurs: [],
    // Create Dino Constructor
    Dinosaur: function(species, imageSrc, fact) {
        this.species = species;
        this.imgSrc = imageSrc;
        this.fact = fact;
    }
}

const octopus = {
    init: function () {
        formView.init();
        infographicView.init();
    },
    getRandomFactForDinosaur: function(dinoMetaData) {
        const human = this.getHuman();
        const compareFunctions = [
            this.compareDiets(dinoMetaData, human),
            this.compareHeights(dinoMetaData, human),
            this.compareWeights(dinoMetaData, human),
            this.getDinosaurFact(dinoMetaData),
            this.getHabitat(dinoMetaData),
            this.getTimeOfPresence(dinoMetaData)
        ];
        return compareFunctions[Math.floor(Math.random() * compareFunctions.length)];
    },

    getDinosaurFact: function(dinosaur) {
        return `${dinosaur.fact}`;
    },

    getHabitat: function(dinosaur) {
        return `Their habitat was ${dinosaur.where}`;
    },

    getTimeOfPresence: function(dinosaur) {
        return `Lived in ${dinosaur.when}`;
    },

    compareDiets: function(dinosaur, human) {
        if (dinosaur.diet === human.diet) {
            return `Both you and ${dinosaur.species} have same diets`
        } else {
            return `${dinosaur.species} consumed ${dinosaur.diet} diet`;
        }
    },
    compareHeights: function(dinosaur, human) {
        if (dinosaur.height === human.height) {
            return `${dinosaur.species} were as high as humans`;
        } else if (dinosaur.height < human.height) {
            return `${dinosaur.species} were tiny`;
        } else {
            return `${dinosaur.species} were taller than a human`
        }
    },
    compareWeights: function(dinosaur, human) {
        if (dinosaur.weight === human.weight) {
            return `${dinosaur.species} were as heavy as humans`;
        } else if (dinosaur.weight < human.weight) {
            return `${dinosaur.species} were light as a feather`;
        } else {
            return `${dinosaur.species} were heavier than a human`
        }
    },
    convertFeetInchesToInches: function(feet, inches) {
        return (feet * 12) + inches;
    },
    getDinosaurs: function() {
        return model.dinosaurs;
    },
    setDinosaurs: function (dinosaursData) {
        for (let i = 0; i < dinosaursData.length; i++) {
            const currentDinoData = dinosaursData[i];
            
            if (currentDinoData.species === 'Pigeon') {
                const bird = Object.assign(
                    {}, 
                    new model.Dinosaur(
                        currentDinoData.species,
                        currentDinoData.imgSrc,
                        currentDinoData.fact
                    )
                );
                model.dinosaurs.push(bird);
            } else {
                const dinosaur = new model.Dinosaur(
                    currentDinoData.species,
                    currentDinoData.imgSrc,
                    this.getRandomFactForDinosaur(currentDinoData)
                );
                model.dinosaurs.push(dinosaur);
            }
        }
    },
    getHuman: function() {
        return model.human;
    },
    setHuman: function(human) {
        model.human = human;
    }
}

const formView = {
        init: function() {
            this.form = document.getElementById('dino-compare');

            // store human properties from user's input
            this.userName = document.getElementById('name');
            this.heightFeet = document.getElementById('feet');
            this.heightInches = document.getElementById('inches');
            this.weight = document.getElementById('weight');
            this.diet = document.getElementById('diet');

            octopus.setHuman({
                name: this.userName.value,
                height: octopus.convertFeetInchesToInches(
                    this.heightFeet.value,
                    this.heightInches.value
                ),
                weight: this.weight.value,
                diet: this.diet.value,
                imgSrc: 'images/human.png'
            });
            this.render();
        },
        render: function() {
            this.form.style.display = 'none';
        }
    };

const infographicView = {
        init: function() {
            octopus.setDinosaurs(dinosMetadata);
            this.render();
        },

        render: function() {
            this.grid = document.getElementById('grid');
            const dinosaurs = octopus.getDinosaurs();
            const human = octopus.getHuman();
            const tilesCount = 9;
            let currentDinoCount = 0;

            for (let i = 1; i <= tilesCount; i++) {
                let currentDino = dinosaurs[currentDinoCount];
                let gridItem = document.createElement('div');
                gridItem.className = 'grid-item';

                let speciesNameEl = document.createElement('h3');
                let speciesImgEl = document.createElement('img');
                let speciesFactEl = document.createElement('p');

                // place human in the center of the grid
                if (i === 5) {
                    speciesNameEl.textContent = human.name;
                    speciesImgEl.src = human.imgSrc;
                    speciesFactEl.textContent = '';
                    currentDinoCount --;
                } else {
                    speciesNameEl.textContent = currentDino.species;
                    speciesImgEl.src = currentDino.imgSrc;
                    speciesFactEl.textContent = currentDino.fact;
                }

                gridItem.appendChild(speciesNameEl);
                gridItem.appendChild(speciesImgEl);
                gridItem.appendChild(speciesFactEl);
                this.grid.appendChild(gridItem);
                currentDinoCount ++;
            }
        }
    };
