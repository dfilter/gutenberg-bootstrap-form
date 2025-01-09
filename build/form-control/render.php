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

/**
 * Requirements
 */
require_once GB_BS_FORM_PATH . 'includes/generate-attributes.php';

$control_class      = isset( $attributes['controlClass'] ) ? $attributes['controlClass'] : '';
$control_size_class = isset( $attributes['controlSizeClass'] ) ? $attributes['controlSizeClass'] : '';
$button_class       = isset( $attributes['buttonClass'] ) ? $attributes['buttonClass'] : '';
$button_size_class  = isset( $attributes['buttonSizeClass'] ) ? $attributes['buttonSizeClass'] : '';
$disabled           = isset( $attributes['disabled'] ) ? 'disabled' : '';
$classes            = array( $attributes['controlClass'] );

$classes = implode(
	' ',
	array_filter(
		array(
			$control_class,
			$control_size_class,
			$button_class,
			$button_size_class,
			$attributes['disabled'] ? 'disabled' : '',
		),
		function ( $value ) {
			return (bool) $value;
		}
	)
);
$style   = in_array( $attributes['type'], array( 'submit', 'reset', 'range' ), true )
	? ''
	: 'width: calc(100% - 26px);';

?>
<div
	<?php
	echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => $attributes['isFloating'] ? 'form-floating' : '' ) ) );
	?>
>
	<?php if ( $attributes['hasLabel'] ) : ?>
		<label class="form-label"><?php echo esc_html( $attributes['labelText'] ); ?></label>
	<?php endif; ?>
	<input
		style="<?php echo esc_attr( $style ); ?>"
		class="<?php echo esc_attr( $classes ); ?>"
		<?php echo generate_attributes( $attributes ); // phpcs:ignore ?>
	>
</div>
