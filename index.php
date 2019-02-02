<?php
$directory = '/projects/angularjs-soundcloud-client/src/website/public';

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

    <link rel="apple-touch-startup-image" href="<?=$directory?>/assets/splash/launch-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="<?=$directory?>/assets/splash/launch-750-1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="<?=$directory?>/assets/splash/launch-1242x2148.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<!--    <link rel="apple-touch-startup-image" href="--><?//=$directory?><!--/assets/splash/launch-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">-->
<!--    <link rel="apple-touch-startup-image" href="--><?//=$directory?><!--/assets/splash/launch-1536x2048.png" media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">-->
<!--    <link rel="apple-touch-startup-image" href="--><?//=$directory?><!--/assets/splash/launch-1668x2224.png" media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">-->
<!--    <link rel="apple-touch-startup-image" href="--><?//=$directory?><!--/assets/splash/launch-2048x2732.png" media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">-->

    <!--END OF WEBKIT TAGS-->

    <link rel="manifest" href="<?=$directory?>/manifest.json">

    <link rel=icon href="<?=$directory?>/assets/soundcloud_logo.png">
    <link rel="stylesheet" href="<?=$directory?>/dist/fontawesome-all.css"/>
    <link rel="stylesheet" href="<?=$directory?>/dist/main.css"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/projects/angularjs-soundcloud-client/">
</head>
<body style="background-color: #262728;">

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
