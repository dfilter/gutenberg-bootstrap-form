/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} props
 * @return {Element} Element to render.
 */
export default function Edit(props) {
  const {
    attributes: { formId, apiEndpoint },
    setAttributes,
  } = props;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Form Info">
          <PanelRow>
            <TextControl
              label="Form ID"
              value={formId}
              onChange={(value) => setAttributes({ formId: value })}
              help="Id used to differentiate this form from others."
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Form Submit Endpoint"
              value={apiEndpoint}
              onChange={(value) => setAttributes({ apiEndpoint: value })}
              help="Local sites url that the api form will submit to."
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <InnerBlocks
          template={[
            [
              "core/group",
              {
                style: {
                  spacing: {
                    padding: {
                      top: "var:preset|spacing|20",
                      bottom: "var:preset|spacing|20",
                    },
                  },
                },
                layout: { type: "flex", flexWrap: "wrap" },
              },
              [
                [
                  "gutenberg-bootstrap-form/form-control",
                  {
                    buttonSizeClass: "",
                    buttonClass: "btn btn-primary",
                    type: "submit",
                    value: "Submit",
                  },
                ],
                [
                  "gutenberg-bootstrap-form/form-control",
                  {
                    buttonSizeClass: "",
                    buttonClass: "btn btn-secondary",
                    type: "reset",
                    value: "Reset",
                  },
                ],
              ],
            ],
          ]}
        />
      </div>
    </>
  );
}
