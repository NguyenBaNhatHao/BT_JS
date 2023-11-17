document.querySelector('.btnTinh').onclick = Tinh
function Tinh (){
    var num = document.getElementById('ipNum').value;
    var num1 =  Math.round(num / 10);
    var num2 = Math.round(num % 10);
    var resutl = num1 + num2;
    console.log(resutl)
    document.querySelector('.dvResutl').innerHTML = resutl
}