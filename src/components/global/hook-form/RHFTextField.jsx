import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";

// @mui
import {
	IconButton,
	InputLabel,
	Typography,
	FormControl,
	OutlinedInput,
	InputAdornment,
} from "@mui/material";

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
	name             : PropTypes.string.isRequired,
	id               : PropTypes.string,
	sx               : PropTypes.object,
	size             : PropTypes.string,
	type             : PropTypes.string,
	label            : PropTypes.string,
	variant          : PropTypes.string,
	endIcon          : PropTypes.element,
	startIcon        : PropTypes.element,
	className        : PropTypes.string,
	placeholder      : PropTypes.string,
	endIconOnClick   : PropTypes.func,
	startIconOnClick : PropTypes.func,
};

export default function RHFTextField({
	id,
	sx,
	name,
	type,
	label,
	variant,
	endIcon,
	className,
	startIcon,
	placeholder,
	size = "medium",
	endIconOnClick = () => {},
	startIconOnClick = () => {},
	...rest
}) {
	const { control } = useFormContext();

	const startAdornment = (error) => startIcon && (
		<InputAdornment position="start">
			<IconButton onClick={startIconOnClick} edge="start" color={error !== undefined ? "error" : "default"}>
				{ startIcon }
			</IconButton>
		</InputAdornment>
	);

	const endAdornment = (error) => endIcon && (
		<InputAdornment position="end">
			<IconButton onClick={endIconOnClick} edge="end" color={error !== undefined ? "error" : "default"}>
				{ endIcon }
			</IconButton>
		</InputAdornment>
	);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<FormControl size={size} error={error !== undefined ? true : false} sx={sx} variant={variant} className={className}>
					<InputLabel htmlFor={id}>{label}</InputLabel>
					<OutlinedInput
						{...field}
						id={id}
						type={type}
						label={label}
						autoComplete="new-password"
						startAdornment={startAdornment(error)}
						endAdornment={endAdornment(error)}
						{...rest}
					/>

					<Typography variant="caption" color="red">	<div dangerouslySetInnerHTML={ { __html : error?.message } } /> </Typography>
				</FormControl>
			)}
		/>
	);
}
