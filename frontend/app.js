
//Declare variables for buttons and managing areas
var btnSubmit = $('#submit');
var nameText = $('#reserve-name');
var phoneText = $('#reserve-phone');
var emailText = $('#reserve-email');
var idText = $('#reserve-unique-id');

//Events on buttons
btnSubmit.on('click', postRsv);

function postRsv(e){
    e.preventDefault();
    //Function to get the last table occupied
    // var table = 0;
    // $.get('/api/tables', function(res){
    //     if(res.data.length)
    // })
    
    var newTable = {
        name: nameText.val(),
        phNum: phoneText.val(),
        email: emailText.val(),
        id: idText.val(),
        table: 1
    }

    $.post("/api/tables", newTable).then(function(data){
        console.log("Table added", data);
        alert('Adding table...');
    })
}


//Functions