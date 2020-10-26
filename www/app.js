/* braucht man die oder nicht? noch klären */

/*const { link } = require("fs");
const { type } = require("os");*/

/*
docker run --rm -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret --name mongodb mongo

docker run -ti -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret -p 27017:27017 mongo

*/

window.onload = function(){

  /*loadTrans("1"); /* holt sich alles aus Datenbank */
  /*loadTrans("2"); /* holt sich alles aus Datenbank */
  /*loadTrans("3"); /* holt sich alles aus Datenbank */

  /* Button Laden <<<Klick>>> */
  document.getElementById("button_load_1").addEventListener("click", event => {
    loadTrans("1");
  })
  document.getElementById("button_load_2").addEventListener("click", event => {
    loadTrans("2");
  })
  document.getElementById("button_load_3").addEventListener("click", event => {
    loadTrans("3");
  })

  /* --- Button Speichern <<<Klick>>>  ---*/
  document.getElementById("button_save_1").addEventListener("click", event => {
    saveTrans("1");
  })
  document.getElementById("button_save_2").addEventListener("click", event => {
    saveTrans("2");
  })
  document.getElementById("button_save_3").addEventListener("click", event => {
    saveTrans("3");
  })

  
          
          /* ------------- LADEN -------------- */
          function loadTrans(trans_number) { /*TODO: Name noch ändern */
            console.log("Lade Transition für Trans " + trans_number + "!")
            
            fetch('transitions/' +  trans_number + '/')
              .then(res => res.json())
              /*.then(transitions => transitions.forEach(zeigeKonto))*/
              /*.then(transitions => {  */
              .then(transition => {  
                /*document.getElementById("property_trans" + trans_number).value = `${transition.property}`;
                document.getElementById("duration_trans" + trans_number).value = `${transition.duration}`;
                document.getElementById("timing_trans" + trans_number).value = `${transition.timing}`;
                document.getElementById("delay_trans" + trans_number).value = `${transition.delay}`;*/

                document.getElementById("property_trans" + trans_number).value = transition.property;
                document.getElementById("duration_trans" + trans_number).value = transition.duration;
                document.getElementById("timing_trans" + trans_number).value = transition.timing;
                document.getElementById("delay_trans" + trans_number).value = transition.delay;
                
                /*konto.kontonummer*/

              })
            .catch(err => zeigeFehler(err));

          }



          /* ------------- SPEICHERN -------------- */

          function saveTrans(trans_number) {
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
              headers: {"Content-Type": "application/json"} })
            .then(res => {  })
            .catch(err => zeigeFehler(err));

            /* SAVE Duration */
            fetch('transitions/' + trans_number + '/', {
              method: 'POST',
              body: JSON.stringify({ "duration": duration_user}),
              headers: {"Content-Type": "application/json"} })
            .then(res => {  })
            .catch(err => zeigeFehler(err));

            /* SAVE Timing */
            fetch('transitions/' + trans_number + '/', {
              method: 'POST',
              body: JSON.stringify({ "timing": timing_user}),
              headers: {"Content-Type": "application/json"} })
            .then(res => {  })
            .catch(err => zeigeFehler(err));            
            
            /* SAVE Delay */
            fetch('transitions/' + trans_number + '/', {
              method: 'POST',
              body: JSON.stringify({ "delay": delay_user}),
              headers: {"Content-Type": "application/json"} })
            .then(res => {  })
            .catch(err => zeigeFehler(err));               

        }
      

      


/*------- Errorhandling ---------------------*/
          function zeigeFehler(fehlertext) {
            alert("Fail " + fehlertext);
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