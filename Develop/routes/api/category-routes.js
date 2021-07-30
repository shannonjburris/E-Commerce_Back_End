const router = require('express').Router();
const { Category, Product } = require('../../models');

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
    const catData = await Category.findByPK(req.params.id, {
    include: [
      { model: Category},
      { model: Tag}
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
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
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
