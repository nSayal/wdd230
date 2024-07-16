document.addEventListener("DOMContentLoaded", function () {
      const themeToggle = document.getElementById('themeToggle');
      const currentTheme = localStorage.getItem('theme') || 'light';
  
      if (currentTheme === 'dark') {
          document.body.classList.add('dark-mode');
          themeToggle.checked = true;
      }
  
      themeToggle.addEventListener('change', function () {
          if (this.checked) {
              document.body.classList.add('dark-mode');
              localStorage.setItem('theme', 'dark');
          } else {
              document.body.classList.remove('dark-mode');
              localStorage.setItem('theme', 'light');
          }
      });
  });
  