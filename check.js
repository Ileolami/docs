// // Create a popup function
// function showPopupMessage(mainMessage, secondaryMessage) {
//   // Create the overlay for the blur effect
//   const overlay = document.createElement('div');
//   overlay.style.position = 'fixed';
//   overlay.style.top = '0';
//   overlay.style.left = '0';
//   overlay.style.width = '100%';
//   overlay.style.height = '100%';
//   overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; // Semi-transparent black
//   overlay.style.backdropFilter = 'blur(8px)';
//   overlay.style.zIndex = '999';

//   // Create the popup container
//   const popup = document.createElement('div');
//   popup.style.position = 'fixed';
//   popup.style.left = '50%';
//   popup.style.top = '50%';
//   popup.style.transform = 'translate(-50%, -50%)';
//   popup.style.padding = '40px';
//   popup.style.backgroundColor = 'rgba(210, 66, 66, 0.58)'; 
//   popup.style.borderRadius = '12px';
//   popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
//   popup.style.zIndex = '1000';
//   popup.style.fontFamily = 'Arial, sans-serif';
//   popup.style.textAlign = 'center';
//   popup.style.backdropFilter = 'blur(10px)';

//   // Create the main message
//   const popupMainMessage = document.createElement('p');
//   popupMainMessage.innerText = mainMessage;
//   popupMainMessage.style.fontSize = '20px';
//   popupMainMessage.style.color = 'white';
//   popup.appendChild(popupMainMessage);

//   // Create the secondary message container
//   const secondaryMessageContainer = document.createElement('div');
//   secondaryMessageContainer.style.display = 'flex';
//   secondaryMessageContainer.style.alignItems = 'center';
//   secondaryMessageContainer.style.justifyContent = 'center';
//   secondaryMessageContainer.style.marginTop = '10px';

//   // Create warning icon (using Unicode warning symbol or emoji)
//   const warningIcon = document.createElement('span');
//   warningIcon.innerHTML = '&#9888;'; // Unicode warning sign
//   warningIcon.style.fontSize = '24px';
//   warningIcon.style.color = '#FFA500'; 
//   warningIcon.style.marginRight = '8px';

//   // Create the secondary message
//   const popupSecondaryMessage = document.createElement('p');
//   popupSecondaryMessage.innerText = secondaryMessage;
//   popupSecondaryMessage.style.fontSize = '16px';
//   popupSecondaryMessage.style.color = 'white';
//   popupSecondaryMessage.style.margin = '0';

//   // Append icon and message to the container
//   secondaryMessageContainer.appendChild(warningIcon);
//   secondaryMessageContainer.appendChild(popupSecondaryMessage);
//   popup.appendChild(secondaryMessageContainer);

//   // Create the close button
//   const closeButton = document.createElement('button');
//   closeButton.innerText = 'Close';
//   closeButton.style.marginTop = '20px';
//   closeButton.style.padding = '10px 20px';
//   closeButton.style.border = 'none';
//   closeButton.style.borderRadius = '5px';
//   closeButton.style.backgroundColor = '#abf7f1';
//   closeButton.style.color = 'black';
//   closeButton.style.cursor = 'pointer';
//   closeButton.style.fontSize = '16px';

//   // Close popup and overlay on button click
//   closeButton.onclick = function () {
//     popup.remove();
//     overlay.remove();
//   };

//   popup.appendChild(closeButton);
//   document.body.appendChild(overlay);
//   document.body.appendChild(popup);
// }

// // Example usage
// showPopupMessage(
//   'Welcome to TMDB API Documentation!',
//   'This documentation uses the TMDB API but is not endorsed or certified by TMDB.'
// );
