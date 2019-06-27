<script>

var BTN_1 = document.getElementById('cookiesPrivacy');

var isClosed = false;

document.getElementById('cookiesPrivacy').style.display = "none";

function ClosePrivacyPolicyBadge() {

  if (isClosed && !localStorage.isCookieAlreadyAgreed == true) {
    document.getElementById("cookiesPrivacy").style.display = "none";
    return;
  } else {
    document.getElementById("cookiesPrivacy").style.display = "block";
    isClosed = true; // Vincolo da codice la sua chiusura
    localStorage.isCookieAlreadyAgreed = true;

  }
}

BTN_1.onclick = ClosePrivacyPolicyBadge;


</script>


function animateClosure(){

  var elem = document.getElementById("cookiesPrivacy");
  var pos = 0;
  var id = setInterval(frame, 1);

  function frame() {
    if(pos <= -30) {
      clearInterval(id);
    } else {
      pos -= 0.5;
      elem.style.bottom = pos + '%';
    }
  }
}

function openLabel() {

  var elem = document.getElementById("cookiesPrivacyLabel");
  var pos = -10;

  elem.style.bottom = pos + '%';
  elem.style.display = "block";

  var id = setInterval(frame, 1);

  function frame() {
    if(pos >= 0) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + '%';
    }
  }


}

function OpenPrivacyPolicyBadge() {

  if (isClosed) {
    document.getElementById("cookiesPrivacy").style.display = "block";
    animateOpen();
    closeLabel();
    isClosed = false;
    return;
    } else {
    return;
  }

}

function animateOpen() {

  var elem = document.getElementById("cookiesPrivacy");
  var pos = -10;

  elem.style.bottom = pos + '%';
  var id = setInterval(frame, 1);

  function frame() {
    if(pos >= 0) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + '%';
    }
  }

}

function closeLabel() {

    var elem = document.getElementById("cookiesPrivacyLabel");
    var pos = 0;
    var id = setInterval(frame, 1);

    function frame() {
      if(pos <= -30) {
        clearInterval(id);
      } else {
        pos -= 0.5;
        elem.style.bottom = pos + '%';
      }
    }

}

</script>