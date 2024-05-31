document.addEventListener("click", function() {
      //Event Listener
      document.addEventListener("click", function(event) {
        if (event.target.className !== 'clear-button') {
          var dot = document.createElement("div");
          dot.className = "dot";
          dot.style.left = (event.pageX - 4) + "px";
          dot.style.top = (event.pageY - 4) + "px";
          document.body.appendChild(dot);
        }
      });

      //Clear button
      var clearButton = document.querySelector(".clear-button");
      clearButton.addEventListener("click", function() {
        var dots = document.querySelectorAll(".dot");
        dots.forEach(function(dot) {
          dot.parentNode.removeChild(dot);
        });
        event.stopPropagation();    
      });
    });
