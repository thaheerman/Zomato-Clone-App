const express = require("express");
const apiRoutes = express.Router();
const apiController = require("../controllers/apiController");

let restaurant = require("../controllers/restaurantController");
let mealType = require("../controllers/mealTypeController");
// get method

apiRoutes.get("/", apiController.getHomePage);

apiRoutes.get(
    "/api/get-restaurant-list-by-location-id/:loc_id",
    restaurant.getRestaurantListByLocationId);

apiRoutes.get("/api/get-restaurant-details-by-restaurant-id/:id",
    restaurant.getRestaurantDetailsByRestaurantId
);

apiRoutes.get("/api/get-menu-items-by-restaurant-id/:r_id/",
    restaurant.getMenuItemsByRestaurantId
);

apiRoutes.get("/api/get-meal-type", mealType.getMealType);

apiRoutes.post("/api/filter", restaurant.filter);

module.exports = apiRoutes;
