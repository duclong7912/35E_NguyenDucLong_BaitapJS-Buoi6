function baitap2() {
    var x = +document.getElementById("soX").value;
    var n = +document.getElementById("soN").value;
    var z = 0;
    var result = 0;
    while(z < n) {
        z++;
        result += x**z;
    }


    document.getElementById("showTinhTong").innerHTML = "Tổng: " + result;
}