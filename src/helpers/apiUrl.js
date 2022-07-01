const isProduction = import.meta.env.PROD;

const apiUrl = isProduction
	? import.meta.env.VITE_API
	: import.meta.env.VITE_API_LOCAL;

export default apiUrl;
