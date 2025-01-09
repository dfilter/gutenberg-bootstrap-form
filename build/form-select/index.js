(() => {
  "use strict";
  const e = window.wp.blocks,
    t = window.wp.blockEditor,
    l = window.wp.components,
    n = window.wp.element,
    o = (0, n.forwardRef)(function ({ icon: e, size: t = 24, ...l }, o) {
      return (0, n.cloneElement)(e, { width: t, height: t, ...l, ref: o });
    }),
    s = window.React,
    i = window.wp.primitives,
    a = (0, s.createElement)(
      i.SVG,
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
      (0, s.createElement)(i.Path, {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z",
      })
    ),
    r = window.ReactJSXRuntime,
    c = { label: "", value: "" },
    h = [
      { label: "Small", value: "form-select-sm" },
      { label: "Regular", value: "" },
      { label: "Large", value: "form-select-lg" },
    ],
    d = JSON.parse('{"UU":"gutenberg-bootstrap-form/form-select"}');
  (0, e.registerBlockType)(d.UU, {
    edit: function (e) {
      const {
          attributes: {
            autocomplete: s,
            autofocus: i,
            disabled: d,
            form: u,
            multiple: m,
            name: b,
            required: p,
            selectLabel: x,
            hasLabel: f,
            selectOptions: g,
            size: j,
            isFloating: w,
            selectSize: v,
          },
          setAttributes: C,
        } = e,
        [T, R] = (0, n.useState)(c),
        y =
          f &&
          (0, r.jsx)("label", {
            className: "form-label",
            children: (0, r.jsx)(t.RichText, {
              className: "form-label",
              identifier: "text",
              withoutInteractiveFormatting: !0,
              value: x,
              onChange: (e) => C({ selectLabel: e }),
            }),
          }),
        A = (0, t.useBlockProps)(),
        S = { ...A, className: A.className + (w ? " form-floating" : "") },
        k = g.filter((e) => e.selected).map((e) => e.value),
        P = m ? k : k[0];
      return (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsxs)(t.InspectorControls, {
            children: [
              (0, r.jsx)(l.PanelBody, {
                title: "Select Options",
                children: (0, r.jsxs)("table", {
                  className: "table",
                  children: [
                    (0, r.jsx)("thead", {
                      children: (0, r.jsxs)("tr", {
                        children: [
                          (0, r.jsx)("th", { children: "Label" }),
                          (0, r.jsx)("th", { children: "Value" }),
                          (0, r.jsx)("td", { children: "Default" }),
                          (0, r.jsx)("td", {}),
                        ],
                      }),
                    }),
                    (0, r.jsxs)("tbody", {
                      children: [
                        g.map((e, t) =>
                          (0, r.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, r.jsx)("td", { children: e.label }),
                                (0, r.jsx)("td", { children: e.value }),
                                (0, r.jsx)("td", {
                                  children: (0, r.jsx)("input", {
                                    type: m ? "checkbox" : "radio",
                                    name: "selected",
                                    checked: e.selected,
                                    onChange: () =>
                                      m
                                        ? ((e) => {
                                            const t = [...g];
                                            (t[e].selected = !t[e].selected),
                                              C({ selectOptions: t });
                                          })(t)
                                        : ((e) => {
                                            const t = g.map((e) => ({
                                              ...e,
                                              selected: !1,
                                            }));
                                            (t[e].selected = !0),
                                              C({ selectOptions: t });
                                          })(t),
                                  }),
                                }),
                                (0, r.jsx)("td", {
                                  children: (0, r.jsx)(l.Button, {
                                    type: "button",
                                    onClick: () =>
                                      ((e) => {
                                        const t = [...g];
                                        t.splice(e, 1), C({ selectOptions: t });
                                      })(t),
                                    children: (0, r.jsx)(o, { icon: a }),
                                  }),
                                }),
                              ],
                            },
                            t
                          )
                        ),
                        (0, r.jsxs)("tr", {
                          children: [
                            (0, r.jsx)("td", {
                              children: (0, r.jsx)(l.TextControl, {
                                value: T.label,
                                onChange: (e) => R({ ...T, label: e }),
                              }),
                            }),
                            (0, r.jsx)("td", {
                              children: (0, r.jsx)(l.TextControl, {
                                value: T.value,
                                onChange: (e) => R({ ...T, value: e }),
                              }),
                            }),
                            (0, r.jsx)("td", {
                              children: (0, r.jsx)(l.Button, {
                                type: "button",
                                onClick: () => {
                                  C({ selectOptions: [...g, T] }), R(c);
                                },
                                children: "Add",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)(l.PanelBody, {
                title: "Select Attributes",
                children: [
                  (0, r.jsx)(l.PanelRow, {
                    children: (0, r.jsx)(l.ToggleControl, {
                      label: "Autocomplete Attribute",
                      checked: s,
                      onChange: (e) => C({ autocomplete: e }),
                      help: "A string providing a hint for a user agent's autocomplete feature. See The HTML autocomplete attribute for a complete list of values and details on how to use autocomplete.",
                    }),
                  }),
                  (0, r.jsx)(l.PanelRow, {
                    children: (0, r.jsx)(l.ToggleControl, {
                      label: "Autofocus Attribute",
                      checked: i,
                      onChange: (e) => C({ autofocus: e }),
                      help: "This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the autofocus attribute.",
                    }),
                  }),
                  (0, r.jsx)(l.PanelRow, {
                    children: (0, r.jsx)(l.ToggleControl, {
                      label: "Disabled Attribute",
                      checked: d,
                      onChange: (e) => C({ disabled: e }),
                      help: "This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.",
                    }),
                  }),
                  (0, r.jsx)(l.PanelRow, {
                    children: (0, r.jsx)(l.TextControl, {
                      label: "Form Attribute",
                      value: u,
                      onChange: (e) => C({ form: e }),
                      help: "The <form> element to associate the <select> with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <select> is associated with its ancestor <form> element, if any.) This attribute lets you associate <select> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element.",
                    }),
                  }),
                  (0, r.jsx)(l.PanelRow, {
                    children: (0, r.jsx)(l.ToggleControl, {
                      label: "Multiple Attribute",
                      checked: m,
                      onChange: (e) => {
                        e ||
                          C({
                            selectOptions: g.map((e) => ({
                              ...e,
                              selected: !1,
                            })),
                          }),
                          C({ multiple: e });
                      },
                      help: "This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When multiple is specified, most browsers will show a scrolling list box instead of a single line dropdown.",
                    }),
                  }),
                  (0, r.jsx)(l.PanelRow, {
                    children: (0, r.jsx)(l.TextControl, {
                      label: "Name Attribute",
                      value: b,
                      onChange: (e) => C({ name: e }),
                      help: "This attribute is used to specify the name of the control.",
                    }),
                  }),
                  (0, r.jsx)(l.PanelRow, {
                    children: (0, r.jsx)(l.ToggleControl, {
                      label: "Required Attribute",
                      checked: p,
                      onChange: (e) => C({ required: e }),
                      help: "A Boolean attribute indicating that an option with a non-empty string value must be selected.",
                    }),
                  }),
                  m &&
                    (0, r.jsx)(l.PanelRow, {
                      children: (0, r.jsx)(l.__experimentalNumberControl, {
                        label: "Size Attribute",
                        min: 0,
                        value: j,
                        onChange: (e) => C({ size: e }),
                        help: "If the control is presented as a scrolling list box (e.g. when multiple is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.",
                      }),
                    }),
                ],
              }),
              (0, r.jsxs)(l.PanelBody, {
                title: "Select Styling",
                children: [
                  (0, r.jsx)(l.PanelRow, {
                    children: (0, r.jsx)(l.SelectControl, {
                      label: "Select Size",
                      value: null != v ? v : "",
                      options: h,
                      onChange: (e) => C({ selectSize: e }),
                      help: "Regular by default",
                    }),
                  }),
                  (0, r.jsx)(l.PanelRow, {
                    children: (0, r.jsx)(l.ToggleControl, {
                      label: "Has label",
                      checked: f,
                      onChange: (e) =>
                        C({ hasLabel: e, selectLabel: void 0, isFloating: !1 }),
                      help: "Should a label be rendered.",
                    }),
                  }),
                  f &&
                    (0, r.jsx)(l.PanelRow, {
                      children: (0, r.jsx)(l.ToggleControl, {
                        label: "Floating label",
                        checked: w,
                        onChange: (e) => C({ isFloating: e }),
                        help: "Label will appear within the select control box.",
                      }),
                    }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)("div", {
            ...S,
            children: [
              !w && y,
              (0, r.jsx)("select", {
                multiple: m,
                size: j,
                disabled: d,
                className: `form-select ${v}`,
                defaultValue: P,
                children: g.map((e, t) =>
                  (0, r.jsx)("option", { value: e.value, children: e.label }, t)
                ),
              }),
              w && y,
            ],
          }),
        ],
      });
    },
  });
})();
