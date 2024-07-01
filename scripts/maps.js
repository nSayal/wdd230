function initMap() {
      // The location of the place
      const location = { lat: 29.3703, lng: -100.8958 }; // Coordinates for Del Rio, Texas
      // The map, centered at the location
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
      });
      // The marker, positioned at the location
      const marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    }