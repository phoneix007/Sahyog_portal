
import google from  'https://maps.googleapis.com/maps/api/js?key=AIzaSyAoDJ4s8Sf-IdZrNNK58PTeTpmSr7KYAjw&callback=initMap&libraries=places&v=weekly';

let loc;
function initMap() {
    // Create the map.
    getLocation()
    if(loc==null) return
    const map = new google.maps.Map({});
    // Create the places service.
    const service = new google.maps.places.PlacesService(map);
    
  
    // Perform a nearby search.
    service.nearbySearch(
      { location: loc, radius: 10000, type: "hospital" },
      (results, status, pagination) => {
        if (status !== "OK" || !results) return;
  
        addPlaces(results, map);
      }
    );
  }
  
function addPlaces(places, map) {
  const placesList =[];
  const ListOfHospitals=[];
  for (const place of places) {
    if (place.geometry && place.geometry.location) {
      const image = {
        url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        new google.maps.Marker({
          map,
          icon: image,
          title: place.name,
          position: place.geometry.location,
        });
        const li = [];
  
        li.textContent = place.name;
        placesList.push(li);
        ListOfHospitals.push(li.textContent);
        
      //  console.log(li.innerText);
      }
    }
    // console.log(placesList);
    console.log(ListOfHospitals);
    
    
    let hospitalsRef = firebase.database().ref("Hospitals/");

    hospitalsRef.update ({
       Live_hospital: ListOfHospitals
       
    });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
}
function showPosition(position) {
  loc = { lat: position.coords.latitude, lng: position.coords.longitude};
}