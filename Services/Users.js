const User = require('../Models/Users');
const path = require('path');

const createUser = async (Email, Password, First_Name, Last_Name, Date_Of_Birth, Img, When, Who, Did) => {
    const user = new User({
        Email, Password, First_Name, Last_Name, Date_Of_Birth, Img, When, Who, Did
    });

    if (Img)
        user.Img = Img;

    if (Date_Of_Birth)
        user.Date_Of_Birth = Date_Of_Birth;

    return await user.save();
};

const getUserById = async (id) => {
    return await User.findById(id);
};
const getUsers = async (res) => {
    return await res.sendFile('login.html', { root: path.join(__dirname, '../View') });
};

const updateUser = async (id, Password, Img) => {
    const user = await getUserById(id);
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
    await user.save();
    return user;
};

const deleteUser = async (id) => {
    const user = await getUserById(id);
    if (!user)
        return null;

    await user.remove();
    return user;
};

module.exports = {
    createUser,
    getUserById,
    getUsers,
    updateUser,
    deleteUser
}