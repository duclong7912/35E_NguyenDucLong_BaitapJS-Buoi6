function baitap3() {
    var num1 = +document.getElementById("number1").value;
    var n = 1;
    var result = 1;
    while (n < num1) {
        result += result * n++;
    }

    var ketQua = 'Giai thừa của ' + num1 + ' bằng: ' + result;
    document.getElementById("showGiaiThua").innerHTML = ketQua;
}