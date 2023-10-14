const gamesService = require('../Services/Games');
//const keys = require('../Config/keys');

//static data - should be remove after having a database access
//games data
/*var games = [
  { "date": "18/09/2023", "rival": "הפועל ירושלים", "stadium": "טדי", "result": "-", "summary":"https://www.youtube.com/embed/3W2BpOxguyA" },
  { "date": "12/09/2023", "rival": "מכבי תל אביב", "stadium": "בלומפילד", "result": "3-1","summary":"https://www.youtube.com/embed/bnv2w9ugs3A" },
  { "date": "31/08/2023", "rival": "מכבי חיפה", "stadium": "סמי עופר", "result": "10-0", "summary":"https://www.youtube.com/embed/fdAabNAi0Xk" }
];*/

async function gamesForm(req, res) { 
  try {
    const games = await gamesService.getAllGames();
    //const mapkey = keys.bingMapsApiKey;

    //res.render("games.ejs", { games , mapkey });
    res.render("games.ejs", { games });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

async function gamesMaintainForm(req, res) { 
  try {
    const games = await gamesService.getAllGames();
    //const mapkey = keys.bingMapsApiKey;

    //res.render("games_maitianance.ejs", { games, mapkey  });
    res.render("games_maitianance.ejs", { games  });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

async function create(req, res) {
  const {  Date, Rival, Stadium, Result, Summary } = req.body;

  try {
    // Attempt to create the game
    await gamesService.createGame(Date, Rival, Stadium, Result, Summary);

    // Game creation succeeded
    return res.status(200).json({ message: 'Game created successfully' });
  } catch (error) {
    // Game creation failed
    return res.status(400).json({ message: 'Game creation failed', error: error.message });
  }
};

async function deleteGame(req, res) {
  const id = req.body;
  try {
    // Attempt to delete the game
    await gamesService.deleteGame(id);
    // Game deletion succeeded
    return res.status(200).json({ message: 'Game deleted successfully' });
  } catch (error) {
    // Game deletion failed
    return res.status(400).json({ message: 'Game deletion failed', error: error.message });
  }
} 

module.exports = {
    gamesForm,
    gamesMaintainForm,
    create,
    deleteGame
};