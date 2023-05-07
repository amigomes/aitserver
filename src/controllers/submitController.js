const submitService = require("../services/submitService");

const submitNewTool = (req, res) => {
    const { body } = req;
    //Check Parameters or send 400
    if (!body || 
        !body.toolName ||
        !body.toolWebsite ||
        !body.toolShortDescription ||
        !body.toolDescription ||
        !body.Email) {
        res.send(400).send("Missing Parameters"); // Technically should tell which parameter is missing and should also do type checking
        return;
    }

    //Build the new object
    newTool  = {
        toolName: body.toolName,
        toolWebsite : body.toolWebsite,
        toolShortDescription: body.toolShortDescription,
        toolDescription: body.toolDescription,
        Email: body.Email
    }
    
    submitService.submitNewTool(newTool);
    res.status(201).send("New Tool is submitted");
};

module.exports = {
    submitNewTool,
}