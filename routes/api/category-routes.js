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

    //Find one of the category by primary key
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
  };
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
  };
});

//PUT method to update the category name
router.put('/:id', async (req, res) => {
  
  //Try to run the code inside 
  try {

    //Update an existing category in Category model
    const updateCategory = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: { id: req.params.id }
      }
    );

    //Return the category data in a json file
    res.json(updateCategory);

    //Catch any error if any
  } catch (err) {

    //Display error if exist
    res.json(err);
  };
});

//DELETE method to delete a category name
router.delete('/:id', async (req, res) => {
  
  //Try to run the code inside
  try {

    //Delete an existing category 
    const deleteCategory = await Category.destroy({
      where: { id: req.params.id }
    });

    //Return the category data in a json file
    res.json(deleteCategory);

    //Catch any error if any
  } catch (err) {

    //Display error if exist
    res.json(err);
  }
});

//Export Category routers
module.exports = router;