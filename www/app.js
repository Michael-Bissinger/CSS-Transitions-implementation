const { link } = require("fs");
const { type } = require("os");

window.onload = function(){


  ladeKonten(); /* holt sich alles aus Datenbank */

  /* Button Laden <<<Klick>>> */
  document.getElementById("button_load_1").addEventListener("click", event => {
    ladeKonten("1");
  })
  document.getElementById("button_load_1").addEventListener("click", event => {
    ladeKonten("2");
  })
  document.getElementById("button_load_1").addEventListener("click", event => {
    ladeKonten("3");
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

     
          
          /* ------------- LADEN -------------- */
          function ladeKonten(trans_number) { /*TODO: Name noch ändern */
            console.log("Lade Transition für Trans " + trans_number + "!")
            
            fetch('transitions/' +  trans_number + '/')
              .then(res => res.json())
              /*.then(transitions => transitions.forEach(zeigeKonto))*/
              .then(transitions => {
                document.getElementById("property_trans" + trans_number).value = `${transition.property}`;
                document.getElementById("duration_trans" + trans_number).value = `${transition.duration}`;
                document.getElementById("timing_trans" + trans_number).value = `${transition.timing}`;
                document.getElementById("delay_trans" + trans_number).value = `${transition.delay}`;
              })
            .catch(err => zeigeFehler(err));

          }



          /* ------------- SPEICHERN -------------- */

          function erzeugeKonto(trans_number) {
          /* Erst alte gegebenenfalls vorhandene Daten löschen */

            fetch('transitions/' + trans_number + '/', { method: 'DELETE' })
            .then(res => {  })
            .catch(err => zeigeFehler(err));
        

            
          /* Dann neue Daten einpflegen */
          /* Daten auslesen */  

            /* READ Property */ /* credits to https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript */
            var option_prop_trans = document.getElementById("property_trans" + trans_number);
            var property_user = option_prop_trans.options[option_prop_trans.selectedIndex].text;
            console.log("PROPERTY: " + property_user);    

            /* READ Duration */
            var duration_user = document.getElementById("duration_trans" + trans_number).value;
            console.log("DURATION: " + duration_user);  
              
            /* READ Timing */ /* credits to https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript */
            var option_time_trans = document.getElementById("timing_trans" + trans_number);
            var timing_user = option_time_trans.options[option_time_trans.selectedIndex].text;
            console.log("TIMING: " + timing_user);
              
            /* READ Delay */
            var delay_user = document.getElementById("delay_trans" + trans_number).value;
            console.log("DELAY: " + delay_user);

          /* Jetzt Daten abspeichern */
            /* SAVE Property */
            fetch('transitions/' + trans_number + '/', {
              method: 'POST',
              body: JSON.stringify({ "property": property_user}),
              header: {"Content-Type": "application/json"} })
            .then(res => {  })
            .catch(err => zeigeFehler(err));

            /* SAVE Duration */
            fetch('transitions/' + trans_number + '/', {
              method: 'POST',
              body: JSON.stringify({ "duration": duration_user}),
              header: {"Content-Type": "application/json"} })
            .then(res => {  })
            .catch(err => zeigeFehler(err));

            /* SAVE Timing */
            fetch('transitions/' + trans_number + '/', {
              method: 'POST',
              body: JSON.stringify({ "timing": timing_user}),
              header: {"Content-Type": "application/json"} })
            .then(res => {  })
            .catch(err => zeigeFehler(err));            
            
            /* SAVE Delay */
            fetch('transitions/' + trans_number + '/', {
              method: 'POST',
              body: JSON.stringify({ "delay": delay_user}),
              header: {"Content-Type": "application/json"} })
            .then(res => {  })
            .catch(err => zeigeFehler(err));               

        }





/*------- Errorhandling ---------------------*/
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

}