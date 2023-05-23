"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert("Insects", [
            {
                name: "Western Pygmy Blue Butterfly",
                description:
                    "It can be recognized by the copper brown and dull blue pattern at the bases of both wings.",
                territory: "North America",
                fact: "The smallest member of the butterfly family is thought to be the pygmy blue butterfly (Brephidium exilis).",
                millimeters: 12,
            },
            {
                name: "Patu Digua Spider",
                description:
                    "They are hard to spot as the males grow to be about only a third of a millimeter, smaller than even the head of a pin.",
                territory: "Northern Colombia",
                fact: "Most of the spiders found around American homes are more helpful than harmful. This includes the smallest spider, the patu digua.",
                millimeters: 1.33,
            },
            {
                name: "Scarlet Dwarf Dragonfly",
                description:
                    "On the extremely small end, the tinniest dragonfly is the scarlet dwarf (Nannophya pygmaea).",
                territory: "Southeast Asia, China and Japan",
                fact: "In fact, the dragonfly's prehistoric ancestor Meganeura was one of the largest insects ever known with a wingspan that exceeded 70 centimeters.",
                millimeters: 20,
            },
            {
                name: "Midget Moths",
                description:
                    " The best way to tell them apart is by looking at the antennae, as butterfly antennae have a tiny ball tip compared to moths who don't.",
                fact: "They start out as little larvae who mine the leaves of various host plants. The caterpillar's munching pattern leaves a unique and rather large imprint on the leaves they feed on.",
                millimeters: 3,
            },
            {
                name: "Bolbe Pygmaea Mantis",
                territory: "Australia",
                fact: "In fact, the praying mantis' arm craning fighting technique and strategy has inspired at least two popular martial arts known as 'Northern Praying Mantis' and 'Southern Praying Mantis.'",
                millimeters: 10,
            },
            {
                name: "Microtityus Minimus Scorpion",
                territory: "Dominican Republic",
                fact: "While scorpion venom is poisonous, only 25 species produce a toxin capable of killing humans.",
                millimeters: 11,
            },
            {
                name: "Euryplatea Nanaknihali Fly",
                fact: "At less than half a millimeter, Euryplatea nanaknihali is the smallest fly species on earth.",
                millimeters: 0.5,
            },
            {
                name: "Uranotaenia lowii Mosquito",
                territory: "Texas, Florida and North Carolina",
                fact: "They locate their targets by utilizing their innate acoustic sensitivity to croaks and other sounds.",
                millimeters: 2.5,
            },
            {
                name: "Fairyfly Wasp",
                description:
                    "They possess neither wings or eyes, have mere holes for mouths and have two tiny antennae.",
                territory: "Hawaii, Costa Rica and Trinidad",
                millimeters: 0.15,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Insects", {
            name: [
                "Western Pygmy Blue Butterfly",
                "Patu Digua Spider",
                "Scarlet Dwarf Dragonfly",
                "Midget Moths",
                "Bolbe Pygmaea Mantis",
                "Microtityus Minimus Scorpion",
                "Euryplatea Nanaknihali Fly",
                "Uranotaenia lowii Mosquito",
                "Fairyfly Wasp",
            ],
        });
    },
};
