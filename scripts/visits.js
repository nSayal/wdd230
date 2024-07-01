document.addEventListener("DOMContentLoaded", function() {
      // Track and display the number of visits
      let visits = localStorage.getItem("visits");
  
      if (!visits) {
          visits = 0;
      }
  
      visits++;
      localStorage.setItem("visits", visits);
      document.getElementById("visits").textContent = visits;
  });
  