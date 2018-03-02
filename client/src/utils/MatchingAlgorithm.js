export function checkForCommunityMatch(user, listing) {
    //checks user preferences vs. the listing's community score
    var communityScore = 0;

    if (
        user.preferences.caresAboutSchools === true &&
        listing.community.bestSchoolRating > 8) {
        console.log("you like good schools");
        communityScore++;
    } if (
        user.preferences.caresAboutGroceryStores === true &&
        listing.community.groceryStoresCount > 0) {
        console.log("you like close grocery stores");
        communityScore++;
    } if (
        user.preferences.caresAboutParks === true &&
        listing.community.parksCount > 0) {
        console.log("you like parks nearby");
        communityScore++;
    } if (
        user.preferences.caresAboutCrime === true &&
        listing.community.crimesCount < 30) {
        console.log("you care about safety");
        communityScore++;
    } if (
        user.preferences.caresAboutHospitals === true &&
        listing.community.hospitalsCount > 0) {
        console.log("you care about accessible healthcare");
        communityScore++;
    }

    return communityScore;
}

export function checkForLocationMatch(user, listing) {
    //checks user preferences vs. the listing's location information
    var locationScore = 0;

    if (
        user.preferences.zipcode ===
        listing.zipcode) {
        console.log('zip code matches');
        locationScore++;
    } if (
        user.preferences.budget >=
        (listing.price - (user.preferences.budget * .2))) {
        console.log('budget is affordable');
        locationScore++;
    } if (
        user.preferences.bedrooms <=
        listing.bedrooms) {
        console.log('enough bedrooms');
        locationScore++;
    } if (
        user.preferences.bathrooms <=
        listing.bathrooms) {
        console.log('enough bathrooms');
        locationScore++;
    }
    return locationScore;
}

