const User = require('../Models/Users');
const path = require('path');

const login = async (Email, Password) => {
    const user = await User.findOne({Email, Password});
    return user != null;
};

const register = async (Email, Password, First_Name, Last_Name, Date_Of_Birth, Img, When, Who, Did) => {
    const user = new User({
        Email, Password, First_Name, Last_Name, Date_Of_Birth, Img, When, Who, Did
    });

    if (!Img)
        user.Img = '../pictures/default_profile_picture.jpg';

    return await user.save();
};

const getUser = async (Email) => {
    return await User.findOne({Email});
};

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
    getUser,
    updateUser,
    deleteUser
}