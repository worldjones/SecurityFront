import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { SignIn, SignUp } from "../pages/Authentication";
import { Fileupload } from "../pages/user/Fileupload"
import { Settings } from "../pages/user/Settings";
import { Welcome } from "../pages/Welcome";

export const routes = [
	/**
	 *
	 * Global Routes
	 *
	 */
	{
		path: "/",
		exact: true,
		component: Welcome,
	},
	{
		path: "/sign-in",
		component: SignIn,
	},
	{
		path: "/sign-up",
		component: SignUp,
	},
	/**
	 *
	 * User routes.
	 *
	 */
	{
		path: "/user/settings",
		protected: true,
		component: Settings,
	},

	{
		path: "/user/fileupload",
		protected: true,
		component: Fileupload,
	},

	/**
	 *
	 * Admin routes.
	 *
	 */
	{
		path: "/admin",
		protected: true,
		admin: true,
		component: AdminDashboard,
	},
];
