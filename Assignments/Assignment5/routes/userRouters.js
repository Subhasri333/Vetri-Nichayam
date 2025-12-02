const express = require("express");
const myRoutes = express.Router();
const myControllers = require("../controllers/userController");

myRoutes.post("/user", myControllers.Signup);
myRoutes.get("/user", myControllers.getUsers);
myRoutes.put("/editUser/:id", myControllers.editUser);
myRoutes.delete("/deleteUser/:id", myControllers.deleteUser);


module.exports = myRoutes;