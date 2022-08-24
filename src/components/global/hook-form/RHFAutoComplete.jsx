import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Autocomplete, FormControl, TextField, Typography } from "@mui/material";

// ----------------------------------------------------------------------

RHFAutoComplete.propTypes = {
	options   : PropTypes.array.isRequired,
	name      : PropTypes.string.isRequired,
	label     : PropTypes.string,
	variant   : PropTypes.string,
	className : PropTypes.string,
};

const isValidLabel = (label) => Boolean(label);

export const getValidLabel = (option) => {
	if (isValidLabel(option?.label)) {
		return option.label;
	}
	return "";
};

export const handleOnChange = (onChange) => (_, data) => onChange(data);

export default function RHFAutoComplete({
	sx,
	name,
	label,
	variant,
	options,
	className,
	...rest
}) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={( { field, fieldState: { error } } ) =>
				(
					<FormControl error={error !== undefined ? true : false} sx={sx} variant={variant} className={className}>
						<Autocomplete
							{...field}
							options={options}
							getOptionLabel={getValidLabel}
							renderInput={(params) => ( <TextField {...params} label={label} error={!!error} /> )}
							onChange={handleOnChange(field.onChange)}
							{...rest}
						/>
						<Typography variant="caption" color="red"> { error?.message } </Typography>
					</FormControl>
				)}
		/>
	);
}
