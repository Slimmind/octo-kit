<?php
    $dir = getcwd();
    $f = scandir($dir);
?>
<style>
    body {
        background: url('http://www.createwebquest.com/sites/default/files/images/182401_ocean-waves-wallpaper-1680x1050-tides-receded_1680x1050_0.jpg') no-repeat center center / cover;
    }
    ol {
        width: 100%;
        max-width: 480px;
        margin: 30px auto;
        padding: 0;
        list-style-type: decimal;
    }
    ol li {
        display: block;
        margin-bottom: 5px;
    }
    ol a {
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
        transition-property: border-color, background-color;
        transition: .3s ease;
    }
    ol a:hover {
        background-color: rgba(0, 100, 120, .8);
        border-color: #399c3f;
        color: #fff;
    }
        
</style>

<ol>
    <?php foreach ($f as $file) :?>
        <?php if (preg_match('/^(?!_).*html$/', $file)) :?>
            <li style="margin-left: 20px;">
                <a href="<?php echo ($file)?>" target="_blank"><?php echo ($file)?></a>
            </li>
        <?php endif?>
    <?php endforeach?>
</ol>
