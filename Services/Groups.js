const { default: mongoose } = require('mongoose');
const Groups = require('../Models/Groups');
const Users = require('../Models/Users');
const path = require('path');

const createGroup = async (Name, Manager, Description, Image) => {
    try {
        // Finding the user with the provided email
        const manager = await Users.findOne({ Email: Manager });
    
        if (!manager) {
          throw new Error('Manager not found');
        }
    
        // Create a new group document
        const newGroup = new Groups({
          Name: Name,
          Manager: Manager,
          Description: Description,
          Image: Image,
          Members: [Manager]
        });
    
        // Save the new group to the database
        const createdGroup = await newGroup.save();
    
        return createdGroup;
      } catch (error) {
        throw error;
      }
};

module.exports = {
    createGroup
}