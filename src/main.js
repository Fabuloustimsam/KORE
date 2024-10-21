function cancelBtn(event) {
    const cancelButton = document.getElementById("canceldisplay")
    const cancel = document.getElementById("welcomeSection")    
    return cancel.style.display = "none"
}

function showMoreShow(event) {
    let shows = document.getElementById("showHiddenMore")
    let showbutton = document.getElementById("showmore")
        showbutton.style.display = "none"
        shows.style.display= "Block"
}

function showLess(event) {
  let shows = document.getElementById("showHiddenMore")
  let showbutton = document.getElementById("showmore")
      shows.style.display = "none"
      showbutton.style.display = "block"
}

const container1 = document.getElementById('s231');
const container2 = document.getElementById('s232');

function syncScroll(e) {
  if (e.target === s231) {
    s232.scrollTop = s231.scrollTop;
    s232.scrollLeft = s231.scrollLeft;
  } else if (e.target === s232) {
    s231.scrollTop = s232.scrollTop;
    s231.scrollLeft = s232.scrollLeft;
  }
}

s231.addEventListener('scroll', syncScroll);
s232.addEventListener('scroll', syncScroll);


function followingButtonShow() {
  let fYou =document.getElementById("forYouPage")
      fYou.style.display ="none"

}
function forYouButton() {
  let fYou =document.getElementById("forYouPage")
      fYou.style.display ="block"
      

}

    const messagePage = document.getElementById("messagePage");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.onclick = function() {
      messagePage.classList.toggle("expand");
      if (messagePage.classList.contains("expand")) {
        document.getElementById("openup").classList.add("hidden");
        document.getElementById("dropdown").classList.remove("hidden");
      }else{
        document.getElementById("openup").classList.remove("hidden");
        document.getElementById("dropdown").classList.add("hidden");
      }
    };

    function likeButton(event) {
      const like = document.getElementById("likeButton")
      return like.style.fill = "red"

    }

    function myProfile(event) {
      const logout = document.getElementById("logOut");
    
      const computedStyle = window.getComputedStyle(logout).display;
      
      if (computedStyle === "none") {
        logout.style.display = "block"; 
      } else {
        logout.style.display = "none";
      }
    }




    