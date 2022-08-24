import qs from "qs";
// -------
import { api }                         from ".";
import { buildFormData, isValidArray } from "helpers";

export const instanceApi = api.injectEndpoints({
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

