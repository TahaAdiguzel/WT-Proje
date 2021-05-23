<?php 
    if(isset($_POST['btn']))
    {
        $un= $_POST['kullanici'];
        $pw = $_POST['sifre']; 
        if($un == 'g201210055@sakarya.edu.tr' && $pw == 'g201210055')
        {
            sleep(5);
            header("location:yalova.html");
            exit();
        }
        else 
        {   
            sleep(5);
            header("location:iletisim.html");
            exit();
        }
    }
?>