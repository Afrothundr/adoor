import Keys from './keys2';
import axios from 'axios';
import API from './API';

const proxy = "https://arcane-lake-48943.herokuapp.com/";

export function createCommunityFactors(listing) {
  let lifestyle = {
    listingId: listing.listingId,
    parksCount: 0,
    groceryStoresCount: 0,
    hospitalsCount: 0,
    crimesCount: 0,
    schoolsCount: 0
  }
  axios.get(`${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${listing.latitude},${listing.longitude}&radius=6000&types=park&key=${Keys.googleMaps}`)
    .then(res => {
      lifestyle.parksCount += res.data.results.length;
      axios.get(`${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${listing.latitude},${listing.longitude}&radius=6000&types=supermarket&key=${Keys.googleMaps}`)
        .then(res => {
          lifestyle.groceryStoresCount += res.data.results.length;
          axios.get(`${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${listing.latitude},${listing.longitude}&radius=6000&types=hospital&key=${Keys.googleMaps}`)
            .then(res => {
              lifestyle.hospitalsCount += res.data.results.length;
              axios.get(`/api/crimedata/${listing.zipcode}`)
                .then(res => {
                  lifestyle.crimesCount += res.data.length;
                  axios.get(`${proxy}https://api.greatschools.org/schools/nearby?key=${Keys.greatSchools}&state=MO&lat=${listing.latitude}&lon=${listing.longitude}`)
                    .then(res => {
                      lifestyle.schoolsCount += res.data.schools.school.length;
                      saveCommunityData(lifestyle);
                    })
                })
            })
        })
    })
  function saveCommunityData(lifestyle) {
    API.createCommunity(lifestyle)
      .then(response => console.log(response));
  }
}
