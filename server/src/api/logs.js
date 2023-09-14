const { Router } = require("express");
const LogEntry = require("../models/LogEntry")

const router = Router(); //Create express router 

//All the routes
router.get("/", async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
  res.json(entries)
  } catch (error) {
    next(error); //Pass error to error handler middleware
  };
});

router.post("/", async (req, res, next) => {
try {
  const logEntry = new LogEntry(req.body);
  const createdEntry = await logEntry.save(); 
  res.json(createdEntry)
} catch (err) {
  if (err.name === "ValidationError") {
    res.status(422)
  }
  next(err)
}

  
});


module.exports = router