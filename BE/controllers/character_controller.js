import Character from "../models/characters.js";
import Nemesis from "../models/nemesis.js";
import Secret from "../models/secret.js";

const getAllCharacters = async (req, res) => {
    try {
        //Get all characters + nemesis + secret in tree structure
        const characters = await Character.findAll({
            include: {
                model: Nemesis,
                include: Secret,
            },
        });

        //Get all nemesis
        const nemesis = await Nemesis.findAll();

        //Get characters count
        const characters_count = characters.length;

        //Get avarage weight of characters
        const character_avg_weight =
            Math.round(
                (characters.reduce((sum, character) => {
                    return sum + parseFloat(character.weight || 0);
                }, 0) /
                    characters_count) *
                    100
            ) / 100;

        //Get avarage age of characters
        const character_avg_age =
            Math.round(
                (characters.reduce((sum, character) => {
                    return sum + helperGetAge(character.born);
                }, 0) /
                    characters_count) *
                    100
            ) / 100;

        //Get avarage weight of nemesis
        const nemesis_avg_age =
            Math.round(
                (nemesis.reduce((sum, nemesis) => {
                    return sum + (nemesis.years || 0);
                }, 0) /
                    nemesis.length) *
                    100
            ) / 100;

        res.json({
            characters_count: characters_count,
            character_avg_weight: character_avg_weight,
            character_avg_age: character_avg_age,
            nemesis_avg_age: nemesis_avg_age,
            characters,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const helperGetAge = (born) => {
    if (!born) return 0;

    const birth = new Date(born);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
};

export default getAllCharacters;
