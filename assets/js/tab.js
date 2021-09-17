function openCity(b, a) {
    var c, d, e;
    d = document.getElementsByClassName("tabcontent");
    for (c = 0; c < d.length; c++) { d[c].style.display = "none" }
    e = document.getElementsByClassName("tablinks");
    for (c = 0; c < e.length; c++) { e[c].className = e[c].className.replace(" active", "") }
    document.getElementById(a).style.display = "block";
    b.currentTarget.className += " active"
}
document.getElementById("defaultOpen").click();