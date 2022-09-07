function baitap1() {
    var i = 1;
    var n = 0; 
    while(n < 10000){
        i++;
        n += i;
    }

    document.getElementById('showKetQua').innerHTML = "Số nguyên dương nhỏ nhất là: " + i;
}
