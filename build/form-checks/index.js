(() => {
  "use strict";
  const e = window.wp.blocks,
    l = window.wp.blockEditor,
    t = window.wp.components,
    n = JSON.parse(
      '{"UU":"gutenberg-bootstrap-form/form-checks","uK":{"qV":{"k5":["","form-check-inline","form-check-reverse"]},"NW":{"k5":["checkbox","radio"]}}}'
    ),
    a = window.ReactJSXRuntime,
    o = n.uK.qV.k5.map((e) => ({ value: e, label: e })),
    r = [
      { label: "Primary", value: "btn btn-primary" },
      { label: "Secondary", value: "btn btn-secondary" },
      { label: "Success", value: "btn btn-success" },
      { label: "Danger", value: "btn btn-danger" },
      { label: "Warning", value: "btn btn-warning" },
      { label: "Info", value: "btn btn-info" },
      { label: "Light", value: "btn btn-light" },
      { label: "Dark", value: "btn btn-dark" },
      { label: "Link", value: "btn btn-link" },
      { label: "Primary Outlined", value: "btn btn-outline-primary" },
      { label: "Secondary Outlined", value: "btn btn-outline-secondary" },
      { label: "Success Outlined", value: "btn btn-outline-success" },
      { label: "Danger Outlined", value: "btn btn-outline-danger" },
      { label: "Warning Outlined", value: "btn btn-outline-warning" },
      { label: "Info Outlined", value: "btn btn-outline-info" },
      { label: "Light Outlined", value: "btn btn-outline-light" },
      { label: "Dark Outlined", value: "btn btn-outline-dark" },
    ],
    s = n.uK.NW.k5.map((e) => ({ value: e, label: e }));
  (0, e.registerBlockType)(n.UU, {
    edit: function (e) {
      const {
          setAttributes: n,
          attributes: {
            wrapperClass: i,
            hasLabel: c,
            labelText: b,
            checked: u,
            disabled: h,
            form: d,
            name: m,
            required: g,
            type: p,
            value: v,
            controlClasses: k,
            formattingClass: x,
          },
        } = e,
        C = (0, l.useBlockProps)(),
        f = { ...C, className: `${C.className} ${i} ${x}` },
        w =
          c &&
          (0, a.jsx)("label", {
            className: k || "form-check-label",
            children: (0, a.jsx)(l.RichText, {
              identifier: "text",
              withoutInteractiveFormatting: !0,
              value: b,
              onChange: (e) => n({ labelText: e }),
            }),
          });
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsxs)(l.InspectorControls, {
            children: [
              (0, a.jsxs)(t.PanelBody, {
                title: "Input Attributes",
                children: [
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.ToggleControl, {
                      label: "Checked Attribute",
                      checked: u,
                      onChange: (e) => n({ checked: e }),
                      help: "Whether the command or control is checked.",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.ToggleControl, {
                      label: "Disabled Attribute",
                      checked: h,
                      onChange: (e) => n({ disabled: e }),
                      help: "Whether the form control is disabled.",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.TextControl, {
                      label: "Form Attribute",
                      value: d,
                      onChange: (e) => n({ form: e }),
                      help: "Associates the control with a form element.",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.TextControl, {
                      label: "Name Attribute",
                      value: m,
                      onChange: (e) => n({ name: e }),
                      help: "Name of the form control. Submitted with the form as part of a name/value pair.",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.ToggleControl, {
                      label: "Required Attribute",
                      checked: g,
                      onChange: (e) => n({ required: e }),
                      help: "Boolean. A value is required or must be checked for the form to be submittable.",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.SelectControl, {
                      label: "Type Attribute",
                      value: p,
                      options: s,
                      onChange: (e) => n({ type: e }),
                      help: "Type of form control.",
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(t.PanelBody, {
                title: "Input Styling",
                children: [
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.RadioControl, {
                      label: "Input Type",
                      selected: i,
                      options: [
                        { label: "Regular", value: "form-check" },
                        { label: "Toggle", value: "form-check form-switch" },
                        { label: "Button", value: "" },
                      ],
                      onChange: (e) => {
                        n(
                          e
                            ? {
                                wrapperClass: e,
                                formattingClass: void 0,
                                controlClasses: void 0,
                              }
                            : {
                                wrapperClass: e,
                                formattingClass: void 0,
                                controlClasses: r[0].value,
                              }
                        );
                      },
                    }),
                  }),
                  i &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.SelectControl, {
                        label: "Formatting Class",
                        value: x,
                        options: o,
                        onChange: (e) => n({ formattingClass: e }),
                      }),
                    }),
                  !i &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.SelectControl, {
                        label: "Button Style",
                        value: k,
                        options: r,
                        onChange: (e) => n({ controlClasses: e }),
                      }),
                    }),
                ],
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            ...f,
            children: [
              (0, a.jsx)("input", {
                className: k ? "btn-check" : "form-check-input",
                type: null != p ? p : "checkbox",
                name: m,
                value: v,
                checked: u,
                onChange: (e) => n({ value: e }),
              }),
              w,
            ],
          }),
        ],
      });
    },
  });
})();
