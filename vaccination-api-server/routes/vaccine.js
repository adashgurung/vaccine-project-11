var express = require("express");

const { addNewVaccine } = require("../model/Vaccine");

var router = express.Router();

router.get("/", function (req, res) {
  res.send("respond with a resource");
});

//ADD NEW VACC
router.post("/addVaccine", function (req, res) {
  addNewVaccine(req.body, function (error, result) {
    if (error) {
      res.status(400).send({
        success: false,
        message: "vacc cannot be added",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "New vaccine has been added!",
      data: result,
    });
  });
});

module.exports = router;
