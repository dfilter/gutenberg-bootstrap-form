(() => {
  "use strict";
  const e = window.wp.blocks,
    l = window.wp.blockEditor,
    t = window.wp.components,
    n = window.lodash,
    o = JSON.parse(
      '{"UU":"gutenberg-bootstrap-form/form-control","uK":{"NW":{"k5":["color","date","datetime-local","email","hidden","month","number","password","range","tel","text","time","url","week","submit","reset"]},"$5":{"k":["","application/x-www-form-urlencoded","multipart/form-data","text/plain"]},"oI":{"k":["","get","post","dialog"]},"kw":{"k":["","_self","_blank","_parent","_top"]}}}'
    ),
    a = window.ReactJSXRuntime,
    r = o.uK.NW.k5.map((e) => ({ label: (0, n.upperFirst)(e), value: e })),
    i = [
      { label: "Small", value: "form-control-sm" },
      { label: "Regular", value: "" },
      { label: "Large", value: "form-control-lg" },
    ],
    s = [
      { label: "Small", value: "btn-sm" },
      { label: "Regular", value: "" },
      { label: "Large", value: "btn-lg" },
    ],
    u = [
      { label: "Primary", value: "btn btn-primary" },
      { label: "Secondary", value: "btn btn-secondary" },
      { label: "Success", value: "btn btn-success" },
      { label: "Danger", value: "btn btn-danger" },
      { label: "Warning", value: "btn btn-warning" },
      { label: "Info", value: "btn btn-info" },
      { label: "Light", value: "btn btn-light" },
      { label: "Dark", value: "btn btn-dark" },
      { label: "Link", value: "btn btn-link" },
      { value: "btn btn-outline-primary", label: "Primary Outlined" },
      { value: "btn btn-outline-secondary", label: "Secondary Outlined" },
      { value: "btn btn-outline-success", label: "Success Outlined" },
      { value: "btn btn-outline-danger", label: "Danger Outlined" },
      { value: "btn btn-outline-warning", label: "Warning Outlined" },
      { value: "btn btn-outline-info", label: "Info Outlined" },
      { value: "btn btn-outline-light", label: "Light Outlined" },
      { value: "btn btn-outline-dark", label: "Dark Outlined" },
    ],
    m = o.uK.$5.k.map((e) => ({ label: e, value: e })),
    c = o.uK.oI.k.map((e) => ({ label: e, value: e })),
    d = o.uK.kw.k.map((e) => ({ label: e, value: e })),
    b = ["checkbox", "color", "hidden", "radio", "range"],
    h = ["date", "datetime-local", "month", "time", "week"],
    p = ["email", "password", "search", "tel", "text", "url"],
    x = ["email", "password", "search", "tel", "text", "url"],
    g = ["email", "number", "password", "search", "tel", "text", "url"],
    v = ["hidden", "range", "color"],
    f = ["date", "datetime-local", "month", "number", "range", "time", "week"],
    j = ["url", "email", "password"],
    C = ["number", "range"],
    w = ["submit", "reset", "range"],
    y = ["submit", "reset", "button"],
    S = {
      fontSize: "11px",
      fontWeight: 500,
      lineHeight: 1.4,
      textTransform: "uppercase",
      display: "block",
      marginBottom: "calc(8px)",
      padding: "0px",
    },
    R = {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      fontSize: "13px",
      boxSizing: "border-box",
    },
    P = {
      marginBottom: "inherit",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      fontSize: "13px",
      boxSizing: "border-box",
    },
    k = {
      color: "rgb(158, 150, 137)",
      marginTop: "calc(8px)",
      fontSize: "12px",
      fontStyle: "normal",
      marginBottom: "revert",
    };
  (0, e.registerBlockType)(o.UU, {
    edit: function (e) {
      const o = (0, l.useBlockProps)(),
        {
          attributes: {
            autocapitalize: T,
            autocomplete: _,
            buttonClass: N,
            buttonSizeClass: A,
            controlClass: F,
            controlSizeClass: z,
            dirname: B,
            disabled: M,
            form: I,
            formaction: L,
            formenctype: O,
            formmethod: U,
            formnovalidate: W,
            formtarget: D,
            hasLabel: H,
            isFloating: q,
            labelText: K,
            max: E,
            maxlength: J,
            min: V,
            minlength: $,
            multiple: X,
            name: G,
            pattern: Q,
            placeholder: Y,
            readonly: Z,
            required: ee,
            step: le,
            type: te,
            value: ne,
          },
          setAttributes: oe,
        } = e,
        ae = [F, z, N, A, M ? "disabled" : ""].filter(Boolean).join(" "),
        re =
          H &&
          !y.includes(te) &&
          "hidden" !== te &&
          (0, a.jsx)("label", {
            className: "form-label",
            children: (0, a.jsx)(l.RichText, {
              className: "form-label",
              identifier: "text",
              withoutInteractiveFormatting: !0,
              value: K,
              onChange: (e) => oe({ labelText: e }),
            }),
          }),
        ie = { ...o, className: o.className + (q ? " form-floating" : "") };
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsxs)(l.InspectorControls, {
            children: [
              (0, a.jsxs)(t.PanelBody, {
                title: "Input Type and Attributes",
                children: [
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.SelectControl, {
                      label: "Input Type Attribute",
                      value: te,
                      options: r,
                      onChange: (e) => {
                        let l,
                          t = { buttonClass: void 0, buttonSizeClass: void 0 };
                        "range" === e
                          ? (l = "form-range")
                          : "color" === e
                          ? (l = "form-control form-control-color")
                          : "reset" === e
                          ? ((l = void 0),
                            (t = {
                              buttonClass: "btn btn-secondary",
                              buttonSizeClass: void 0,
                            }))
                          : "submit" === e
                          ? ((l = void 0),
                            (t = {
                              buttonClass: "btn btn-primary",
                              buttonSizeClass: void 0,
                            }))
                          : (l = "form-control"),
                          oe({
                            ...t,
                            autocapitalize: void 0,
                            autocomplete: void 0,
                            controlClass: l,
                            dirname: void 0,
                            form: void 0,
                            formaction: void 0,
                            formenctype: void 0,
                            formmethod: void 0,
                            formnovalidate: void 0,
                            formtarget: void 0,
                            max: void 0,
                            maxlength: void 0,
                            min: void 0,
                            minlength: void 0,
                            multiple: void 0,
                            pattern: void 0,
                            placeholder: void 0,
                            readonly: void 0,
                            required: void 0,
                            step: void 0,
                            type: e,
                          });
                      },
                      help: "Type of form control",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.TextControl, {
                      label: "Name Attribute",
                      value: G,
                      onChange: (e) => oe({ name: e }),
                      help: "Name of the form control. Submitted with the form as part of a name/value pair",
                    }),
                  }),
                  !j.includes(te) &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.ToggleControl, {
                        label: "Autocapitalize Attribute",
                        checked: T,
                        onChange: (e) => oe({ autocapitalize: e }),
                        help: "Controls automatic capitalization in inputted text.",
                      }),
                    }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.ToggleControl, {
                      label: "Autocomplete Attribute",
                      checked: _,
                      onChange: (e) => oe({ autocomplete: e }),
                      help: "Hint for form autofill feature",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.ToggleControl, {
                      label: "Dirname Attribute",
                      checked: B,
                      onChange: (e) => oe({ dirname: e }),
                      help: "Name of form field to use for sending the element's directionality in form submission",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.ToggleControl, {
                      label: "Disabled",
                      checked: M,
                      onChange: (e) => oe({ disabled: e }),
                      help: "Whether the form control is disabled",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.TextControl, {
                      label: "Form Attribute",
                      value: I,
                      onChange: (e) => oe({ form: e }),
                      help: "Associates the control with a form element",
                    }),
                  }),
                  "submit" === te &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.TextControl, {
                            label: "Form Attribute",
                            value: L,
                            onChange: (e) => oe({ formaction: e }),
                            help: "URL to use for form submission",
                          }),
                        }),
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.SelectControl, {
                            label: "Form Encryption Type Attribute",
                            value: O,
                            options: m,
                            onChange: (e) => oe({ formenctype: e }),
                            help: "Form data set encoding type to use for form submission",
                          }),
                        }),
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.SelectControl, {
                            label: "Form Method Attribute",
                            value: U,
                            options: c,
                            onChange: (e) => oe({ formmethod: e }),
                            help: "HTTP method to use for form submission",
                          }),
                        }),
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.ToggleControl, {
                            label: "Form No Validate Attribute",
                            value: W,
                            onChange: (e) => oe({ formnovalidate: e }),
                            help: "Bypass form control validation for form submission",
                          }),
                        }),
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.SelectControl, {
                            label: "Form Method Attribute",
                            value: D,
                            options: d,
                            onChange: (e) => oe({ formtarget: e }),
                            help: "Browsing context for form submission",
                          }),
                        }),
                      ],
                    }),
                  "email" === te &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.ToggleControl, {
                        label: "Multiple Attribute",
                        value: X,
                        onChange: (e) => oe({ multiple: e }),
                        help: "Boolean. Whether to allow multiple values",
                      }),
                    }),
                  C.includes(te) &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.__experimentalNumberControl, {
                            label: "Max Attribute",
                            value: E,
                            onChange: (e) => oe({ max: e }),
                            help: "Maximum value",
                          }),
                        }),
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.__experimentalNumberControl, {
                            label: "Min Attribute",
                            value: V,
                            onChange: (e) => oe({ min: e }),
                            help: "Minimum value",
                          }),
                        }),
                      ],
                    }),
                  h.includes(te) &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)("div", {
                            className: "components-base-control",
                            style: R,
                            children: (0, a.jsxs)("div", {
                              className: "components-base-control__field",
                              style: P,
                              children: [
                                (0, a.jsxs)("label", {
                                  className: "components-base-control__label",
                                  style: S,
                                  htmlFor: "ml-max",
                                  children: [(0, n.upperFirst)(te), " Max"],
                                }),
                                (0, a.jsx)("input", {
                                  id: "ml-max",
                                  className: "components-text-control__input",
                                  type: te,
                                  value: E,
                                  onChange: (e) => oe({ max: e.target.value }),
                                }),
                                (0, a.jsx)("p", {
                                  className: "components-base-control__help",
                                  style: k,
                                  children:
                                    "Maximum length (number of characters) of value",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)("div", {
                            className: "components-base-control",
                            style: R,
                            children: (0, a.jsxs)("div", {
                              className: "components-base-control__field",
                              style: P,
                              children: [
                                (0, a.jsxs)("label", {
                                  className: "components-base-control__label",
                                  style: S,
                                  htmlFor: "ml-min",
                                  children: [(0, n.upperFirst)(te), " Min"],
                                }),
                                (0, a.jsx)("input", {
                                  id: "ml-min",
                                  className: "components-text-control__input",
                                  type: te,
                                  value: V,
                                  onChange: (e) => oe({ min: e.target.value }),
                                }),
                                (0, a.jsx)("p", {
                                  className: "components-base-control__help",
                                  style: k,
                                  children:
                                    "Minimum length (number of characters) of value",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  p.includes(te) &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.__experimentalNumberControl, {
                            label: "Max Length Attribute",
                            value: J,
                            onChange: (e) => oe({ maxlength: e }),
                            help: "Maximum length (number of characters) of value",
                          }),
                        }),
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.__experimentalNumberControl, {
                            label: "Min Length Attribute",
                            value: $,
                            onChange: (e) => oe({ minlength: e }),
                            help: "Minimum length (number of characters) of value",
                          }),
                        }),
                      ],
                    }),
                  x.includes(te) &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.TextControl, {
                        label: "Pattern Attribute",
                        value: Q,
                        onChange: (e) => oe({ pattern: e }),
                        help: "Pattern the value must match to be valid",
                      }),
                    }),
                  g.includes(te) &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.TextControl, {
                        label: "Placeholder Attribute",
                        value: Y,
                        onChange: (e) => oe({ placeholder: e }),
                        help: "Text that appears in the form control when it has no value set",
                      }),
                    }),
                  !v.includes(te) &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.ToggleControl, {
                        label: "Required Attribute",
                        checked: ee,
                        onChange: (e) => oe({ required: e }),
                        help: "Boolean. A value is required or must be checked for the form to be submittable",
                      }),
                    }),
                  !b.includes(te) &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.ToggleControl, {
                        label: "Readonly Attribute",
                        checked: Z,
                        onChange: (e) => oe({ readonly: e }),
                        help: "Boolean. The value is not editable",
                      }),
                    }),
                  f.includes(te) &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.__experimentalNumberControl, {
                        label: "Step Attribute",
                        value: le,
                        onChange: (e) => oe({ step: e }),
                        help: "Incremental values that are valid",
                      }),
                    }),
                ],
              }),
              (0, a.jsxs)(t.PanelBody, {
                title: "Form Control Styling",
                children: [
                  !w.includes(te) &&
                    (0, a.jsx)(t.PanelRow, {
                      children: (0, a.jsx)(t.SelectControl, {
                        label: "Input Size",
                        value: z,
                        options: i,
                        onChange: (e) => oe({ controlSizeClass: e }),
                        help: "Regular by default",
                      }),
                    }),
                  y.includes(te) &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.SelectControl, {
                            label: "Button Variant",
                            value: N,
                            options: u,
                            onChange: (e) => oe({ buttonClass: e }),
                            help: "Color and style of the button.",
                          }),
                        }),
                        (0, a.jsx)(t.PanelRow, {
                          children: (0, a.jsx)(t.SelectControl, {
                            label: "Button Size",
                            value: A,
                            options: s,
                            onChange: (e) => oe({ buttonSizeClass: e }),
                            help: "Size of the button, regular by default.",
                          }),
                        }),
                      ],
                    }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.ToggleControl, {
                      label: "Floating Input",
                      checked: q,
                      onChange: (e) => oe({ isFloating: e }),
                      help: "Places the label within the form control.",
                    }),
                  }),
                  (0, a.jsx)(t.PanelRow, {
                    children: (0, a.jsx)(t.ToggleControl, {
                      label: "Has Label",
                      checked: H,
                      onChange: (e) =>
                        oe({ hasLabel: e, labelText: e ? K : void 0 }),
                      help: "Should a label be displayed for the form control?",
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            ...ie,
            children: [
              !q && re,
              (0, a.jsx)("input", {
                type: "hidden" === te ? "text" : te,
                style: w.includes(te) ? void 0 : { width: "calc(100% - 26px)" },
                value: ne,
                disabled: M,
                placeholder: Y,
                min: V,
                max: E,
                minLength: $,
                maxLength: J,
                step: le,
                pattern: Q,
                className: ae,
                onChange: (e) => oe({ value: e.target.value }),
              }),
              q && re,
            ],
          }),
        ],
      });
    },
  });
})();
