// const {categories} = require("../db");
exports.Product = {
    category: ({categoryId}, args, {db}) => {
        return db.categories.find((category) => category.id === categoryId);
    },
    reviews: ({id}, args, {db }) => {
        return db.reviews.filter((reviews) => reviews.productId === id);
    }
};