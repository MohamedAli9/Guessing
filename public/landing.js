// call main where the doc is ready
$(document).ready(main);



 // main calls the load functions.
function main () {
    //when the user clicks the button in the landing page, call playerName function
    $("#button2").on("click", playerName);

}


function playerName() {
    //throw the user name into the local storage.
    let userName = $("#name").val();
    sessionStorage.setItem( "username", userName);


}