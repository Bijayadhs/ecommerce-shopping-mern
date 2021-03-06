import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
}, {
    timestramps: true
})

const productSchema = mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
})