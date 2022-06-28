const router = require('express').Router();
const { Category, Product } = require('../../models');

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

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
