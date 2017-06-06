<?php
    $dir = getcwd();
    $f = scandir($dir);
?>
<style>
    body {
        background: url('https://cdn.dribbble.com/users/162759/screenshots/2680829/underthesea_1x.jpg');
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
        border-radius: 20px;
        border: 4px solid #fff;
        padding: 5px 15px;
        width: auto;
        color: #fff;
        background-color: #1DB6BB;
        text-decoration: none;
        transition-property: border-color, background-color;
        transition: .3s ease;
    }
    ol a:hover {
        background-color: rgba(0, 100, 120, .8);
        border-color: #1DB6BB;
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
