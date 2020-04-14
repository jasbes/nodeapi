const mongoose = require('mongoose');

const product = mongoose.model('Product');

module.exports = {
    async index (req, res) {
        const { page = 1 } = req.query;
        const p = await product.paginate({}, {page, limit: 3});

        return res.json(p);
    },

    async store (req, res) {
        const p = await product.create(req.body);

        return res.json(p);
    },

    async find (req, res) {
        const p = await product.findById(req.params.id);

        return res.json(p);
    },

    async update (req, res) {
        const p = await product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(p);
    },

    async destroy (req, res) {
        await product.findOneAndRemove(req.params.id);

        return res.json();
    }

};