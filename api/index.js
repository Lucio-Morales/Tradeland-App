const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("server listening at 3001");
  });
});
