function auth({ app, redirect }) {
  const { $auth } = app;
  if (!$auth.isAuthenticated()) {
    return redirect("/home");
  }
}
export {
  auth as default
};
//# sourceMappingURL=auth-BbK2wfZT.js.map
