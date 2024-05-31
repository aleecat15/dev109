document.addEventListener("click", function() {
      // Add a click event listener to the document to create dots
      document.addEventListener("click", function(event) {
        if (event.target.className !== 'clear-button') {
          var dot = document.createElement("div");
          dot.className = "dot";
          dot.style.left = (event.pageX - 4) + "px";
          dot.style.top = (event.pageY - 4) + "px";
          document.body.appendChild(dot);
        }
      });

      // Add a click event listener to the clear button to remove all dots
      var clearButton = document.querySelector(".clear-button");
      clearButton.addEventListener("click", function() {
        var dots = document.querySelectorAll(".dot");
        dots.forEach(function(dot) {
          dot.parentNode.removeChild(dot);
        });
      });
    });
