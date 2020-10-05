
/* window.onload sorgt dafür, dass das Script erst ausgeführt wird, wenn die Seite geladen wurde. Sonst existieren die IDs nämlich noch nicht */
        window.onload = function(){ 
          
          document.getElementById("button_apply_1").addEventListener("click", event => {
            applyStyle("1");
          })
          document.getElementById("button_apply_2").addEventListener("click", event => {
            applyStyle("2");
          })
          document.getElementById("button_apply_3").addEventListener("click", event => {
            applyStyle("3");
          })

          function applyStyle(trans_number) {
            alert("Button " + trans_number + " clicked!")  
            
            /* --- Read settings --- */
              /* Property */ /* credits to https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript */
              var option_prop_trans = document.getElementById("property_trans1");
              var property_user = option_prop_trans.options[option_prop_trans.selectedIndex].text;
              alert("PROPERTY: " + property_user);    

              /* Duration */
              var duration_user = document.getElementById("duration_trans1").value;
              alert("DURATION: " + duration_user);  
              
              /* Timing */ /* credits to https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript */
              var option_time_trans = document.getElementById("timing_trans1");
              var timing_user = option_time_trans.options[option_time_trans.selectedIndex].text;
              alert("TIMING: " + timing_user);
              
              /* Delay */
              var delay_user = document.getElementById("delay_trans1").value;
              alert("DELAY: " + delay_user);
              
              /* --- Put style --- */
              /* Property */
              


              /* Duration */
              
              /* Timing */
              
              /* Delay */
              
              
              /* Write message */
              alert("Style angewendet!");
            
          }
        }
