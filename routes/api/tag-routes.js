const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { create } = require('../../models/Product');

// The `/api/tags` endpoint

//GET method to get all tags
router.get('/', async (req, res) => {

  //Try to run the code inside
  try {

    //Get all the tags in the Tag model
    const tagsData = await Tag.findAll({

      //Include the Product model and ProductTag model when display all Tags
      include: [Product, ProductTag]
    });

    //Return the tags data in a json file
    res.json(tagsData);

    //Catch any error if any
  } catch (err) {

    //Display error if it exist
    req.json(err);
  };
});

//GET method to get a tag
router.get('/:id', async (req, res) => {

  //Try to run the code inside
  try {

    //Get a tag by primary key 
    const tagData = await Tag.findByPk({

      //Include the Product model and ProductTag model when display all Tags
      include: [Product, ProductTag]
    });

    //Return the tags data in a json file
    res.json(tagData);

    //Catch any error if any
  } catch (err) {

    //Display error if it exist
    res.json(err);
  };
});

//POST method to create a new tag
router.post('/', async (req, res) => {
  
  //Try to run the code inside
  try {

    //Create a new tag 
    const createTag = await Tag.create({
        tag_name: req.body.tag_name
    });

    //Return the tag data in a json file 
    res.json(createTag);

    //Catch any error if any
  } catch (err) {

    //Display error if it exist
    res.json(err);
  };
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

//Export Tags Routes
module.exports = router;