function start() {
    var name = document.getElementById('name').value;
    var ram = document.getElementById('ram').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;
    
    if(name) {
        
    } else{
        alert("Select a name.");
    }
    if(ram) {
       
    } else {
        alert("Select RAM memory limit. <20 and >2500 is not valid.");
    }
    if (email) {
        
    } else {
        alert("Please enter your E-Mail.");
    }
    if (location == "Server Location") {
        alert("Please select a server location.");
    } else{
        alert(location + " Is full. Try another location.");
    }
    
}
function checkdata() {
    alert("The credentials are not valid.");
}
