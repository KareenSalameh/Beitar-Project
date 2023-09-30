const usersService = require('../Services/Users');

const createUser = async (req, res) => {
    const newUser = await usersService.createUser(req.body.Email, req.body.Password, req.body.First_Name, req.body.Last_Name, req.body.Date_Of_Birth, req.body.Img, req.body.When, req.body.Who, req.body.Did);
    res.json(newUser);
};

const getUsers = async (req, res) => {
    const users = await usersService.getUsers(res);
    res.json(users);
};

const getUser = async (req, res) => {
    const user = await usersService.getUserById(req.params.id);
    if (!user) {
        return res.status(404).json({ errors: ['User not found'] });
    }

    res.json(user);
};

const updateUser = async (req, res) => {
    if (!req.body.Password || !req.body.Email || !req.body.First_Name || !req.body.Last_Name || !req.body.When || !req.body.Who || !req.body.Did) {
      res.status(400).json({
        message: "All Fields are required!",
      });
    }

    const user = await usersService.updateUser(req.params.id, req.body.Password, req.body.Img);
    if (!user) {
      return res.status(404).json({ errors: ['User not found'] });
    }
  
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const user = await usersService.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ errors: ['User not found'] });
    }
  
    res.send();
  };

  module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
  };