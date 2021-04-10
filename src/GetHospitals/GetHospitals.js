var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  console.log(x.innerText);
}
      function initMap() {
        // Create the map.
        var latitude, longitude;
        latitude = 30.1180989;
        longitude = 78.291549899999;
        const pyrmont = { lat: latitude, lng: longitude };
        const map = new google.maps.Map(document.getElementById("map"), {
          center: pyrmont,
          zoom: 17,
          mapId: "8d193001f940fde3",
        });
        // Create the places service.
        const service = new google.maps.places.PlacesService(map);
        let getNextPage;
        const moreButton = document.getElementById("more");

        moreButton.onclick = function () {
          moreButton.disabled = true;

          if (getNextPage) {
            getNextPage();
          }
        };
        // Perform a nearby search.
        service.nearbySearch(
          { location: pyrmont, radius:5000 , type: "hospital" },
          (results, status, pagination) => {
            if (status !== "OK" || !results) return;
            addPlaces(results, map);
            moreButton.disabled = !pagination || !pagination.hasNextPage;

            if (pagination && pagination.hasNextPage) {
              getNextPage = () => {
                // Note: nextPage will call the same handler function as the initial call
                pagination.nextPage();
              };
            }
          }
        );
      }

      function addPlaces(places, map) {
        const placesList = document.getElementById("places");
        
        const arr=[];
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
            const li = document.createElement("li");
            li.textContent = place.name;
            placesList.appendChild(li);
            arr.push(li.innerText);
            
            li.addEventListener("click", () => {
              map.setCenter(place.geometry.location);
            });
          }
        }
        
        var hospitalsRef = firebase.database().ref("Hospitals/");

hospitalsRef.update ({
   hospital: {
      name: arr
   }
   

});

        
}