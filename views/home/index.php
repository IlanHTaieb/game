<?php
    ob_start();
?>

<div class="body">
    <div class="arena"></div>
    <div class="info">
        <div class="player player_1">
            <div class="avatar"></div>
            <div class="life_line"></div>
            <div class="life">/100</div>
        </div>
        <div class="player player_2">
            <div class="avatar"></div>
            <div class="life_line"></div>
            <div class="life">/100</div>
        </div>
    </div>
</div>

<?php
    $content = ob_get_clean();
    require 'views/layout/app.php';