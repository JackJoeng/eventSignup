var tableData = require("../data/participantsData");
var waitListData = require("../data/waitinglistData");

module.exports = function(app) {


  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitListData)
  });


  app.post("/api/tables", function(req, res) {

    if (tableData.length < 20) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });


  app.post("/api/clear", function(req, res) {
    tableData.length = [];
    waitListData.length = [];

    res.json({ ok: true });
  });
};
