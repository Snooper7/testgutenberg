<?php
/**
 * Plugin Name: Гутенберг блоки для темы Vyatka-it-developer
 * Plugin URI: "--"
 * Description: Кастомные блоки для редактора Gutenberg, используемые в блочной теме Vyatka-it-developer
 * Author: Snooper7
 * Author URI: "--
 */

 function vyatka_it_developer_init(){
    register_block_type_from_metadata( __DIR__ );
 }
 add_action('init', 'vyatka_it_developer_init' );