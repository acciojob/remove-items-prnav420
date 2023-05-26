//your JS code here. If required.
function remove() {
  let option = document.getElementById("colorSelect");
  let selectedoptions = option.options[option.selectedIndex];

  if (selectedoptions.value === "Red") {
    option.remove(option.selectedIndex);
  } else if (selectedoptions.value === "Green") {
    option.remove(option.selectedIndex);
  } else if (selectedoptions.value === "White") {
    option.remove(option.selectedIndex);
  } else if (selectedoptions.value === "Black") {
    option.remove(option.selectedIndex);
  }
}
