      let pages = ["transition1", "transition2", "transition3", "welcome"];
      
      function changeNavigation(page) {
        for (let p of pages) {
				    let el = document.getElementById(p)
				  if (p === page)
					  el.classList.remove("hidden")
				  else
					  el.classList.add("hidden")
			}
      }

      window.addEventListener("hashchange", event => {
      changeNavigation(window.location.hash.replace("#",""));
    })
    
    window.addEventListener("load", event  => {
      changeNavigation("welcome"); /* Was passiert bei erstem Laden, wenn im Hash noch nix steht */
    })
