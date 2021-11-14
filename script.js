var a = prompt("Enter UserName");
var b = prompt("Enter password");
if (a == "jayesh" && b == "poonam") {
    window.location.href = "start.html";
} else {
    alert("invalid details");
    window.location.href = "index.html";
}