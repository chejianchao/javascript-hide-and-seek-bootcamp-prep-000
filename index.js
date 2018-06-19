function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  var list = document.querySelectorAll(".ranked-list")
  for( var idx in list){
    list[idx].innerHTML = parseInt(list[idx].innerHTML) + n;
  }
}

function deepestChild(){
  
}