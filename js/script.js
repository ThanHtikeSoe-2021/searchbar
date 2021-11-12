
function openLink(url){

}
function addLink(){
  var url= document.getElementById("myInput");
  var linktext=url.value;
  var url_link="https://"+linktext;

  window.open(url_link);
  url.value="";
}

  var keypress=document.getElementById("myInput");
keypress.addEventListener("keyup", function(event) {

  if(event.keyCode===13){
       document.getElementById("click").click();
  }

});
