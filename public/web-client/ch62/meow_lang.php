<?php
$phpFilePath = 'http://challenge01.root-me.org/web-serveur/ch13/index.php';
$phpCode = file_get_contents($phpFilePath);
$phpCode = htmlspecialchars($phpCode);

$enPage = htmlspecialchars(file_get_contents('http://challenge01.root-me.org/web-serveur/ch13/en_lang.php'));
$frPage = htmlspecialchars(file_get_contents('http://challenge01.root-me.org/web-serveur/ch13/fr_lang.php'));
echo "<pre>{$phpCode}</pre>"."</pre>{$enPage}</pre>"."<pre>{$frPage}</pre>";
?>
