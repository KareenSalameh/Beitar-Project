//const gamesService = require('../Services/Games');

//static data - should be remove after having a database access
//games data
var games = [
  { "date": "18/09/2023", "rival": "הפועל ירושלים", "stadium": "טדי", "result": "-", "summary":"https://www.youtube.com/embed/3W2BpOxguyA" },
  { "date": "12/09/2023", "rival": "מכבי תל אביב", "stadium": "בלומפילד", "result": "3-1","summary":"https://www.youtube.com/embed/bnv2w9ugs3A" },
  { "date": "31/08/2023", "rival": "מכבי חיפה", "stadium": "סמי עופר", "result": "10-0", "summary":"https://www.youtube.com/embed/fdAabNAi0Xk" }
];

function gamesForm(req, res) { res.render("games", {games}) };

module.exports = {
    gamesForm
};