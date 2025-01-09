/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl,
	SelectControl,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { upperFirst } from 'lodash-es';

import metadata from './block.json';

const inputTypeOptions = metadata.attributes.type.enum.map( ( value ) => ( {
	label: upperFirst( value ),
	value,
} ) );

const inputSize = [
	{ label: 'Small', value: 'form-control-sm' },
	{ label: 'Regular', value: '' },
	{ label: 'Large', value: 'form-control-lg' },
];
const buttonSizes = [
	{ label: 'Small', value: 'btn-sm' },
	{ label: 'Regular', value: '' },
	{ label: 'Large', value: 'btn-lg' },
];
const buttonVariants = [
	{ label: 'Primary', value: 'btn btn-primary' },
	{ label: 'Secondary', value: 'btn btn-secondary' },
	{ label: 'Success', value: 'btn btn-success' },
	{ label: 'Danger', value: 'btn btn-danger' },
	{ label: 'Warning', value: 'btn btn-warning' },
	{ label: 'Info', value: 'btn btn-info' },
	{ label: 'Light', value: 'btn btn-light' },
	{ label: 'Dark', value: 'btn btn-dark' },
	{ label: 'Link', value: 'btn btn-link' },
	{ value: 'btn btn-outline-primary', label: 'Primary Outlined' },
	{ value: 'btn btn-outline-secondary', label: 'Secondary Outlined' },
	{ value: 'btn btn-outline-success', label: 'Success Outlined' },
	{ value: 'btn btn-outline-danger', label: 'Danger Outlined' },
	{ value: 'btn btn-outline-warning', label: 'Warning Outlined' },
	{ value: 'btn btn-outline-info', label: 'Info Outlined' },
	{ value: 'btn btn-outline-light', label: 'Light Outlined' },
	{ value: 'btn btn-outline-dark', label: 'Dark Outlined' },
];
const formenctypeOptions = metadata.attributes.formenctype.enum.map(
	( value ) => ( { label: value, value } )
);
const formmethodOptions = metadata.attributes.formmethod.enum.map(
	( value ) => ( { label: value, value } )
);
const formtargetOptions = metadata.attributes.formtarget.enum.map(
	( value ) => ( { label: value, value } )
);

const readonlyNonApplicableTypes = [
	'checkbox',
	'color',
	'hidden',
	'radio',
	'range',
];
const minmaxApplicableTypes = [
	'date',
	'datetime-local',
	'month',
	'time',
	'week',
];
const minmaxLengthApplicableTypes = [
	'email',
	'password',
	'search',
	'tel',
	'text',
	'url',
];
const patternApplicableTypes = [
	'email',
	'password',
	'search',
	'tel',
	'text',
	'url',
];
const placeholderApplicableTypes = [
	'email',
	'number',
	'password',
	'search',
	'tel',
	'text',
	'url',
];
const rangeNonApplicableTypes = [ 'hidden', 'range', 'color' ];
const stepApplicableTypes = [
	'date',
	'datetime-local',
	'month',
	'number',
	'range',
	'time',
	'week',
];
const autocapitalizeNonApplicableTypes = [ 'url', 'email', 'password' ];
const minmaxNumericTypes = [ 'number', 'range' ];
const sizeNonApplicableTypes = [ 'submit', 'reset', 'range' ];
const buttonTypes = [ 'submit', 'reset', 'button' ];

const labelStyles = {
	fontSize: '11px',
	fontWeight: 500,
	lineHeight: 1.4,
	textTransform: 'uppercase',
	display: 'block',
	marginBottom: 'calc(8px)',
	padding: '0px',
};

const baseControlStyle = {
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
	fontSize: '13px',
	boxSizing: 'border-box',
};

const baseFieldStyle = {
	marginBottom: 'inherit',
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
	fontSize: '13px',
	boxSizing: 'border-box',
};

