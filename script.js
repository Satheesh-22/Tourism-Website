// Search for Hotels Placeholder - This function is redefined later in the file
// function searchHotel() {
//   alert('Search button clicked');
//   // Replace with actual hotel search logic, like fetching from an API.
// }

// Show Login and Register forms
function toggleForm(form) {
  const loginForm = document.getElementById('login');
  const registerForm = document.getElementById('register');
  
  if (form === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  }
}

// Validate Password
function validatePassword() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const passwordRegex = /^(?=.*[@$!%*?&])[\w@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    alert('Password must be at least 8 characters long and include at least one special character.');
    return false;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return false;
  }
  return true;
}

// Toggle Password Visibility
function togglePasswordVisibility(id) {
  const passwordField = document.getElementById(id);
  const toggleIcon = document.getElementById('toggle-' + id);

  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleIcon.innerHTML = '&#128064;'; // Eye icon
  } else {
    passwordField.type = 'password';
    toggleIcon.innerHTML = '&#128065;'; // Crossed-out eye icon
  }
}

// Validate Email
function validateEmail() {
  const email = document.getElementById('forgot-email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  return true;
}

// Load Header and Footer dynamically
document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const headerEl = document.getElementById('header');
      if (headerEl) headerEl.innerHTML = data;
    });

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footerEl = document.getElementById('footer');
      if (footerEl) footerEl.innerHTML = data;
    });
  
  console.log('DOM fully loaded.');
});

// Google Sign-In Functions
function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  const id_token = googleUser.getAuthResponse().id_token;
  
  console.log(`Signed in as: ${profile.getName()} (${profile.getEmail()})`);

  // const xhr = new XMLHttpRequest();
  // xhr.open('POST', 'YOUR_BACKEND_URL');
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.onload = function() {
  //   console.log('Signed in as: ' + xhr.responseText);
  // };
  // xhr.send(JSON.stringify({ token: id_token }));
  
  // For demo purposes, just log the sign-in
  console.log('Google Sign-In successful');
}

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => console.log('User signed out.'));
}

// Virtual Search Popup Logic
document.addEventListener("DOMContentLoaded", function() {
  const virtualSearchImage = document.querySelector(".virtual-search-image");
  const detailsPopup = document.getElementById("details-popup");

  virtualSearchImage.addEventListener("click", function() {
    const details = this.getAttribute("data-details");
    detailsPopup.textContent = details;
    detailsPopup.style.display = "block";

    const rect = this.getBoundingClientRect();
    detailsPopup.style.top = `${rect.bottom + window.scrollY + 10}px`;
    detailsPopup.style.left = `${rect.left + window.scrollX}px`;
  });

  document.addEventListener("click", function(event) {
    if (!virtualSearchImage.contains(event.target) && !detailsPopup.contains(event.target)) {
      detailsPopup.style.display = "none";
    }
  });
});

// Slide Index Initialization and Auto-Sliding Logic
let slideIndex = 0;
function moveSlide(n) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto slide every 3 seconds
let slideInterval = setInterval(() => moveSlide(1), 3000);

function stopAutoSlide() {
  clearInterval(slideInterval);
}

function resumeAutoSlide() {
  slideInterval = setInterval(() => moveSlide(1), 3000);
}

document.querySelector('.prev').addEventListener('click', () => {
  stopAutoSlide();
  moveSlide(-1);
  resumeAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
  stopAutoSlide();
  moveSlide(1);
  resumeAutoSlide();
});
   // Default values
   let guestCount = 2;
   let roomCount = 1;

   // Constants
   const MIN_GUESTS = 1;
   const MAX_GUESTS = 10;
   const MIN_ROOMS = 1;
   const MAX_ROOMS = 5;

   // Update Guests Count
   function adjustGuests(amount) {
       const newGuestCount = guestCount + amount;

       if (newGuestCount >= MIN_GUESTS && newGuestCount <= MAX_GUESTS) {
           guestCount = newGuestCount;
           document.getElementById('guestCount').textContent = guestCount;

           // Smooth count transition
           document.getElementById('guestCount').style.transform = 'scale(1.2)';
           setTimeout(() => {
               document.getElementById('guestCount').style.transform = 'scale(1)';
           }, 100);
       }
   }

   // Update Rooms Count
   function adjustRooms(amount) {
       const newRoomCount = roomCount + amount;

       if (newRoomCount >= MIN_ROOMS && newRoomCount <= MAX_ROOMS) {
           roomCount = newRoomCount;
           document.getElementById('roomCount').textContent = roomCount;

           // Smooth count transition
           document.getElementById('roomCount').style.transform = 'scale(1.2)';
           setTimeout(() => {
               document.getElementById('roomCount').style.transform = 'scale(1)';
           }, 100);
       }
   }

   // Example Search Function
   function searchHotel() {
    const destination = document.getElementById('destination').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const guestCount = document.getElementById('guestCount').textContent;
    const roomCount = document.getElementById('roomCount').textContent;

    if (!destination || !checkIn || !checkOut) {
        alert('Please fill all fields!');
        return;
    }

    // Redirect to example.html after alert
    window.location.href = 'example.html';
}
