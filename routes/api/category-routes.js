const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//GET Method to find all categories
router.get('/', async (req, res) => {

  //Try to run the code inside
  try {

    //Find all the categories in the Category model 
    const categoriesData = await Category.findAll({

      //Include the Product model when we display the Category model
      include: [Product]
    });

    //Return the categories Data in a json file
    res.json(categoriesData);

    //Catch any error if any
  } catch (err) {

    //Display error if exist
    res.json(err);
  };
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
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