const helpStyles = {
	color: 'rgb(158, 150, 137)',
	marginTop: 'calc(8px)',
	fontSize: '12px',
	fontStyle: 'normal',
	marginBottom: 'revert',
};

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} props
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const blockProps = useBlockProps();
	const {
		attributes: {
			autocapitalize,
			autocomplete,
			buttonClass,
			buttonSizeClass,
			controlClass,
			controlSizeClass,
			dirname,
			disabled,
			form,
			formaction,
			formenctype,
			formmethod,
			formnovalidate,
			formtarget,
			hasLabel,
			isFloating,
			labelText,
			max,
			maxlength,
			min,
			minlength,
			multiple,
			name,
			pattern,
			placeholder,
			readonly,
			required,
			step,
			type,
			value,
		},
		setAttributes,
	} = props;

	const onChangeTypeReset = ( newType ) => {
		let newClass;
		let additionalAttrs = {
			buttonClass: undefined,
			buttonSizeClass: undefined,
		};
		if ( newType === 'range' ) {
			newClass = 'form-range';
		} else if ( newType === 'color' ) {
			newClass = 'form-control form-control-color';
		} else if ( newType === 'reset' ) {
			newClass = undefined;
			additionalAttrs = {
				buttonClass: 'btn btn-secondary',
				buttonSizeClass: undefined,
			};
		} else if ( newType === 'submit' ) {
			newClass = undefined;
			additionalAttrs = {
				buttonClass: 'btn btn-primary',
				buttonSizeClass: undefined,
			};
		} else {
			newClass = 'form-control';
		}

		setAttributes( {
			...additionalAttrs,
			autocapitalize: undefined,
			autocomplete: undefined,
			controlClass: newClass,
			dirname: undefined,
			form: undefined,
			formaction: undefined,
			formenctype: undefined,
			formmethod: undefined,
			formnovalidate: undefined,
			formtarget: undefined,
			max: undefined,
			maxlength: undefined,
			min: undefined,
			minlength: undefined,
			multiple: undefined,
			pattern: undefined,
			placeholder: undefined,
			readonly: undefined,
			required: undefined,
			step: undefined,
			type: newType,
		} );
	};

	const classes = [
		controlClass,
		controlSizeClass,
		buttonClass,
		buttonSizeClass,
		disabled ? 'disabled' : '',
	]
		.filter( Boolean )
		.join( ' ' );

	const label = hasLabel &&
		! buttonTypes.includes( type ) &&
		type !== 'hidden' && (
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

	const finalBlockProps = {
		...blockProps,
		className:
			blockProps.className + ( isFloating ? ' form-floating' : '' ),
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Input Type and Attributes">
					<PanelRow>
						<SelectControl
							label="Input Type Attribute"
							value={ type }
							options={ inputTypeOptions }
							onChange={ onChangeTypeReset }
							help="Type of form control"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Name Attribute"
							value={ name }
							onChange={ ( _value ) =>
								setAttributes( { name: _value } )
							}
							help="Name of the form control. Submitted with the form as part of a name/value pair"
						/>
					</PanelRow>
					{ ! autocapitalizeNonApplicableTypes.includes( type ) && (
						<PanelRow>
							<ToggleControl
								label="Autocapitalize Attribute"
								checked={ autocapitalize }
								onChange={ ( _value ) =>
									setAttributes( { autocapitalize: _value } )
								}
								help="Controls automatic capitalization in inputted text."
							/>
						</PanelRow>
					) }
					<PanelRow>
						<ToggleControl
							label="Autocomplete Attribute"
							checked={ autocomplete }
							onChange={ ( _value ) =>
								setAttributes( { autocomplete: _value } )
							}
							help="Hint for form autofill feature"
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Dirname Attribute"
							checked={ dirname }
							onChange={ ( _value ) =>
								setAttributes( { dirname: _value } )
							}
							help="Name of form field to use for sending the element's directionality in form submission"
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Disabled"
							checked={ disabled }
							onChange={ ( _value ) =>
								setAttributes( {
									disabled: _value,
								} )
							}
							help="Whether the form control is disabled"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Form Attribute"
							value={ form }
							onChange={ ( _value ) =>
								setAttributes( { form: _value } )
							}
							help="Associates the control with a form element"
						/>
					</PanelRow>
					{ type === 'submit' && (
						<>
							<PanelRow>
								<TextControl
									label="Form Attribute"
									value={ formaction }
									onChange={ ( _value ) =>
										setAttributes( { formaction: _value } )
									}
									help="URL to use for form submission"
								/>
							</PanelRow>
							<PanelRow>
								<SelectControl
									label="Form Encryption Type Attribute"
									value={ formenctype }
									options={ formenctypeOptions }
									onChange={ ( newFormenctype ) =>
										setAttributes( {
											formenctype: newFormenctype,
										} )
									}
									help="Form data set encoding type to use for form submission"
								/>
							</PanelRow>
							<PanelRow>
								<SelectControl
									label="Form Method Attribute"
									value={ formmethod }
									options={ formmethodOptions }
									onChange={ ( newFormmethod ) =>
										setAttributes( {
											formmethod: newFormmethod,
										} )
									}
									help="HTTP method to use for form submission"
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label="Form No Validate Attribute"
									value={ formnovalidate }
									onChange={ ( newFormnovalidate ) =>
										setAttributes( {
											formnovalidate: newFormnovalidate,
										} )
									}
									help="Bypass form control validation for form submission"
								/>
							</PanelRow>
							<PanelRow>
								<SelectControl
									label="Form Method Attribute"
									value={ formtarget }
									options={ formtargetOptions }
									onChange={ ( newFormtarget ) =>
										setAttributes( {
											formtarget: newFormtarget,
										} )
									}
									help="Browsing context for form submission"
								/>
							</PanelRow>
						</>
					) }
					{ type === 'email' && (
						<PanelRow>
							<ToggleControl
								label="Multiple Attribute"
								value={ multiple }
								onChange={ ( newMultiple ) =>
									setAttributes( {
										multiple: newMultiple,
									} )
								}
								help="Boolean. Whether to allow multiple values"
							/>
						</PanelRow>
					) }
					{ minmaxNumericTypes.includes( type ) && (
						<>
							<PanelRow>
								<NumberControl
									label="Max Attribute"
									value={ max }
									onChange={ ( _value ) =>
										setAttributes( { max: _value } )
									}
									help="Maximum value"
								/>
							</PanelRow>
							<PanelRow>
								<NumberControl
									label="Min Attribute"
									value={ min }
									onChange={ ( _value ) =>
										setAttributes( { min: _value } )
									}
									help="Minimum value"
								/>
							</PanelRow>
						</>
					) }
					{ minmaxApplicableTypes.includes( type ) && (
						<>
							<PanelRow>
								<div
									className="components-base-control"
									style={ baseControlStyle }
								>
									<div
										className="components-base-control__field"
										style={ baseFieldStyle }
									>
										<label
											className="components-base-control__label"
											style={ labelStyles }
											htmlFor="ml-max"
										>
											{ upperFirst( type ) } Max
										</label>
										<input
											id="ml-max"
											className="components-text-control__input"
											type={ type }
											value={ max }
											onChange={ ( event ) =>
												setAttributes( {
													max: event.target.value,
												} )
											}
										/>
										<p
											className="components-base-control__help"
											style={ helpStyles }
										>
											Maximum length (number of
											characters) of value
										</p>
									</div>
								</div>
							</PanelRow>
							<PanelRow>
								<div
									className="components-base-control"
									style={ baseControlStyle }
								>
									<div
										className="components-base-control__field"
										style={ baseFieldStyle }
									>
										<label
											className="components-base-control__label"
											style={ labelStyles }
											htmlFor="ml-min"
										>
											{ upperFirst( type ) } Min
										</label>
										<input
											id="ml-min"
											className="components-text-control__input"
											type={ type }
											value={ min }
											onChange={ ( event ) =>
												setAttributes( {
													min: event.target.value,
												} )
											}
										/>
										<p
											className="components-base-control__help"
											style={ helpStyles }
										>
											Minimum length (number of
											characters) of value
										</p>
									</div>
								</div>
							</PanelRow>
						</>
					) }
					{ minmaxLengthApplicableTypes.includes( type ) && (
						<>
							<PanelRow>
								<NumberControl
									label="Max Length Attribute"
									value={ maxlength }
									onChange={ ( _value ) =>
										setAttributes( { maxlength: _value } )
									}
									help="Maximum length (number of characters) of value"
								/>
							</PanelRow>
							<PanelRow>
								<NumberControl
									label="Min Length Attribute"
									value={ minlength }
									onChange={ ( _value ) =>
										setAttributes( { minlength: _value } )
									}
									help="Minimum length (number of characters) of value"
								/>
							</PanelRow>
						</>
					) }
					{ patternApplicableTypes.includes( type ) && (
						<PanelRow>
							<TextControl
								label="Pattern Attribute"
								value={ pattern }
								onChange={ ( _value ) =>
									setAttributes( { pattern: _value } )
								}
								help="Pattern the value must match to be valid"
							/>
						</PanelRow>
					) }
					{ placeholderApplicableTypes.includes( type ) && (
						<PanelRow>
							<TextControl
								label="Placeholder Attribute"
								value={ placeholder }
								onChange={ ( _value ) =>
									setAttributes( { placeholder: _value } )
								}
								help="Text that appears in the form control when it has no value set"
							/>
						</PanelRow>
					) }
					{ ! rangeNonApplicableTypes.includes( type ) && (
						<PanelRow>
							<ToggleControl
								label="Required Attribute"
								checked={ required }
								onChange={ ( _value ) =>
									setAttributes( { required: _value } )
								}
								help="Boolean. A value is required or must be checked for the form to be submittable"
							/>
						</PanelRow>
					) }
					{ ! readonlyNonApplicableTypes.includes( type ) && (
						<PanelRow>
							<ToggleControl
								label="Readonly Attribute"
								checked={ readonly }
								onChange={ ( _value ) =>
									setAttributes( { readonly: _value } )
								}
								help="Boolean. The value is not editable"
							/>
						</PanelRow>
					) }
					{ stepApplicableTypes.includes( type ) && (
						<PanelRow>
							<NumberControl
								label="Step Attribute"
								value={ step }
								onChange={ ( _value ) =>
									setAttributes( { step: _value } )
								}
								help="Incremental values that are valid"
							/>
						</PanelRow>
					) }
				</PanelBody>
				<PanelBody title="Form Control Styling">
					{ ! sizeNonApplicableTypes.includes( type ) && (
						<PanelRow>
							<SelectControl
								label="Input Size"
								value={ controlSizeClass }
								options={ inputSize }
								onChange={ ( size ) =>
									setAttributes( {
										controlSizeClass: size,
									} )
								}
								help="Regular by default"
							/>
						</PanelRow>
					) }
					{ buttonTypes.includes( type ) && (
						<>
							<PanelRow>
								<SelectControl
									label="Button Variant"
									value={ buttonClass }
									options={ buttonVariants }
									onChange={ ( variant ) =>
										setAttributes( {
											buttonClass: variant,
										} )
									}
									help="Color and style of the button."
								/>
							</PanelRow>
							<PanelRow>
								<SelectControl
									label="Button Size"
									value={ buttonSizeClass }
									options={ buttonSizes }
									onChange={ ( size ) =>
										setAttributes( {
											buttonSizeClass: size,
										} )
									}
									help="Size of the button, regular by default."
								/>
							</PanelRow>
						</>
					) }
					<PanelRow>
						<ToggleControl
							label="Floating Input"
							checked={ isFloating }
							onChange={ ( _value ) =>
								setAttributes( {
									isFloating: _value,
								} )
							}
							help="Places the label within the form control."
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Has Label"
							checked={ hasLabel }
							onChange={ ( _value ) =>
								setAttributes( {
									hasLabel: _value,
									labelText: _value ? labelText : undefined,
								} )
							}
							help="Should a label be displayed for the form control?"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...finalBlockProps }>
				{ ! isFloating && label }
				<input
					type={ type === 'hidden' ? 'text' : type }
					style={
						sizeNonApplicableTypes.includes( type )
							? undefined
							: { width: 'calc(100% - 26px)' }
					}
					value={ value }
					disabled={ disabled }
					placeholder={ placeholder }
					min={ min }
					max={ max }
					minLength={ minlength }
					maxLength={ maxlength }
					step={ step }
					pattern={ pattern }
					className={ classes }
					onChange={ ( event ) =>
						setAttributes( { value: event.target.value } )
					}
				/>
				{ isFloating && label }
			</div>
		</>
	);
}
