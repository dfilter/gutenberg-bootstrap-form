(() => {
  "use strict";
  const t = window.wp.blocks,
    e = window.wp.blockEditor,
    o = window.wp.components,
    s = window.ReactJSXRuntime,
    n = JSON.parse('{"UU":"gutenberg-bootstrap-form/form"}');
  (0, t.registerBlockType)(n.UU, {
    edit: function (t) {
      const {
        attributes: { formId: n, apiEndpoint: r },
        setAttributes: l,
      } = t;
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(e.InspectorControls, {
            children: (0, s.jsxs)(o.PanelBody, {
              title: "Form Info",
              children: [
                (0, s.jsx)(o.PanelRow, {
                  children: (0, s.jsx)(o.TextControl, {
                    label: "Form ID",
                    value: n,
                    onChange: (t) => l({ formId: t }),
                    help: "Id used to differentiate this form from others.",
                  }),
                }),
                (0, s.jsx)(o.PanelRow, {
                  children: (0, s.jsx)(o.TextControl, {
                    label: "Form Submit Endpoint",
                    value: r,
                    onChange: (t) => l({ apiEndpoint: t }),
                    help: "Local sites url that the api form will submit to.",
                  }),
                }),
              ],
            }),
          }),
          (0, s.jsx)("div", {
            ...(0, e.useBlockProps)(),
            children: (0, s.jsx)(e.InnerBlocks, {
              template: [
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
              ],
            }),
          }),
        ],
      });
    },
    save: function () {
      return (0, s.jsx)("div", {
        ...e.useBlockProps.save(),
        children: (0, s.jsx)(e.InnerBlocks.Content, {}),
      });
    },
  });
})();
