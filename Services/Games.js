const { default: mongoose } = require('mongoose');
const Game = require('../Models/Games');
const path = require('path');
//limit the number of results
const limit = 10;

const getLimitedNumOfGames = async () => {
    try {
        const games = await Game.find().limit(limit);
        return games;
      } catch (error) {
        // Handle the error, e.g., log it or throw it further up the stack
        throw error;
      }
};

const getAllGames = async () => {
    try {
        const games = await Game.find();
        return games;
      } catch (error) {
        // Handle the error, e.g., log it or throw it further up the stack
        throw error;
      }
};

const createGame = async (Date, Rival, Stadium, Result, Summary) => {
    //const HighestId = Game.find().sort({ yourField: -1 }).limit(1);
    //HighestId++;
    const game = new Game({
        Date, Rival, Stadium, Result, Summary
    });

    return await game.save();
};

const updateGame = async (ID, Date, Rival, Stadium, Result, Summary) => {
    const game = new Game({
        Date, Rival, Stadium, Result, Summary
    });
    return await game.findByIdAndUpdate(ID,game);
};

const deleteGame = async (ID) => {
    //const objectId = mongoose.Types.objectId(ID);
    const objectId = objectId(ID);
    return await Game.findByIdAndRemove(objectId);
};

module.exports = {
    getLimitedNumOfGames,
    getAllGames,
    createGame,
    updateGame,
    deleteGame
}