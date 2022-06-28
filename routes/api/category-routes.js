//Import require packages and models
const router = require('express').Router();
const { Category, Product } = require('../../models');
const { create } = require('../../models/Product');

// The `/api/categories` endpoint

//GET Method to find all categories
router.get('/', async (req, res) => {

  //Try to run the code inside
  try {

    //Find all the categories in the Category model 
    const categoriesData = await Category.findAll({

      //Include the Product model when displaying the Category model
      include: [Product]
    });

    //Return the categories data in a json file
    res.json(categoriesData);

    //Catch any error if any
  } catch (err) {

    //Display error if exist
    res.json(err);
  };
});

//GET method to find one category
router.get('/:id', async (req, res) => {
  
  //Try to run the code inside
  try {

    //Find one of the category by pk
    const categoryData = await Category.findByPk(req.params.id, {

      //Include the Product model when displaying the Category model
      include: [Product]
    });

    //Return the category data in a json file
    res.json(categoryData);

    //Catch any error if any
  } catch (err) {

    //Display error if exist
    res.json(err);
  }
});

//POST method to create a new category
router.post('/', async (req, res) => {

  //Try to run the code inside 
  try {

    //Create a new category in Category model
    const createCategory = await Category.create();

    //Return the category data in a json file 
    res.json(createCategory);

    //Catch any error if any
  } catch (err) {

    //Display error if exist
    res.json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

//Export Category routers
module.exports = router;