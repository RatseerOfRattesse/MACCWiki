function searchQuotes() {
  var input, filter, ul, li, p, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("quoteList");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    pTitle = li[i].getElementsByClassName("admonition-title")[0];
    titleTxtValue = pTitle.textContent || pTitle.innerText;
    p = li[i].getElementsByClassName("body")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || titleTxtValue.toUpperCase().indexOf(filter) > -1 ) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}