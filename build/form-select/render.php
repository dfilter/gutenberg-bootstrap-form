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

if ( ! $attributes['selectOptions'] || ! is_array( $attributes['selectOptions'] ) ) {
	return;
}
?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => $attributes['isFloating'] ? 'form-floating' : '' ) ) ); ?>>
	<?php if ( ! $attributes['isFloating'] && $attributes['hasLabel'] ) : ?>
		<label class="form-label"><?php echo esc_html( $attributes['selectLabel'] ); ?></label>
	<?php endif; ?>
	<select
		<?php echo generate_attributes( $attributes ); // phpcs:ignore ?>
		class="form-select <?php echo esc_attr( $attributes['selectSize'] ); ?>"
	>
		<?php foreach ( $attributes['selectOptions'] as ['label' => $label, 'value' => $value, 'selected' => $selected] ) : ?>
			<option value="<?php echo esc_attr( $value ); ?>" <?php echo $selected ? 'selected' : ''; ?>>
				<?php echo esc_html( $label ); ?>
			</option>
		<?php endforeach; ?>
	</select>
	<?php if ( $attributes['isFloating'] && $attributes['hasLabel'] ) : ?>
		<label class="form-label"><?php echo esc_html( $attributes['selectLabel'] ); ?></label>
	<?php endif; ?>
</div>
