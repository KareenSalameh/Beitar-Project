const usersService = require('../Services/Users');

function isLoggedIn(req, res, next) {
  if (req.session.Email != null)
    return next()
  else
    res.redirect('/login')
}

function loginForm(req, res) { res.render("login", {}) }

function registerForm(req, res) { res.render("register", {}) }

function pendingForm(req, res) { res.render("pending", {}) }

async function fid(req, res, Email) {  
  const user = await usersService.getUser(req.session.Email);
  res.render("fid", {First_Name: user.First_Name});
  }

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

async function login(req, res) {
  const { Email, Password } = req.body

  const result = await usersService.login(Email, Password)
  if (result) {
    req.session.Email = Email;
    res.redirect('/') //==> need to be change, after we will creade some new pages for login members. 
  }
  else
    res.redirect('/login?error=1')
}

async function register(req, res) {
  const { Email, Password, First_Name, Last_Name, Date_Of_Birth, Img, When, Who, Did } = req.body

  try {
    await usersService.register(Email, Password, First_Name, Last_Name, Date_Of_Birth, Img, When, Who, Did)    
    req.session.Email = Email
    res.redirect('/pending')
  }
  catch (e) { 
    console.log(e)
    res.redirect('/register?error=1')
  }    
}

// const getUsers = async (req, res) => {
//     const users = await usersService.getUsers(res);
//     res.json(users);
// };

const getUser = async (req, res) => {
    const user = await usersService.getUserById(req.session.Email);
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

    const user = await usersService.updateUser(req.body.Email, req.body.Password, req.body.Img);
    if (!user) {
      return res.status(404).json({ errors: ['User not found'] });
    }
  
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const user = await usersService.deleteUser(req.body.Email);
    if (!user) {
      return res.status(404).json({ errors: ['User not found'] });
    }

    res.send();
  };

  module.exports = {
    // getUsers,
    getUser,
    updateUser,
    deleteUser,
    loginForm,
    registerForm,
    isLoggedIn, 
    logout, 
    login, 
    register, 
    pendingForm,
    fid
  };