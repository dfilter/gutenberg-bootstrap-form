<?php
/**
 * Plugin Name:       Gutenberg Bootstrap Form
 * Description:       Plugin containing blocks to construct a form.
 * Version:           0.1.6
 * Requires at least: 6.5
 * Requires PHP:      8.1
 * Author:            Dirk Filter
 *
 * @package          gutenberg-bootstrap-form  
 */

defined( 'ABSPATH' ) || exit;

define( 'GB_BS_FORM_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'GB_BS_FORM_PATH_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );

function init() {
	define( 'GB_BS_FORM_NONCE', wp_create_nonce( 'wp_rest' ) );

	register_block_type_from_metadata( GB_BS_FORM_PATH . 'build/form' );
	register_block_type_from_metadata( GB_BS_FORM_PATH . 'build/form-checks' );
	register_block_type_from_metadata( GB_BS_FORM_PATH . 'build/form-control' );
	register_block_type_from_metadata( GB_BS_FORM_PATH . 'build/form-select' );
}
add_action( 'init', 'init' );
