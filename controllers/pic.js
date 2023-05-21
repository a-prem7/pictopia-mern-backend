const express = require("express");

const picRouter = express.Router();
const Pic = require("../models/pic");

//  INDEX ROUTE
picRouter.get("/pic", async (req, res) => {
  try {
    // send all people
    res.json(await Pic.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

//  CREATE ROUTE
picRouter.post("/pic", async (req, res) => {
  try {
    // send all people
    res.json(await Pic.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});
// DELETE ROUTE
picRouter.delete("/pic/:id", async (req, res) => {
  try {
    // send all
    res.json(await Pic.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

//  UPDATE ROUTE
picRouter.put("/pic/:id", async (req, res) => {
  try {
    // send all
    res.json(
      await Pic.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

module.exports = picRouter;
