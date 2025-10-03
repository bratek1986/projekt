function button1() {
    const m2 = document.getElementById("menu2");
    m2.classList.toggle('show');
}
function Search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('SearchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("SearchUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
