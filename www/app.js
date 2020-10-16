const { link } = require("fs");

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

          function zeigeKonto(transitionnummer) {

          /* Referenzen aufbauen */
            var option_prop_trans = document.getElementById("property_trans" + trans_number);
            var duration_user = document.getElementById("duration_trans" + trans_number);
            var option_time_trans = document.getElementById("timing_trans" + trans_number);
            var delay_user = document.getElementById("delay_trans" + trans_number);
            
          /* Ausgabe */
            option_prop_trans.text = property; /* `${property}` */
            duration_user.value = duration; /* `${duration}` */
            option_time_trans.text = timing; /* `${timing}` */
            delay_user.value = delay; /* `${delay}` */
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








}