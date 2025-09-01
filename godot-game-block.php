<?php
/**
 * Plugin Name:       Godot Game Block - AAG
 * Plugin URI:        https://example.com/godot-game-block/
 * Description:       A WordPress plugin block to embed a Godot WebAssembly game.
 * Version:           1.0.0
 * Author:            Andre Gagnon
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       godot-game-block
 *
 * @package           create-block
 */

function godot_game_block_init() {
    register_block_type( __DIR__ . '/build/block.json' );
}
add_action( 'init', 'godot_game_block_init' );
