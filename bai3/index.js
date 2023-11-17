document.querySelector('.btnTinh').onclick = ConvertCurrency

function ConvertCurrency()
{
    var usd = document.getElementById('ipUSD').value;
    var Resutl = usd * 23500
    console.log('Ket qua ', Resutl)
    document.querySelector('.dvResutl').innerHTML = Resutl + " VND"
}