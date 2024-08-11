// wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // variable to store the amenity id
  const checkedAmenity = {};
  // select all checked boxes within the amenities list
  const checkboxes = document.querySelectorAll('.popover input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      const amenityId = this.dataset.id;
      const amenityName = this.dataset.name;

      if (this.checked) {
        // if checked, add to checkedAmenity
        checkedAmenity[amenityId] = amenityName;
      } else {
        // if unchecked, remove from checkedAmenity
        delete checkedAmenity[amenityId];
      }

      // updating the h4 tag with the list of the selected amenities
      const h4 = document.querySelector('.amenities h4');
      h4.textContent = Object.values(checkedAmenity).join(', ');
    });
  });
});
