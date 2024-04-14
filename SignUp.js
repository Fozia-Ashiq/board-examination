 function validateForm() {
          var fullname = document.getElementById('fullname').value;
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var confirmPassword = document.getElementById('confirm-password').value;
          var birthdate = document.getElementById('birthdate').value;
          var gender = document.getElementById('gender').value;

          // Check if any required field is empty
          if (!fullname || !email || !password || !confirmPassword || !birthdate || !gender) {
              alert('First fill the form then sign up.');
              return false;
          }

          // Email validation
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
              alert('Please enter a valid email address.');
              return false;
          }

          // Password validation
          if (password.length < 8) {
              alert('Password must be at least 8 characters long.');
              return false;
          }

          if (password !== confirmPassword) {
              alert('Passwords do not match.');
              return false;
          }

          return true;
      }
