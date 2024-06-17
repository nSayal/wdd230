document.querySelector('form').addEventListener('submit', function (event) {
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm_password').value;
      if (password !== confirmPassword) {
            alert('Passwords do not match.');
            event.preventDefault();
            document.getElementById('password').value = '';
            document.getElementById('confirm_password').value = '';
            document.getElementById('password').focus();
      }
});