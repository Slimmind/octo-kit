<?php
    $dir = getcwd();
    $f = scandir($dir);
?>
<style>
    body {
        background: url('http://www.createwebquest.com/sites/default/files/images/182401_ocean-waves-wallpaper-1680x1050-tides-receded_1680x1050_0.jpg') no-repeat center center / cover;
    }
    ul {
        width: 100%;
        max-width: 480px;
        margin: 30px auto;
        padding: 0;
        list-style-type: none;
        counter-reset: pages;
    }
    ul li {
        position: relative;
        display: block;
        margin-bottom: 5px;
        padding-left: 40px;
        counter-increment: pages;
    }
    ul li:before {
    	content: counter(pages)'.';
    	position: absolute;
    	top: 50%;
    	left: 0;
    	transform: translate3d(0, -50%, 0);
    	color: #232f3f;
    	font: 700 20px/32px sans-serif;
        transition: color .7s;
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
    ul li:hover a {
        background-color: rgba(0, 100, 120, .8);
        color: #fff;
    }
    ul li:hover:before {
        color: rgba(0, 100, 120, .8);
    }
        
</style>

<ul>
    <?php foreach ($f as $file) :?>
        <?php if (preg_match('/^(?!_).*html$/', $file)) :?>
            <li style="margin-left: 20px;">
                <a href="<?php echo ($file)?>" target="_blank"><?php echo ($file)?></a>
            </li>
        <?php endif?>
    <?php endforeach?>
</ul>
