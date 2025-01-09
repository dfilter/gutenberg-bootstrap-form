/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} props
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	let blockProps = useBlockProps();
	const {
		attributes: {
			autocapitalize,
			autocomplete,
			autocorrect,
			autofocus,
			cols,
			disabled,
			form,
			hasLabel,
			isFloating,
			labelText,
			maxlength,
			minlength,
			name,
			placeholder,
			readonly,
			required,
			rows,
			spellcheck,
			wrap,
			defaultText,
		},
		setAttributes,
	} = props;

	if ( isFloating ) {
		blockProps = {
			...blockProps,
			className: blockProps.className + ' form-floating',
		};
	}

	const label = hasLabel && (
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label className="form-label">
			<RichText
				className="form-label"
				identifier="text"
				withoutInteractiveFormatting
				value={ labelText }
				onChange={ ( _value ) =>
					setAttributes( { labelText: _value } )
				}
			/>
		</label>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Textarea Attributes">
					<PanelRow>
						<ToggleControl
							label="Autocapitalize Attributes"
							checked={ autocapitalize }
							onChange={ ( value ) =>
								setAttributes( { autocapitalize: value } )
							}
							help="Controls whether inputted text is automatically capitalized and, if so, in what manner."
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label="Autocomplete Attribute"
							selected={ autocomplete }
							options={ [
								{ label: 'Default', value: undefined },
								{ label: 'Off', value: 'off' },
								{ label: 'On', value: 'on' },
							] }
							onChange={ ( value ) =>
								setAttributes( { autocomplete: value } )
							}
							help="Controls whether entered text can be automatically completed by the browser."
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label="Autocorrect Attribute"
							selected={ autocorrect }
							options={ [
								{ label: 'Default', value: undefined },
								{ label: 'Off', value: 'off' },
								{ label: 'On', value: 'on' },
							] }
							onChange={ ( value ) =>
								setAttributes( { autocorrect: value } )
							}
							help="Controls whether automatic spelling correction and processing of text is enabled while the user is editing this textarea."
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Autofocus Attributes"
							checked={ autofocus }
							onChange={ ( value ) =>
								setAttributes( { autofocus: value } )
							}
							help="This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified."
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				{ ! isFloating && label }
				<RichText
					autoCapitalize={ autocapitalize }
					autoComplete={ autocomplete }
					autoCorrect={ autocorrect }
					cols={ cols }
					disabled={ disabled }
					form={ form }
					maxLength={ maxlength }
					minLength={ minlength }
					name={ name }
					placeholder={ placeholder }
					readOnly={ readonly }
					required={ required }
					rows={ rows }
					spellCheck={ spellcheck }
					wrap={ wrap }
					value={ defaultText }
					onChange={ ( value ) =>
						setAttributes( { defaultText: value } )
					}
					className="form-control"
				></RichText>
				{ isFloating && label }
			</div>
		</>
	);
}
