import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("/api/users");
    },
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    createUser: function (user) {
        return axios.post("/api/users", user);
    },
    getListings: function () {
        return axios.get("/api/listing/");
    },
    getListing: function (id) {
        return axios.get("/api/listing/" + id);
    },
    createListing: function (sellerId, listing) {
        return axios.post("/api/listing", listing);
    },
    getSellers: function () {
        return axios.get("/api/seller");
    },
    getSeller: function (id) {
        return axios.get("/api/seller/" + id);
    },
    createMatch: function (userId, listingId) {
        return axios.post("/api/match", listingId);
    },
    addMatch: function (userId, listingId) {
        return axios.put("/api/match", listingId);
    },
    createPref: function (preferences) {
        return axios.post("/api/preferences", preferences);
    },
    updatePref: function (userId, preferences) {
        return axios.put("/api/preferences", preferences);
    },
    createCommunity: function (listingId, community) {
        return axios.post("/api/community", listingId);
    }
};