function search() {
  // Declare variables
  var input, filter, ul, li, div, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.querySelectorAll('ul');
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    div = li[i].getElementsByTagName("div")[0];
    txtValue = div.textContent || div.innerText;
    console.log(txtValue)
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}