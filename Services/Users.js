const User = require('../Models/Users');
const path = require('path');

const login = async (email, password) => {
    const user = await User.findOne({email, password});
    return user != null;
};

const register = async (Email, Password, First_Name, Last_Name, Date_Of_Birth, Img, When, Who, Did) => {
    const user = new User({
        Email, Password, First_Name, Last_Name, Date_Of_Birth, Img, When, Who, Did
    });

    if (Img)
        user.Img = Img;

    if (Date_Of_Birth)
        user.Date_Of_Birth = Date_Of_Birth;

    return await user.save();
};

// const getUsers = async (res) => {
//     return await res.getFile(path.resolve(__dirname, '..','View', 'login.html'));
// };

const updateUser = async (Email, Password, Img) => {
    const user = await login(Email);
    if (!user)
        return null;    

    if(!Password)  
    {
        user.Password = Password;
    }  
    if(!Img)  
    {
        user.Img = Img;
    }  
    return await user.save();
};

const deleteUser = async (Email) => {
    const user = await login(Email);
    if (!user)
        return null;

    return await user.remove();
};

module.exports = {
    register,
    login,
    //getUsers,
    updateUser,
    deleteUser
}