const Product = require('./product.model');

exports.getProducts = (req, res, next) => {
  try {
    Product.find()
      .populate('company')
      .sort({ yearlyCost: -1 })
      .then(documents => {
        res.status(200).json({
          message: 'Products fetched successfully',
          products: documents
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.getProductById = (req, res, next) => {
  try {
    Product.findById(req.params.id)
      .populate('company')
      .then(product => {
        if (product) {
          res.status(200).json(product);
        } else {
          res.status(404).json({ message: 'Product not found!' });
        }
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
