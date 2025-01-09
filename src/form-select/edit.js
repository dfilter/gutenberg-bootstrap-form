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
	TextControl,
	Button,
	PanelRow,
	ToggleControl,
	SelectControl,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { Icon, trash } from '@wordpress/icons';
import { useState } from '@wordpress/element';

const defaultState = { label: '', value: '' };

const sizingOptions = [
	{ label: 'Small', value: 'form-select-sm' },
	{ label: 'Regular', value: '' },
	{ label: 'Large', value: 'form-select-lg' },
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} props - component props
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: {
			autocomplete,
			autofocus,
			disabled,
			form,
			multiple,
			name,
			required,
			selectLabel,
			hasLabel,
			selectOptions,
			size,
			isFloating,
			selectSize,
		},
		setAttributes,
	} = props;
	const [ state, setState ] = useState( defaultState );

	const addOption = () => {
		setAttributes( {
			selectOptions: [ ...selectOptions, state ],
		} );
		setState( defaultState );
	};

	const setChecked = ( index ) => {
		const newOptions = [ ...selectOptions ];
		newOptions[ index ].selected = ! newOptions[ index ].selected;
		setAttributes( { selectOptions: newOptions } );
	};

	const setDefault = ( index ) => {
		const newOptions = selectOptions.map( ( option ) => ( {
			...option,
			selected: false,
		} ) );
		newOptions[ index ].selected = true;
		setAttributes( { selectOptions: newOptions } );
	};

	const onClickRemoveOption = ( index ) => {
		const newOptions = [ ...selectOptions ];
		newOptions.splice( index, 1 );
		setAttributes( { selectOptions: newOptions } );
	};

	const onToggleMultiple = ( value ) => {
		if ( ! value ) {
			setAttributes( {
				selectOptions: selectOptions.map( ( option ) => ( {
					...option,
					selected: false,
				} ) ),
			} );
		}
		setAttributes( {
			multiple: value,
		} );
	};

	const label = hasLabel && (
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label className="form-label">
			<RichText
				className="form-label"
				identifier="text"
				withoutInteractiveFormatting
				value={ selectLabel }
				onChange={ ( _value ) =>
					setAttributes( { selectLabel: _value } )
				}
			/>
		</label>
	);

	const blockProps = useBlockProps();
	const finalBlockProps = {
		...blockProps,
		className:
			blockProps.className + ( isFloating ? ' form-floating' : '' ),
	};

	const selectedOptions = selectOptions
		.filter( ( option ) => option.selected )
		.map( ( option ) => option.value );
	const defaultValue = multiple ? selectedOptions : selectedOptions[ 0 ];

	return (
		<>
			<InspectorControls>
				<PanelBody title="Select Options">
					<table className="table">
						<thead>
							<tr>
								<th>Label</th>
								<th>Value</th>
								<td>Default</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{ selectOptions.map( ( option, index ) => (
								<tr key={ index }>
									<td>{ option.label }</td>
									<td>{ option.value }</td>
									<td>
										<input
											type={
												multiple ? 'checkbox' : 'radio'
											}
											name="selected"
											checked={ option.selected }
											onChange={ () =>
												multiple
													? setChecked( index )
													: setDefault( index )
											}
										/>
									</td>
									<td>
										<Button
											type="button"
											onClick={ () =>
												onClickRemoveOption( index )
											}
										>
											<Icon icon={ trash } />
										</Button>
									</td>
								</tr>
							) ) }
							<tr>
								<td>
									<TextControl
										value={ state.label }
										onChange={ ( _label ) =>
											setState( {
												...state,
												label: _label,
											} )
										}
									/>
								</td>
								<td>
									<TextControl
										value={ state.value }
										onChange={ ( value ) =>
											setState( { ...state, value } )
										}
									/>
								</td>
								<td>
									<Button type="button" onClick={ addOption }>
										Add
									</Button>
								</td>
							</tr>
						</tbody>
					</table>
				</PanelBody>
				<PanelBody title="Select Attributes">
					<PanelRow>
						<ToggleControl
							label="Autocomplete Attribute"
							checked={ autocomplete }
							onChange={ ( _value ) =>
								setAttributes( { autocomplete: _value } )
							}
							help="A string providing a hint for a user agent's autocomplete feature. See The HTML autocomplete attribute for a complete list of values and details on how to use autocomplete."
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Autofocus Attribute"
							checked={ autofocus }
							onChange={ ( _value ) =>
								setAttributes( { autofocus: _value } )
							}
							help="This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the autofocus attribute."
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Disabled Attribute"
							checked={ disabled }
							onChange={ ( _value ) =>
								setAttributes( { disabled: _value } )
							}
							help="This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled."
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Form Attribute"
							value={ form }
							onChange={ ( _value ) =>
								setAttributes( { form: _value } )
							}
							help="The <form> element to associate the <select> with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <select> is associated with its ancestor <form> element, if any.) This attribute lets you associate <select> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element."
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Multiple Attribute"
							checked={ multiple }
							onChange={ onToggleMultiple }
							help="This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When multiple is specified, most browsers will show a scrolling list box instead of a single line dropdown."
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Name Attribute"
							value={ name }
							onChange={ ( _value ) =>
								setAttributes( { name: _value } )
							}
							help="This attribute is used to specify the name of the control."
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Required Attribute"
							checked={ required }
							onChange={ ( _value ) =>
								setAttributes( { required: _value } )
							}
							help="A Boolean attribute indicating that an option with a non-empty string value must be selected."
						/>
					</PanelRow>
					{ multiple && (
						<PanelRow>
							<NumberControl
								label="Size Attribute"
								min={ 0 }
								value={ size }
								onChange={ ( _value ) =>
									setAttributes( { size: _value } )
								}
								help="If the control is presented as a scrolling list box (e.g. when multiple is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0."
							/>
						</PanelRow>
					) }
				</PanelBody>
				<PanelBody title="Select Styling">
					<PanelRow>
						<SelectControl
							label="Select Size"
							value={ selectSize ?? '' }
							options={ sizingOptions }
							onChange={ ( value ) =>
								setAttributes( {
									selectSize: value,
								} )
							}
							help="Regular by default"
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Has label"
							checked={ hasLabel }
							onChange={ ( _value ) =>
								setAttributes( {
									hasLabel: _value,
									selectLabel: undefined,
									isFloating: false,
								} )
							}
							help="Should a label be rendered."
						/>
					</PanelRow>
					{ hasLabel && (
						<PanelRow>
							<ToggleControl
								label="Floating label"
								checked={ isFloating }
								onChange={ ( _value ) =>
									setAttributes( { isFloating: _value } )
								}
								help="Label will appear within the select control box."
							/>
						</PanelRow>
					) }
				</PanelBody>
			</InspectorControls>
			<div { ...finalBlockProps }>
				{ ! isFloating && label }
				<select
					multiple={ multiple }
					size={ size }
					disabled={ disabled }
					className={ `form-select ${ selectSize }` }
					defaultValue={ defaultValue }
				>
					{ selectOptions.map( ( option, index ) => (
						<option key={ index } value={ option.value }>
							{ option.label }
						</option>
					) ) }
				</select>
				{ isFloating && label }
			</div>
		</>
	);
}
