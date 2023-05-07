const { v4: uuid } = require("uuid");
const submitAPIdb = require("../database/submitAPIdb");

// business logic
const submitNewTool = (newTool) => {
    //Transform the object for database write
    newTool = {
        toolId: uuid(),
        ...newTool
    }
    //Call DB service to write 
    submitAPIdb.addNewPendingTool(newTool);
};

module.exports = {
    submitNewTool,
}