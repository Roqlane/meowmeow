<?php
$phpFilePath = 'http://challenge01.root-me.org/web-serveur/ch13/index.php';
$phpCode = file_get_contents($phpFilePath);
$phpCode = htmlspecialchars($phpCode);

echo "<pre>{$phpCode}</pre>";
?>
