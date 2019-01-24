<?php
$directory = '/angularjs-soundclound-client/src/website/public';

?>

<!DOCTYPE html>
<html lang="en" ng-app="sdn">
<head>
    <meta charset="UTF-8">
    <title>Soundcloud</title>

    <!--WEBKIT TAGS-->
    <link rel="apple-touch-startup-image" href="<?=$directory?>/assets/appicon/icon144.png">
    <link rel="apple-touch-icon" href="<?=$directory?>/assets/appicon/icon144.png">
    <meta name="apple-mobile-web-app-title" content="SoundCloud">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <!--END OF WEBKIT TAGS-->

    <link rel="manifest" href="<?=$directory?>/manifest.json">

    <link rel=icon href="<?=$directory?>/assets/soundcloud_logo.png">
    <link rel="stylesheet" href="<?=$directory?>/dist/fontawesome-all.css"/>
    <link rel="stylesheet" href="<?=$directory?>/dist/main.css"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="<?=$directory?>/">
</head>
<body>

<app></app>

<script src="<?=$directory?>/dist/bundle.js" type="text/javascript"></script>

<!-- Google Analytics -->
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-111413894-1', 'auto');
    ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->
</body>
</html>
