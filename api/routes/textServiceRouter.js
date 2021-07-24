const textHandler = reqlib("/handlers/textHandler");
const textServiceRouter = require("express").Router();

/*
HTTP GET Requests
*/

textServiceRouter.get("/health", textHandler.health);

/*
HTTP POST Requests
*/

textServiceRouter.post("/send", textHandler.sendTextMessage);

/* Requests end here */
module.exports = textServiceRouter;
