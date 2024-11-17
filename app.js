const loadSuperHeroes = () => {
    fetch("superheroes.php")
      .then((response) => response.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        console.error(error); // Used console.error for better error logging
      });
  };
  
  window.onload = () => {
    searchBtn = document.getElementById("search-btn"); // Explicitly defined the variable
  
    searchBtn.addEventListener("click", loadSuperHeroes);
  
    searchBtn.addEventListener("click", () => {
      const textbox = document.getElementById("superhero-input");
      const container = document.getElementById("result");
      let userInput = textbox.value.trim(); // Combined trimming into assignment
  
      if (userInput === "") {
        // Fetch all superheroes if the input is empty
        fetch("superheroes.php")
          .then((response) => response.text())
          .then((data) => {
            container.innerHTML = data;
          })
          .catch((error) => {
            console.error(error); // Used console.error for error logging
          });
      } else {
        // Fetch superheroes based on query
        fetch(`superheroes.php?query=${encodeURIComponent(userInput)}`)
          .then((response) => response.text())
          .then((data) => {
            container.innerHTML = data;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };
  