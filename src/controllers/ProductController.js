const mongoose = require('mongoose');

const product = mongoose.model('Product');

module.exports = {
    async index (req, res) {
        const products = await product.find();

        return res.json(products);
    }
};