document.querySelector('.btnTinh').onclick = Tinh
function Tinh (){
    var dai = document.getElementById('ipDai').value;
    var rong = document.getElementById('ipRong').value;
    var chuVi = (dai + rong)/2;
    var dienTich = dai * rong;
    let resutl = "Chu vi: "+chuVi +'\n'+ "Dien tich: "+dienTich
    console.log(resutl)
    document.querySelector('.dvResutl').innerHTML = resutl
}