
/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
];


/**
 * The prefix for API routes authenticated routes
 * Routes that start with this prefix ares used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"


/**
 * The default route to redirect to after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";