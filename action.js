/* apply settings */
/*var buttonapply1 = document.getElementById("button_apply_1")
var buttonapply2 = document.getElementById("button_apply_2")
var buttonapply3 = document.getElementById("button_apply_3")
*/
/*document.getElementById("button_apply_1").addEventListener('click', selectOption, false);
*/

/*buttonapply1.addEventListener('click', selectOption );

function selectOption() {
    alert("hello22");  
    
}*/

/*document.getElementById("button_apply_1").addEventListener('click',function ()
{
 alert("hello");
 //validation code to see State field is mandatory.  
}  ); */


/*buttonapply1.onclick = function();*/

/*buttonapply1.onclick = apply(1);
buttonapply2.onclick = apply(2);
buttonapply3.onclick = apply(3);*/
/*
function apply(button_number) {
    alert( 'Anwenden geklickt!' );

    /* Read settings */

    /* Change style */

    /* Write message */
/*  }
/*
document.getElementById("button_apply_1").addEventListener('click',function ()
{
 alert("hello");
 //validation code to see State field is mandatory.  
}  ); 

*/

document.getElementById("button_apply_1").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}