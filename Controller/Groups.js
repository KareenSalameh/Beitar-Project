const groupsService = require('../Services/Groups');

async function create(req, res) {
    const {  Name, Manager, Description, Image} = req.body;
  
    try {
      // Attempt to create the group
      await groupsService.createGroup(Name, Manager, Description, Image);
  
      // Game creation succeeded
      return res.status(200).json({ message: 'Group created successfully' });
    } catch (error) {
      // Game creation failed
      return res.status(400).json({ message: 'Group creation failed', error: error.message });
    }
    

};

module.exports = {
    create
};