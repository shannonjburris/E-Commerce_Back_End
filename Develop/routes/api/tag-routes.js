const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        { model: Product},
        { model: ProductTag}
      ]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const trData = await ProductTag.findByPK(req.params.id, {
    include: [
      { model: Product},
      { model: Tag}
    ]
  })

  if(!productData){
    res.status(404).json({ message: "no id matches"});
    return; 
  }

  res.status(200).json(productData);
} catch (err) {
  res.status(500).json(err);
}
});
  
  


router.post('/', async (req, res) => {
  // create a new tag
  try {
    const trData = await ProductTag.create(req.body);
    res.status(200).json(trData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  ProductTag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
      try {
        const trData = await ProductTag.destroy({
          where: {
            id: req.params.id
          }
        });
    
        if (!trData) {
          res.status(404).json({ message: 'no matches with this id!' });
          return;
        }
    
        res.status(200).json(locationData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
  
});

module.exports = router;
