const express = require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe } = require("../contoller/recipe")
const router = express.Router()


// app.get change to router.get
// router.get("/", (req, res) => {
//   res.json({message:"hello"})
// })


// fir isko yha se contoller k ander paste kiya
router.get("/", getRecipes) //Get all recipes
router.get("/:id", getRecipe) //Get recipes by id
router.post("/", addRecipe) //add recipes
router.put("/:id",editRecipe) //Edit recipes
router.delete("/:id",deleteRecipe) //Delete recipes



module.exports = router