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

$block_attributes = get_block_wrapper_attributes(
	array( 'class' => 'form-check' . $attributes['controlType'] )
);

?>
<div <?php echo wp_kses_data( $block_attributes ); ?>>
	<?php echo do_blocks( $content ); // phpcs:ignore ?>
</div>
