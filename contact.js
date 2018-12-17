//contact field
function send (){
    setTimeout(function(){
        window.open("mailto:malcolm.berry65@gmail.com" +
        document.getElementById("Name").value + space2 +
        document.getElementById("Email").value + space +
        document.getElementById("note").value);
    },320);
}