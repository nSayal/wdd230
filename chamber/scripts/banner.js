function displayBanner() {
      const today = new Date().getDay();
      if (today === 1 || today === 2 || today === 3) {
        document.getElementById('banner').style.display = 'block';
      }
    }
    
    function closeBanner() {
      document.getElementById('banner').style.display = 'none';
    }
    
    displayBanner();
    