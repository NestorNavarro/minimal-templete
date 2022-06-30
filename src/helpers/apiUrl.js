const isProduction = process.env.NODE_ENV === "production";

const apiUrl = isProduction
	? process.env.VITE_API
	: process.env.VITE_API_LOCAL;

export default apiUrl;
