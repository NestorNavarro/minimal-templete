import qs from "qs";

// -------
import { buildFormData, isValidArray } from "Helpers";
import { api }                         from ".";

export const genericApi = api.injectEndpoints({
	endpoints : builder => ({
		getData : builder.query({
			query : ({module, params}) =>  `${module}/?${qs.stringify(params)}`,

			providesTags : (result, error, arg) => isValidArray(arg.tags) ? [...arg.tags] : "",
		}),
		createOrUpdate : builder.mutation({
			query({module, data, method = "POST"}) {
				const body = buildFormData(data);

				return {
					url    : module,
					method : method,
					body,
				};
			},

			invalidatesTags : (result, error, arg) => isValidArray(arg.tags) ? [...arg.tags] : "",

			extraOptions : { maxRetries : 1 },
		}),
		delete : builder.mutation({
			query({ module }) {
				return {
					url    : module,
					method : "DELETE",
				};
			},

			invalidatesTags : (result, error, arg) => isValidArray(arg.tags) ? [...arg.tags] : "",

			extraOptions : { maxRetries : 0 },
		}),
	}),
});

