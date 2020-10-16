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
          function ladeKonten() { /*TODO: Name noch ändern */
            fetch('transitions/')
              .then(res => res.json())
              .then(transitions => transitions.forEach(zeigeKonto))
            .catch(err => zeigeFehler(err));


          /* Datenbank zu HTML-Elementen übertragen -> eigentlich ein doppler, wird schon in zeige konto/ausgabe gemacht!*/
          document.getElementById("property_trans1").value = property; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */
          document.getElementById("property_trans2").value = property; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */
          document.getElementById("property_trans3").value = property; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */

          document.getElementById("duration_trans1").value = duration; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */
          document.getElementById("duration_trans2").value = duration; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */
          document.getElementById("duration_trans3").value = duration; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */
          
          document.getElementById("timing_trans1").value = timing; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */
          document.getElementById("timing_trans2").value = timing; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */
          document.getElementById("timing_trans3").value = timing; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */

          document.getElementById("delay_trans1").value = delay; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */
          document.getElementById("delay_trans2").value = delay; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */
          document.getElementById("delay_trans3").value = delay; /* hier noch richtige Schreibweise finden, wie man das schreibt, dass es aus Datenbank gezogen wird */

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