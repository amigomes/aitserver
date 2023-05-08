const submitService = require("../services/submitService");
const BaseLogger = require("../middleware/BaseLogger");

const submitNewTool = (req, res) => {
    const { body } = req;
    //Check Parameters or send 400
    if (!body || 
        !body.toolName ||
        !body.toolWebsite ||
        !body.toolShortDescription ||
        !body.toolDescription ||
        !body.Email) {
        //log the failed request
        BaseLogger.logger.log("Missing Parameters and it is from"+req.socket.remoteAddress);
        res.set({'content-type':'text/plain'});
        res.sendStatus(400).send("Missing Parameter"); // Technically should tell which parameter is missing and should also do type checking
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