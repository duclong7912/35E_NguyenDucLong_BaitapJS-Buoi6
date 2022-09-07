function baitap4() {
    var content = '';
    var bgChan = '';
    var bgLe = '';

    for (var i = 1; i <= 10; i++) {
        if(i % 2 === 0) {
            bgChan = '#c0392b';
            content += "<div style = 'background-color:" + bgChan + ";height: 50px;' class='d-flex align-items-center justify-content-center text-white';>số chẵn</div>";
        } else {
            bgLe = '#2980b9';
            content += "<div style = 'background-color:" + bgLe + ";height: 50px;' class='d-flex align-items-center justify-content-center text-white';>số lẻ</div>";
        }
    }

    
    document.getElementById("div").innerHTML = content;
}