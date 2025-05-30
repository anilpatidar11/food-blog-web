const Recipes = require("../models/recipe")

const getRecipes =async (req, res) => {
  const recipes = await Recipes.find()
  return res.json(recipes)
}


const getRecipe =async (req, res) => {
  const recipes = await Recipes.findById(req.params.id)
 res.json(recipes)
}


  const addRecipe=async(req,res)=>{


    const { title, ingredients, instructions, time } = req.body;

    if(!title || !ingredients || !instructions)
    {
        res.json({message:"Required fields can't be empty"})
    }

    const newRecipe=await Recipes.create({
        title,ingredients,instructions,time
    })
   return res.json(newRecipe)
}



const editRecipe =async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  let recipe = await Recipes.findById(req.params.id)
  try {
    if (recipe) {
      await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json({title,ingredients,instructions,time})
    }
  }
  catch (err) {
    return res.status(404).json({message:"error"})
  }

}

const deleteRecipe = (req, res) => {
  res.json({message:"hello I am Anil Patidar"})
}



module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}