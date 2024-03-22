  var htmlCodeElements = document.getElementsByClassName("language-markup");

  for (var i = 0; i < htmlCodeElements.length; i++) {
    var htmlCode = htmlCodeElements[i].innerHTML;
    htmlCode = htmlCode.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    htmlCodeElements[i].innerHTML = htmlCode;
  }


function copyProgram(programId, copiedId) {
  const copyText = document.getElementById(programId).querySelector('code');
  const copiedElement = document.getElementById(copiedId);

  navigator.clipboard.writeText(copyText.textContent)
    .then(() => {
      copiedElement.textContent = "Copied!";
      setTimeout(() => {
        copiedElement.textContent = "";
      }, 5000);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
      alert('Copying failed. Please try again or copy manually.');
    });
}


function switchProgram(current_pgm) {
  var containers = document.getElementsByClassName('textarea_container');
  for (var i = 0; i < containers.length; i++) {
      var container = containers[i];

          container.style.display = "none";
          document.getElementById(current_pgm).style.display="flex";
  }
}

function closeProgram() {
  var containers = document.getElementsByClassName('textarea_container');
  for (var i = 0; i < containers.length; i++) {
      var container = containers[i];

          container.style.display = "none";
  }
}


function openNav() {
  var navWidth = document.getElementById('pgmList');
  if (navWidth.style.width === "60vw") {
    navWidth.style.width = "0";
  } else {
    navWidth.style.width = "60vw";
  }
}

window.location.href="https://examrestrict.netlify.app/";
