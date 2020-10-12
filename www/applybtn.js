const { link } = require("fs");

/* window.onload sorgt dafür, dass das Script erst ausgeführt wird, wenn die Seite geladen wurde. Sonst existieren die IDs nämlich noch nicht */
        window.onload = function(){ 

          ladeKonten(); /* holt sich alles aus Datenbank */

          /* Button Laden <<<Klick>>> */
          document.getElementById("button_load_1").addEventListener("click", event => {
            zeigeKonto("1");
          })
          document.getElementById("button_load_1").addEventListener("click", event => {
            zeigeKonto("2");
          })
          document.getElementById("button_load_1").addEventListener("click", event => {
            zeigeKonto("3");
          })

          /* --- Button Speichern <<<Klick>>>  ---*/
          document.getElementById("button_save_1").addEventListener("click", event => {
            erzeugeKonto("1");
          })
          document.getElementById("button_save_2").addEventListener("click", event => {
            erzeugeKonto("1");
          })
          document.getElementById("button_save_3").addEventListener("click", event => {
            erzeugeKonto("1");
          })

          /* Button Anwenden <<<Klick>>> */
          document.getElementById("button_apply_1").addEventListener("click", event => {
            applyStyle("1");
          })
          document.getElementById("button_apply_2").addEventListener("click", event => {
            applyStyle("2");
          })
          document.getElementById("button_apply_3").addEventListener("click", event => {
            applyStyle("3");
          })
          
          
          
          /* ------------- LADEN -------------- */
         function ladeKonten() { /*TODO: Name noch ändern */
            fetch('transitions/')
              .then(res => res.json())
              .then(transitions => transitions.forEach(zeigeKonto)
            .catch(err => zeigeFehler(err))

          }

          function zeigeKonto(transitionnummer) {

          /* Referenzen aufbauen */
            var option_prop_trans = document.getElementById("property_trans" + trans_number);
            var duration_user = document.getElementById("duration_trans" + trans_number);
            var option_time_trans = document.getElementById("timing_trans" + trans_number);
            var delay_user = document.getElementById("delay_trans" + trans_number);
            
          /* Ausgabe */
            option_prop_trans.text = property /* `${property}` */
            duration_user.value = duration /* `${duration}` */
            option_time_trans.text = timing /* `${timing}` */
            delay_user.value = delay /* `${delay}` */
        }

          /* Errorhandling */
          zeigeFehler(fehlertext) {
            const err_out = document.getElementById('error_out')
            const div = document.createElement('div')
            div.classList.add('alert')
            div.classList.add('alert-danger')
            div.setAttribute('role', 'alert')
            div.innerText = fehlertext
            err_out.appendChild(div)
          
            setTimeout(() => err_out.removeChild(div), 5000)

          }





          /* ------------ ANWENDEN ------------ */
          function applyStyle(trans_number) {
            alert("Button " + trans_number + " clicked!")

            /* --- Read settings --- */
              /* GET Property */ /* credits to https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript */
              var option_prop_trans = document.getElementById("property_trans" + trans_number);
              var property_user = option_prop_trans.options[option_prop_trans.selectedIndex].text;
              console.log("PROPERTY: " + property_user);    

              /* GET Duration */
              var duration_user = document.getElementById("duration_trans" + trans_number).value;
              console.log("DURATION: " + duration_user);  
              
              /* GET Timing */ /* credits to https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript */
              var option_time_trans = document.getElementById("timing_trans" + trans_number);
              var timing_user = option_time_trans.options[option_time_trans.selectedIndex].text;
              console.log("TIMING: " + timing_user);
              
              /* GET Delay */
              var delay_user = document.getElementById("delay_trans" + trans_number).value;
              console.log("DELAY: " + delay_user);
              
              /* --- Put style --- */
              /* --- settransitiongoal --- */
              let transitionelement = document.getElementById("demo_trans" + trans_number);
              console.log(transitionelement);              

              /* --- Adjust style --- */
              /*transitionelement.setAttribute("style", "transition-duration: 8000ms; transition-property: all; transition-timing-function: ease-in-out; transition-delay: 100ms;");*/
              transitionelement.setAttribute("style", "transition-duration: " + duration_user + "ms; transition-property: " + property_user + "; transition-timing-function: " + timing_user + "; transition-delay: " + delay_user + "ms;");
              
              /* Write message */
              alert("Style auf Transition " + trans_number + " angewendet!");
            
          }
        }
