var modal = document.getElementById("galleryModal");

const iconContainer = document.getElementsByClassName("gallery-icon-container");
for(var container of iconContainer){
  container.addEventListener("click", zoomIn, false)
}
  
function zoomIn(e){
  var container = e.currentTarget;
  var img = container.parentNode.getElementsByClassName("gallery-img")[0];

  if(window.innerWidth > 700){
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.addEventListener("click", zoomOut, false)
  } else {
    window.open(img.src);
  }
}

function zoomOut() {
  modal.style.display = "none";
  this.removeEventListener('click', zoomOut, false);
}