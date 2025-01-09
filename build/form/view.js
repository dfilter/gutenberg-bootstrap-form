import * as t from "@wordpress/interactivity";
var e = {
  d: (t, o) => {
    for (var r in o)
      e.o(o, r) &&
        !e.o(t, r) &&
        Object.defineProperty(t, r, { enumerable: !0, get: o[r] });
  },
  o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
};
const o =
    ((a = {
      getConfig: () => t.getConfig,
      getContext: () => t.getContext,
      store: () => t.store,
    }),
    (c = {}),
    e.d(c, a),
    c),
  r = JSON.parse('{"UU":"gutenberg-bootstrap-form/form"}'),
  { state: n, actions: s } = (0, o.store)(r.UU, {
    actions: {
      resetForm: () => {
        const t = (0, o.getConfig)();
        document.getElementById(t.formId).reset();
      },
      submit: async (t) => {
        t.preventDefault();
        const e = (0, o.getConfig)(),
          r = new FormData(t.currentTarget),
          a = {
            ...n[e.formId],
            url: window.location.href,
            postId: e.postId,
            postType: e.postType,
          };
        r.forEach((t, e) => {
          const o = r.getAll(e);
          a[e] = o.length > 1 ? o : o[0];
        });
        const c = (0, o.getContext)();
        try {
          const t = await fetch(`${n.restUrl}${e.apiEndpoint}`, {
              method: "POST",
              body: JSON.stringify(a),
              headers: {
                "Content-Type": "application/json",
                "X-WP-Nonce": n.nonce,
              },
            }),
            o = await t.json();
          if (((c.alertMessage = o), !t.ok))
            return void (c.alertClass = "alert alert-danger");
          (c.alertClass = "alert alert-success"), s.resetForm();
        } catch (t) {}
      },
    },
  });
var a, c;
