const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const catData = await Category.findAll({
      include: [
        { model: Product}
      ]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/:id', async (req, res) => {
  try{
    const catData = await Category.findByPk(req.params.id, {
    include: [
      { model: Product},
      
    ]
  })

  if(!catData){
    res.status(404).json({ message: "no id matches"});
    return; 
  }

  res.status(200).json(productData);
} catch (err) {
  res.status(500).json(err);
}
});


router.post('/', async (req, res) => {
  try {
    const catData = await Category.create({id: req.body});
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const catData = await Category.update(
      {
      cat_name: req.body.category_name
},
{
  where: {
    id: req.params.id
  }
})
res.status(200).json(catData);
} catch (err) {
  res.status(500).json(err);
}
});

router.delete('/:id', async (req, res) => {
  try {
    const catData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!catData) {
      res.status(404).json({ message: 'no matches with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
