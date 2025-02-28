const mongoose =require('mongoose');
const reviewSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        rating: {type: String, required: true},
        comment: String,
    },
    {
        timestamps: true,
    }
)
const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: String,
        image: String,
        price: { type: Number, required: true, default: 0 },
        quantity: { type: Number, required: true, default: 0 },
        categories: [String],
        reviews: [reviewSchema],
        deleted: {type: Boolean, default: false},
        deletedAt: Date,
    },
    {timestamps: true},
)
const Product = mongoose.model('Product', productSchema)
module.exports = Product;