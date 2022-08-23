// form
import { Controller } from "react-hook-form";
// @mui
import { OutlinedInput, Stack } from "@mui/material";
import { LoadingButton }        from "@mui/lab";
// routes

// ----------------------------------------------------------------------

export default function VerifyCodeForm({
	delegations : {
		codes,
		onSubmit,
		formMethods,
		handleChangeWithNextField,
	},
}) {
	const { control, formState : { isSubmitting, isValid } } = formMethods;

	return (
		<form onSubmit={onSubmit}>
			<Stack direction="row" spacing={2} justifyContent="center">
				{Object.keys(codes).map((name, index) => (
					<Controller
						key={name}
						name={`code${index + 1}`}
						control={control}
						render={({ field }) => (
							<OutlinedInput
								{...field}
								id="field-code"
								autoFocus={index === 0}
								placeholder="-"
								onChange={(event) => handleChangeWithNextField(event, field.onChange)}
								inputProps={{
									maxLength : 1,
									sx        : {
										p         : 0,
										textAlign : "center",
										width     : { xs : 36, sm : 56 },
										height    : { xs : 36, sm : 56 },
									},
								}}
							/>
						)}
					/>
				))}
			</Stack>

			<LoadingButton
				fullWidth
				size="large"
				type="submit"
				variant="contained"
				loading={isSubmitting}
				disabled={!isValid}
				sx={{ mt : 3 }}
			>
				Verify
			</LoadingButton>
		</form>
	);
}
