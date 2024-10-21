messageToggle.onclick = function() {
    messagePage.classList.toggle("expand");
    if (messagePage.classList.contains("expand")) {
      document.getElementById("openup").classList.add("hidden");
      document.getElementById("dropdown").classList.remove("hidden");
    }else{
      document.getElementById("openup").classList.remove("hidden");
      document.getElementById("dropdown").classList.add("hidden");
    }
  };


  