<?php
    $dir = getcwd();
    $f = scandir($dir);
?>
<!DOCTYPE html>
<html lang="en" class="no-dev">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport"
                    content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <link rel="shortcut icon" href="dist/images/apple-icon.png"
                    type="image/x-icon">
        <link rel="icon" href="dist/images/favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon" href="dist/images/apple-icon.png"/>
        <meta content="telephone=no" name="format-detection">
        <title>MENU</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            html, body {
                width: 100%;
                height: 100%;
            }
            main {
                min-height: 100%;
                padding: 30px 0;
                background-image: url('http://www.createwebquest.com/sites/default/files/images/182401_ocean-waves-wallpaper-1680x1050-tides-receded_1680x1050_0.jpg');
                background-repeat:repeat;
                background-size: cover;
                background-position: 50% 50%;
            }
            ul {
                width: 100%;
                max-width: 480px;
                margin: 0 auto;
                padding: 0 10px 0 0;
                list-style-type: none;
                counter-reset: pages;
            }
            ul li {
                position: relative;
                display: block;
                margin-bottom: 5px;
                padding-left: 50px;
                counter-increment: pages;
            }
            ul li:before {
                content: counter(pages);
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate3d(0, -50%, 0);
                width: 40px;
                height: 40px;
                color: #232f3f;
                font: 700 20px/40px sans-serif;
                transition: color .7s;
                border-radius: 50%;
                background-color: #fff;
                text-align: center;
            }
            ul a {
                display: block;
                font-family: sans-serif;
                font-size: 20px;
                line-height: 24px;
                border-radius: 3px;
                padding: 10px 15px;
                width: auto;
                color: #fff;
                background-color: #232f3f;
                text-decoration: none;
                transition: background-color .3s ease;
            }
            @media screen and (min-width: 1280px) {
                ul li:hover a {
                    background-color: rgba(0, 100, 120, .8);
                    color: #fff;
                }
                ul li:hover:before {
                    color: rgba(0, 100, 120, .8);
                }
            }
        </style>
    </head>
    <body>
        <main>
            <ul>
                <?php foreach ($f as $file) :?>
                    <?php if (preg_match('/^(?!_).*html$/', $file)) :?>
                        <li style="margin-left: 20px;">
                            <a href="<?php echo ($file)?>" target="_blank"><?php echo ($file)?></a>
                        </li>
                    <?php endif?>
                <?php endforeach?>
            </ul>
        </main>
    </body>
</html>
