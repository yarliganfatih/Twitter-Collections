console.log("Starting Twitter Collections Extension");

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

var lastScrollHeight = document.body.scrollHeight;
window.addEventListener("scroll", () => {
    if(lastScrollHeight != document.body.scrollHeight){
        setButtons();
    }
});

let divClassLists = [
  "css-1dbjc4n r-18u37iz r-1h0z5md",
  "css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr",
  "css-901oao r-1awozwy r-1bwzh9t r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0",
  "css-1dbjc4n r-xoduu5",
  "css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"
];

function setButtons(){

  articles = document.getElementsByTagName("article");

  for(var j=0;j<articles.length;j++){
    if(typeof articles[j].attributes["setButton"] === 'undefined'){
      //console.log(articles[j]);
      let idList = articles[j].attributes[0].textContent.split(" ");
      //console.log(document.getElementById(idList[7]));
      var link = window.location.pathname;
      if(document.getElementById(idList[7]) !== null){
        link = document.getElementById(idList[7]).attributes[0].textContent;
      }

      const nodes = [];
      for(var i=0;i<5;i++){
        nodes[i] = document.createElement("div");
        nodes[i].className = divClassLists[i];
      }

      nodes[1].setAttribute("dir","ltr");
      nodes[0].setAttribute("aria-label","Tweet Collections");
      nodes[0].setAttribute("role", "button");
      nodes[0].setAttribute("tabindex", "0");
      nodes[0].setAttribute("data-testid", "collect");
      //nodes[4].appendChild(bookmarkSVG.trim());
    
      renderLinkIcon(nodes[4]);

      for(var i=4;i>0;i--){
        nodes[i-1].appendChild(nodes[i]);
      }
      nodes[0].classList.add("collect-buttons");
      nodes[0].setAttribute("link", link);
      nodes[0].addEventListener('click', collect, false);
      //var buttonBar = articles[j].closest(".r-1ta3fxp");
      var buttonBar = document.getElementsByClassName("r-1ta3fxp")[j];
      buttonBar.appendChild(nodes[0]);
      //document.getElementById(idList[14]).appendChild(nodes[0]);
      articles[j].setAttribute("setButton", 1);
    }
  }
}

function renderLinkIcon(node) {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('viewBox', '0 0 512 512');
  iconSvg.setAttribute("class","r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi");

  iconPath.setAttribute(
    'd',
    'M70.715,0v512L256,326.715L441.285,512V0H70.715z M411.239,439.462L256,284.224L100.761,439.462V30.046h310.477V439.462z'
  );
  iconSvg.appendChild(iconPath);
  return node.appendChild(iconSvg);
}

var collect = function() {
    var link = this.getAttribute("link");
    alert(link);
};

var contextMenuItem = {
  "id": "TestId",
  "title": "TestTitle",

};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  alert("Test");
})