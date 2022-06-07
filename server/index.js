const http = require("http");
const route = require('./routes/route');
const application = require("./application");

const port = process.env.PORT || "3000";
application.set("port", port);
application.use("/", route);

const server = http.createServer(application);
server.listen(port);
