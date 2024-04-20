const express = require("express");
const router = express.Router();

router.get("/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
  });
});
router.get("/api/users", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
    metadata: [
      {
        name: "test1",
        age: "11",
        address: "Nam liber",
      },
      {
        name: "test2",
        age: "10",
        address: "Nam strong liber",
      },
      {
        name: "test3",
        age: "13",
        address: "Nam die liber",
      },
      {
        name: "test4",
        age: "17",
        address: "Nam back liber",
      },
      {
        name: "test5",
        age: "100",
        address: "Nam die liber",
      },
    ],
  });
});
module.exports = router;
