"use strict";

module.exports = (data, validator) => {

    let portalController = require("./portal-controller")(data);
    let newsController = require("./news-controller")(data, validator);
    let reviewsController = require("./reviews-controller");
    let guidesController = require("./guides-controller");
    let usersController = require("./users-controller")(data);
    let userProfileController = require("./user-profile-controller")(data);
    let categoriesController = require("./categories-controller")(data, validator);
    let searchController = require("./search-controller.js")(data);



    return {
        portal: portalController,
        news: newsController,
        reviews: reviewsController,
        guides: guidesController,
        users: usersController,
........categories: categoriesController,
        search: searchController
    };
};