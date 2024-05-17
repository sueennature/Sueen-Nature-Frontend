// middleware/auth.js

export default function ({ app, route, redirect }) {
  const isAuthenticated = app.$auth.isAuthenticated();

  // Define routes that do not require authentication
  const publicRoutes = ['/login', '/register'];

  // If the route is not public and the user is not authenticated, redirect to the login page
  if (!publicRoutes.includes(route.path) && !isAuthenticated) {
    return redirect('/login');
  }
}
