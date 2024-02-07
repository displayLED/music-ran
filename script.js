function openTab(tabName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  var tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}

const start_tab = 'bot';

document.getElementById(start_tab).style.display = "block";
document.getElementsByClassName("tab")[0].classList.add("active");
