const addNewPendingTool = (newToolRow) => {
    //Save it to the database
    console.log("Saved to database "+newToolRow['toolName']);
};

module.exports = {
    addNewPendingTool,
}