<?php
    $dir = getcwd();
    $f = scandir($dir);
?>
<style>
    body {
        background: url('bg.png');
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
        border-radius: 5px;
        border: 1px solid #aeaeae;
        padding: 5px 15px;
        width: auto;
        color: #005689;
        background-color: rgba(0, 100, 120, .5);
        text-decoration: none;
        transition-property: color, background-color;
        transition: .3s linear;
    }
    ol a:hover {
        background-color: rgba(0, 100, 120, .8);
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
