// middleware/auth.js
export default function ({ app, redirect }) {
  const { $auth } = app;
  
  if (!$auth.isAuthenticated()) {
    return redirect('/home');
  }
}
