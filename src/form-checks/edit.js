/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelRow,
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	RadioControl,
} from '@wordpress/components';

import metadata from './block.json';

const formattingClassOptions = metadata.attributes.formattingClass.enum.map(
	( value ) => ( {
		value,
		label: value,
	} )
);

const controlClassOptions = [
	{ label: 'Primary', value: 'btn btn-primary' },
	{ label: 'Secondary', value: 'btn btn-secondary' },
	{ label: 'Success', value: 'btn btn-success' },
	{ label: 'Danger', value: 'btn btn-danger' },
	{ label: 'Warning', value: 'btn btn-warning' },
	{ label: 'Info', value: 'btn btn-info' },
	{ label: 'Light', value: 'btn btn-light' },
	{ label: 'Dark', value: 'btn btn-dark' },
	{ label: 'Link', value: 'btn btn-link' },
	{ label: 'Primary Outlined', value: 'btn btn-outline-primary' },
	{ label: 'Secondary Outlined', value: 'btn btn-outline-secondary' },
	{ label: 'Success Outlined', value: 'btn btn-outline-success' },
	{ label: 'Danger Outlined', value: 'btn btn-outline-danger' },
	{ label: 'Warning Outlined', value: 'btn btn-outline-warning' },
	{ label: 'Info Outlined', value: 'btn btn-outline-info' },
	{ label: 'Light Outlined', value: 'btn btn-outline-light' },
	{ label: 'Dark Outlined', value: 'btn btn-outline-dark' },
];

const typeOptions = metadata.attributes.type.enum.map( ( value ) => ( {
	value,
	label: value,
} ) );

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
	const {
		setAttributes,
		attributes: {
			wrapperClass,
			hasLabel,
			labelText,
			checked,
			disabled,
			form,
			name,
			required,
			type,
			value,
			controlClasses,
			formattingClass,
		},
	} = props;
	const blockProps = useBlockProps();
	const finalBlockProps = {
		...blockProps,
		className: `${ blockProps.className } ${ wrapperClass } ${ formattingClass }`,
	};

	const label = hasLabel && (
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label
			className={ controlClasses ? controlClasses : 'form-check-label' }
		>
			<RichText
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
				<PanelBody title="Input Attributes">
					<PanelRow>
						<ToggleControl
							label="Checked Attribute"
							checked={ checked }
							onChange={ ( _value ) =>
								setAttributes( { checked: _value } )
							}
							help="Whether the command or control is checked."
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Disabled Attribute"
							checked={ disabled }
							onChange={ ( _value ) =>
								setAttributes( { disabled: _value } )
							}
							help="Whether the form control is disabled."
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Form Attribute"
							value={ form }
							onChange={ ( _value ) =>
								setAttributes( { form: _value } )
							}
							help="Associates the control with a form element."
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Name Attribute"
							value={ name }
							onChange={ ( _value ) =>
								setAttributes( { name: _value } )
							}
							help="Name of the form control. Submitted with the form as part of a name/value pair."
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Required Attribute"
							checked={ required }
							onChange={ ( _value ) =>
								setAttributes( { required: _value } )
							}
							help="Boolean. A value is required or must be checked for the form to be submittable."
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Type Attribute"
							value={ type }
							options={ typeOptions }
							onChange={ ( _value ) =>
								setAttributes( { type: _value } )
							}
							help="Type of form control."
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Input Styling">
					<PanelRow>
						<RadioControl
							label="Input Type"
							selected={ wrapperClass }
							options={ [
								{ label: 'Regular', value: 'form-check' },
								{
									label: 'Toggle',
									value: 'form-check form-switch',
								},
								{ label: 'Button', value: '' },
							] }
							onChange={ ( _value ) => {
								if ( _value ) {
									setAttributes( {
										wrapperClass: _value,
										formattingClass: undefined,
										controlClasses: undefined,
									} );
									return;
								}
								setAttributes( {
									wrapperClass: _value,
									formattingClass: undefined,
									controlClasses:
										controlClassOptions[ 0 ].value,
								} );
							} }
						/>
					</PanelRow>
					{ wrapperClass && (
						<PanelRow>
							<SelectControl
								label="Formatting Class"
								value={ formattingClass }
								options={ formattingClassOptions }
								onChange={ ( _value ) =>
									setAttributes( {
										formattingClass: _value,
									} )
								}
							/>
						</PanelRow>
					) }
					{ ! wrapperClass && (
						<PanelRow>
							<SelectControl
								label="Button Style"
								value={ controlClasses }
								options={ controlClassOptions }
								onChange={ ( _value ) =>
									setAttributes( {
										controlClasses: _value,
									} )
								}
							/>
						</PanelRow>
					) }
				</PanelBody>
			</InspectorControls>
			<div { ...finalBlockProps }>
				<input
					className={
						controlClasses ? 'btn-check' : 'form-check-input'
					}
					type={ type ?? 'checkbox' }
					name={ name }
					value={ value }
					checked={ checked }
					onChange={ ( _value ) =>
						setAttributes( { value: _value } )
					}
				/>
				{ label }
			</div>
		</>
	);
}
