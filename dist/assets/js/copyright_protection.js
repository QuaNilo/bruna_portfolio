function disableRightClick(event) {
   if (event.button == 2) {
     event.preventDefault(); // Prevent the default right-click behavior
     return false;
   }
 };