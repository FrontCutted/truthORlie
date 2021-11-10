function randy(){
  var status = document.getElementById("status");
  var conds = ["Lie", "Truth"];
  var rand = Math.floor(Math.random() * conds.length);
  status.innerHTML = conds[rand];
  if(rand == 1){
    status.style.cssText = "color:lime; background: hsla(150, 100%, 50%, 0.1);";
  }else{
    status.style.cssText = "color:red; background: hsla(0, 100%, 50%, 0.1);";
  }
}