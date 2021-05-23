// JavaScript source code
function checkForm()
{
    var name = document.forms["iletisim"]["ad"].value;
    var surname = document.forms["iletisim"]["soyad"].value;
    var mail = document.forms["iletisim"]["mail"].value;
    var message = document.forms["iletisim"]["mesaj"].value;

    alert(" Ad     : " + name + "\n Soyadi   :" + surname + "\n E-Mail  :" + mail + "\n Mesajiniz  :" + message);  
} 

