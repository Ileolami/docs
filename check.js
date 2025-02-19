// // Create a popup function with sliding messages
// function showPopupMessage(mainMessage, secondaryMessage) {
//   // Create the overlay for the blur effect
//   const overlay = document.createElement('div');
//   overlay.style.position = 'fixed';
//   overlay.style.top = '0';
//   overlay.style.left = '0';
//   overlay.style.width = '100%';
//   overlay.style.height = '100%';
//   overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; // Darker semi-transparent background
//   overlay.style.backdropFilter = 'blur(8px)';
//   overlay.style.zIndex = '999';

//   // Create the popup container
//   const popup = document.createElement('div');
//   popup.style.position = 'fixed';
//   popup.style.left = '50%';
//   popup.style.top = '50%';
//   popup.style.transform = 'translate(-50%, -50%)';
//   popup.style.width = '80%';
//   popup.style.maxWidth = '400px';
//   popup.style.padding = '20px';
//   popup.style.backgroundColor = '#0d253f';
//   popup.style.borderRadius = '12px';
//   popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
//   popup.style.zIndex = '1000';
//   popup.style.fontFamily = 'Arial, sans-serif';
//   popup.style.textAlign = 'center';
//   popup.style.color = 'white';
//   popup.style.overflow = 'hidden';

//   // Create the main message slide
//   const mainMessageSlide = document.createElement('div');
//   mainMessageSlide.innerText = mainMessage;
//   mainMessageSlide.style.fontSize = '20px';
//   mainMessageSlide.style.padding = '20px';

//   // Create the secondary message slide
//   const secondaryMessageSlide = document.createElement('div');
//   secondaryMessageSlide.innerText = secondaryMessage;
//   secondaryMessageSlide.style.fontSize = '16px';
//   secondaryMessageSlide.style.padding = '20px';
//   secondaryMessageSlide.style.display = 'none';
//   // Create navigation button (arrow icon)
//   const nextButton = document.createElement('button');
//   nextButton.innerHTML = '&#10132;'; // Right arrow icon
//   nextButton.style.marginTop = '20px';
//   nextButton.style.padding = '10px 20px';
//   nextButton.style.border = 'none';
//   nextButton.style.borderRadius = '5px';
//   nextButton.style.backgroundColor = '#01b4e4';
//   nextButton.style.color = 'white';
//   nextButton.style.cursor = 'pointer';
//   nextButton.style.fontSize = '16px';

//   // Create the close button
//   const closeButton = document.createElement('button');
//   closeButton.innerText = 'Close';
//   closeButton.style.marginTop = '20px';
//   closeButton.style.padding = '10px 20px';
//   closeButton.style.border = 'none';
//   closeButton.style.borderRadius = '5px';
//   closeButton.style.backgroundColor = '#FF4B4B';
//   closeButton.style.color = 'white';
//   closeButton.style.cursor = 'pointer';
//   closeButton.style.fontSize = '16px';
//   closeButton.style.display = 'none';

//   // Slide to secondary message
//   nextButton.onclick = function () {
//     mainMessageSlide.style.display = 'none';
//     secondaryMessageSlide.style.display = 'block';
//     nextButton.style.display = 'none';
//     closeButton.style.display = 'inline-block';
//   };

//   // Close popup and overlay on button click
//   closeButton.onclick = function () {
//     popup.remove();
//     overlay.remove();
//   };

//   popup.appendChild(mainMessageSlide);
//   popup.appendChild(secondaryMessageSlide);
//   popup.appendChild(nextButton);
//   popup.appendChild(closeButton);

//   document.body.appendChild(overlay);
//   document.body.appendChild(popup);
// }

// // Example usage
// showPopupMessage(
//   'Welcome to TMDB API Documentation!',
//   '⚠️ This documentation uses the TMDB API but is not endorsed or certified by TMDB.'
// );