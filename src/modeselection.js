function toggleBgColor(event) {
    const body = document.querySelector(".dmodewhite"); // Select the body element
    const currentBgColor = window.getComputedStyle(body).backgroundColor; // Get the actual background color
    console.log(currentBgColor);
    const whitefont = document.querySelector("div");

    
    // Check the current background color and toggle between white and black
    if (currentBgColor === "rgb(255, 255, 255)") { // White in RGB format
      body.style.backgroundColor = "black"; // Set background to black
      body.style.color = "white !important"; // Set text color to white
      whitefont.style.color = "white";
    } else {
      body.style.backgroundColor = "white"; // Set background to white
      body.style.color = "black !important"; // Set text color to black
      whitefont.style.color = "black"
    }
  }
  