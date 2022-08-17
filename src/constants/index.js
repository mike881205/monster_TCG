const importImages = (r) => {
    return r.keys().map(r);
};

const Images = importImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Constants = {
    Types: [
        //0
        {
            element: "Grass",
            color: "#7db808",
            symbol: "G"
        },
        //1
        {
            element: "Fire",
            color: "#e24243",
            symbol: "F"
        },
        //2
        {
            element: "Water",
            color: "#5bc7e4",
            symbol: "W"
        },
        //3
        {
            element: "Lightning",
            color: "#fab536",
            symbol: "L"
        },
        //4
        {
            element: "Psychic",
            color: "#a55e9a",
            symbol: "P"
        },
        //5
        {
            element: "Fighting",
            color: "#ff511f",
            symbol: "F"
        },
        //6
        {
            element: "Fairy",
            color: "pink",
            symbol: "F"
        },
        //7
        {
            element: "Normal",
            color: "white",
            symbol: "N"
        },
    ],


    Stages: ["Basic", "Stage 1", "Stage 2"],


    Rarities: ["Common", "Uncommon", "Rare"],


    Monsters: [
        {
            name: "Bulbasaur",
            rarity: 0,
            type: [0],
            weakness: [1],
            resistance: null,
            retreatCost: [7],
            stage: 0,
            HP: 40,
            special: null,
            abilities: [
                {
                    name: "Leechseed",
                    description: "Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.",
                    cost: [0, 0],
                    damage: 20,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                }
            ],
            attached: {
                energy: [],
                status: [],
            },
            image: ""
        },

        ////////////////////////////////

        {
            name: "Ivysaur",
            rarity: 1,
            type: [0],
            weakness: [1],
            resistance: null,
            retreatCost: [7],
            stage: 1,
            HP: 60,
            special: null,
            abilities: [
                {
                    name: "Vine Whip",
                    description: null,
                    cost: [0, 7, 7],
                    damage: 30,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
                {
                    name: "Poisonpowder",
                    description: "The defending Pokemon is now poisoned.",
                    cost: [0, 0, 0],
                    damage: 20,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                }
            ],
            attached: {
                energy: [],
                status: [],
            },
            image: ""
        },

        ////////////////////////////////

        {
            name: "Venusaur",
            rarity: 3,
            type: [0],
            weakness: [1],
            resistance: null,
            retreatCost: [7, 7],
            stage: 2,
            HP: 100,
            special: {
                name: "Energy Trans",
                description: "As often as you like during your turn (before you attack), you may take 1 Grass energy card attached to one of your Pokemon and attach it to a different one. This cannot be used if Venusaur is Asleep, Confused, or Paralyzed.",
                execute: (player, opponent, ability) => {
                    console.log(`Special: ${player.special.name}`)
                    console.log("=======================")
                }
            },
            abilities: [
                {
                    name: "Solarbeam",
                    description: null,
                    cost: [0, 0, 0, 0],
                    damage: 60,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
            ],
            attached: {
                energy: [],
                status: [],
            },
            image: ""
        },

        ////////////////////////////////

        {
            name: "Charmander",
            rarity: 0,
            type: [1],
            weakness: [2],
            resistance: null,
            retreatCost: [7],
            stage: 0,
            HP: 50,
            special: null,
            abilities: [
                {
                    name: "Scratch",
                    description: null,
                    cost: [7],
                    damage: 10,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
                {
                    name: "Ember",
                    description: "Discard 1 Fire energy card attached to Charmander in order to use this attack.",
                    cost: [1, 7],
                    damage: 30,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
            ],
            attached: {
                energy: [],
                status: [],
            },
            image: ""
        },

        ////////////////////////////////

        {
            name: "Charmeleon",
            rarity: 1,
            type: [1],
            weakness: [2],
            resistance: null,
            retreatCost: [7],
            stage: 1,
            HP: 80,
            special: null,
            abilities: [
                {
                    name: "Slash",
                    description: null,
                    cost: [7, 7, 7],
                    damage: 30,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
                {
                    name: "Flamethrower",
                    description: "Discard 1 Fire energy card attached to Charmander in order to use this attack.",
                    cost: [1, 1, 7],
                    damage: 50,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
            ],
            attached: {
                energy: [],
                status: [],
            },
            image: ""
        },

        ////////////////////////////////

        {
            name: "Charizard",
            rarity: 2,
            type: [1],
            weakness: [2],
            resistance: [
                {
                    type: 5,
                    amount: 30
                }
            ],
            retreatCost: [7, 7, 7],
            stage: 2,
            HP: 120,
            special: {
                name: "Energy Burn",
                description: "As often as you like during your turn (before you attack), you may turn all energy cards attached to Charizard into Fire energy for the rest of the turn. This cannot be used if Charizard is Asleep, Confused, or Paralyzed.",
                execute: (player, opponent, ability) => {
                    console.log(`Special: ${player.special.name}`)
                    console.log("=======================")
                }
            },
            abilities: [
                {
                    name: "Fire Spin",
                    description: "Discard 2 Fire energy cards attached to Charizard in order to use this attack.",
                    cost: [1, 1, 1, 1],
                    damage: 100,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
            ],
            attached: {
                energy: [],
                status: [],
            },
            image: ""
        },

        ////////////////////////////////

        {
            name: "Squirtle",
            rarity: 0,
            type: [2],
            weakness: [3],
            resistance: null,
            retreatCost: [7],
            stage: 0,
            HP: 40,
            special: null,
            abilities: [
                {
                    name: "Bubble",
                    description: "Flip a coin. If heads, the defending Pokemon is now Paralyzed.",
                    cost: [2],
                    damage: 10,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
                {
                    name: "Withdraw",
                    description: " Flip a coin. If heads, prevent all damage done to Squirtle during your opponent's next turn. Any other effects of attacks, still happen.",
                    cost: [2, 7],
                    damage: 0,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
            ],
            attached: {
                energy: [],
                status: [],
            },
            image: ""
        },

        ////////////////////////////////

        {
            name: "Wartortle",
            rarity: 1,
            type: [2],
            weakness: [3],
            resistance: null,
            retreatCost: [7],
            stage: 1,
            HP: 70,
            special: null,
            abilities: [
                {
                    name: "Withdraw",
                    description: " Flip a coin. If heads, prevent all damage done to Wartortle during your opponent's next turn. Any other effects of attacks, still happen.",
                    cost: [2, 7],
                    damage: 0,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
                {
                    name: "Bite",
                    description: null,
                    cost: [2, 7, 7],
                    damage: 40,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
            ],
            attached: {
                energy: [],
                status: [],
            },
            image: ""
        },

        ////////////////////////////////

        {
            name: "Blastoise",
            rarity: 2,
            type: [2],
            weakness: [3],
            resistance: null,
            retreatCost: [7, 7, 7],
            stage: 2,
            HP: 100,
            special: {
                name: "Rain Dance",
                description: "As often as you like during your turn (before you attack), you may attach 1 Water Energy card to one of your Water type Pokemon. This does not use up your one energy card attachment for this turn. This cannot be used if Blastoise is Asleep, Confused, or Paralyzed.",
                execute: (player, opponent, ability) => {
                    console.log(`Special: ${player.special.name}`)
                    console.log("=======================")
                }
            },
            abilities: [
                {
                    name: "Hydropump",
                    description: "Does 40 damage plus 10 more for each Water Energy card attached to Blastoise but not used to pay for this attack's energy cost. Extra Water Energy after the second, doesn't count.",
                    cost: [2, 2, 2],
                    damage: 40,
                    execute: (player, opponent, ability) => {
                        console.log(ability)
                        console.log("=======================")
                    }
                },
            ],
            attached: {
                energy: [],
                status: [],
            },
            image: ""
        },

        ////////////////////////////////

        // {
        //     name: "Caterpie",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Metapod",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Butterfree",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Weedle",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Kakuna",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Beedrill",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Pidgey",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Pidgeotto",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Pidgeot",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Rattata",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Raticate",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Spearow",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Fearow",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Ekans",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Arbok",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Pikachu",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Raichu",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Sandshrew",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Sandslash",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Nidoran (F)",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Nidorina",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Nidoqueen",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Nidoran (M)",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Nidorino",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Nidoking",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Clefairy",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Clefable",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Vulpix",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Ninetails",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Jigglypuff",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Wigglytuff",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Zubat",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Golbat",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Oddish",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Gloom",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Vileplume",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Paras",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Parasect",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Venonat",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Venomoth",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Diglett",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Dugtrio",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Meowth",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Persian",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Psyduck",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Golduck",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Mankey",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Primeape",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Growlithe",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Arcanine",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Poliwag",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Poliwhirl",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Poliwrath",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Abra",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Kadabra",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Alakazam",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Machop",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Machoke",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Machamp",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Bellsprout",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Weepinbell",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Victreebell",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Tentacool",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Tentacruel",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Geodude",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Graveler",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Golem",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Ponyta",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Rapidash",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Slowpoke",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Slowbro",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Magnemite",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Magneton",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Farfetch'd",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Doduo",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Dodrio",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Seel",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Dewgong",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Grimer",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Muk",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Shelder",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Cloyster",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Gastly",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Haunter",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Gengar",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Onix",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Drowzee",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Hypno",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Krabby",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Kingler",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Voltorb",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Electrode",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Exeggcute",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Exeggutor",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Cubone",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Marrowak",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Hitmonlee",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Hitmonchan",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Lickitung",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Koffing",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Weezing",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Rhyhorn",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Rhydon",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Chansey",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Tangela",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Kangaskhan",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Horsea",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Seedra",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Goldeen",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Seaking",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Staryu",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Starmie",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Mr. Mime",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Scyther",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Jynx",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Electabuzz",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Magmar",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Pinsir",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Tauros",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Magikarp",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Gyarados",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Lapras",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Ditto",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Eevee",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Vaporeon",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Jolteon",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Flareon",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Porygon",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Omanyte",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Omastar",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Kabuto",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Kabutops",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Aerodactyl",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Snorlax",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Articuno",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Zapdos",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Moltres",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Dratini",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Dragonair",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Dragonite",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Mewtwo",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // },

        // ////////////////////////////////

        // {
        //     name: "Mew",
        //     rarity: 0,
        //     type: [],
        //     weakness: [],
        //     resistance: [
        //         {
        //             type: '',
        //             amount: ""
        //         }
        //     ],
        //     retreatCost: [],
        //     stage: 0,
        //     HP: 0,
        //     special: null,
        //     abilities: [
        //         {
        //             name: "",
        //             description: null,
        //             cost: [],
        //             damage: 0,
        //             // execute: (opponent, player) => {

        //             // },
        //         },
        //     ],
        //     attached: {
        //         energy: [],
        //         status: [],
        //     },
        //     image: ""
        // }
    ]
};

Constants.Monsters.forEach((monster, i) => {
    monster.image = Images[i];
})

export default Constants;