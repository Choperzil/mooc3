function update(previewPic) {
  console.log("Hovered over: ", previewPic);
  console.log("Image source: ", previewPic.src);
  console.log("Alt text: ", previewPic.alt);

document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";

document.getElementById('image').innerHTML = previewPic.alt;
  
}

function undo() {
document.getElementById('image').style.backgroundImage = "url('')"

document.getElementById('image').innerHTML = "Hover over an image below to display here.";
  
}


function initGallery() {
  const figure = document.querySelectorAll('img');

  // Add tabindex to each figure
  for (i = 0; i < figure.length; i++) {
    figure[i].setAttribute('tabindex','0');
}

// Add event listeners for mouse and keyboard events
  figure.forEach(figure =>{
    figure.addEventListener('mouseover', update(this))
    figure.addEventListener('mouseleave', undo)

    figure.addEventListener('focus', update(this))
    figure.addEventListener('blur', undo)

  }
  )

}

