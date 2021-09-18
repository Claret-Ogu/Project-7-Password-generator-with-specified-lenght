var password=document.getElementById("password");

function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = document.getElementById("pLength").value;
    var password = "";

    if (passwordLength <=0){
        alert("Specify password length");
    } else {
        for (var i=0; i<passwordLength; i++) {
            var rNum = Math.floor(Math.random() * chars.length);
            password += chars.substring(rNum, rNum + 1);
        }
        document.getElementById("password").value = password;
        }
    }
    


function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}