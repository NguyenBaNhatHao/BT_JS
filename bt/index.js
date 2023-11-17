document.querySelector('.btnTinh').onclick = TinhTien
function TinhTien (){
    var tien = document.getElementById('ipTien').value;
    var ngay = document.getElementById('ipNgay').value;
    var tongTien = tien * ngay;
    console.log('tongTien: ',tongTien);
    document.querySelector('.dvResutl').innerHTML = tongTien
}