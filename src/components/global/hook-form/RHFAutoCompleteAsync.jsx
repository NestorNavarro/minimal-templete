import { useEffect, useState } from "react";
import PropTypes               from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Autocomplete, FormControl, TextField, Typography } from "@mui/material";
// helpers
import { isValidArray } from "helpers";
//hooks
import { useDebounce } from "hooks";
//store
import { instanceApi } from "store/api/intanceApi";

import { getValidLabel, handleOnChange } from "./RHFAutoComplete";

// ----------------------------------------------------------------------

RHFAutoCompleteAsync.propTypes = {
	name      : PropTypes.string.isRequired,
	label     : PropTypes.string,
	module    : PropTypes.string.isRequired,
	tags      : PropTypes.array.isRequired,
	namelabel : PropTypes.string,
	nameValue : PropTypes.string,
	params    : PropTypes.object,
};

RHFAutoCompleteAsync.defaultProps = {
	nameLabel : "name",
	nameValue : "_id",
};

export default function RHFAutoCompleteAsync({
	sx,
	name,
	tags,
	size,
	label,
	module,
	params,
	variant,
	className,
	nameLabel,
	nameValue,
	...rest
}) {
	const { control } = useFormContext();

	const [search, setSearch]   = useState("");
	const [options, setOptions] = useState([]);

	const [ request, { isFetching } ] = instanceApi.useLazyGetDataQuery();

	const debouncedSearch = useDebounce(search, 300);

	const handleSearch = (e) => setSearch(e?.target?.value);

	const transformData = (options) => (
		options.map(option => ({
			label : option[nameLabel],
			value : option[nameValue],
			...option,
		}))
	);

	const getValidOptions = (options) => {
		if (!isValidArray(options)) {
			return [];
		}
		return transformData(options);
	};

	const getOptions = async () => {
		const payload = await request({
			tags,
			module,
			params : {
				search : debouncedSearch,
				size   : size ?? 16,
				...params,
			},
		}).unwrap();

		const options = getValidOptions(payload?.data);
		setOptions(options);
	};

	useEffect(() => {
		getOptions();
	}, [debouncedSearch]);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				return (
					<FormControl error={error !== undefined ? true : false} sx={sx} variant={variant} className={className}>
						<Autocomplete
							{...field}
							autoComplete
							options={options}
							loading={isFetching}
							getOptionLabel={getValidLabel}
							renderInput={(params) => ( <TextField {...params} label={label} error={!!error} /> )}
							onChange={handleOnChange(field.onChange)}
							onInputChange={handleSearch}
							{...rest}
						/>
						<Typography variant="caption" color="red"> { error?.message } </Typography>
					</FormControl>
				);
			}}
		/>
	);
}
