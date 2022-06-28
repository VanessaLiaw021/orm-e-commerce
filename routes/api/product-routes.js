const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

//GET method to get all products
router.get('/', async (req, res) => {
 
  //Try to run the code inside
  try {

    //Find all products in Product model
    const productsData = await Product.findAll({

      //Include the Category model and Tag model when displaying the Product model
      include: [Category, Tag]
    });

    //Return the products data in a json file
    res.json(productsData);

    //Catch error if any
  } catch (err) {

    //Display error if exist
    res.json(err);
  }
});

//GET method to get one product
router.get('/:id', async (req, res) => {

  //Try to run the code inside
  try {

    //Find a product by primary key
    const productData = await Product.findByPk(req.params.id, {

      //Include the Category model and Tag model when displaying the Product model
      include: [Category, Tag]
    });

    //Return the product data in a json file
    res.json(productData);

    //Catch error if any
  } catch (err) {

    //Display error if exist
    res.json(err);
  }
});

//POST method to create a new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

//DELETE method to delete a product
router.delete('/:id', async (req, res) => {
  
  //Try to run the code inside
  try {

    //Delete a product 
    const deleteProduct = await Product.destroy({
      where: { id: req.params.id }
    });

    //Validate that the deleted id exist, if not display en error message
    if (!deleteProduct) {

      //Display error message when the id does not exist
      res.json({ message: "No such product with the following id exist!" });
    };

    //Return the product data in a json file
    res.json(deleteProduct);

    //Catch error if any
  } catch (err) {

    //Display error if exist
    res.json(err);
  };
});

//Export Product Routes
module.exports = router;