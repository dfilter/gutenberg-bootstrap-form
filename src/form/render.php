<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @var array    $attributes The block attributes.
 * @var string   $content    The block default content.
 * @var WP_Block $block      The block instance.
 *
 * @package gutenberg-bootstrap-form
 */

$context = array(
	'alertMessage' => null,
	'alertClass'   => null,
);

wp_interactivity_config(
	$block->name,
	array(
		...$attributes,
		...$block->context,
	)
);

$state = array(
	'restUrl'             => rest_url(),
	'nonce'               => GB_BS_FORM_NONCE,
	$attributes['formId'] => array(),
);
wp_interactivity_state( $block->name, $state );
?>
<div
	<?php
	echo wp_kses_data( get_block_wrapper_attributes() );
	echo wp_kses_data( wp_interactivity_data_wp_context( $context, $block->name ) );
	?>
	data-wp-interactive="<?php echo esc_attr( $block->name ); ?>"
>
	<div
		role="alert"
		data-wp-bind--class="context.alertClass"
		data-wp-bind--hidden="!context.alertMessage"
		data-wp-text="context.alertMessage"
	></div>
	<form id="<?php echo esc_attr( $attributes['formId'] ); ?>" data-wp-on--submit="actions.submit">
		<?php echo do_blocks( $content ); // phpcs:ignore ?>
	</form>
</div>
