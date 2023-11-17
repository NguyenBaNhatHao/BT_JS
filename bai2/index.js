document.querySelector('.btnTinh').onclick = TinhGiaTriTungBinh

function TinhGiaTriTungBinh()
{
    var num1 = document.getElementById('ipSo1').value;
    var num2 = document.getElementById('ipSo1').value;
    var num3 = document.getElementById('ipSo1').value;
    var num4 = document.getElementById('ipSo1').value;
    var num5 = document.getElementById('ipSo1').value;
    var sum = (num1 + num2 + num3 + num4 + num5)/5;
    console.log('Gia tri trung binh =  ',sum);
    document.querySelector('.dvResutl').innerHTML = sum;
}