// form
// @mui
import { Stack, IconButton, InputAdornment, Alert } from "@mui/material";
import { LoadingButton }                            from "@mui/lab";
// hooks
// components
import Iconify                        from "../../../components/Iconify";
import { FormProvider, RHFTextField } from "../../../components/hook-form";

// ----------------------------------------------------------------------

export default function RegisterForm() {


	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={3}>
				{!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

				<Stack direction={{ xs : "column", sm : "row" }} spacing={2}>
					<RHFTextField name="firstName" label="First name" />
					<RHFTextField name="lastName" label="Last name" />
				</Stack>

				<RHFTextField name="email" label="Email address" />

				<RHFTextField
					name="password"
					label="Password"
					type={showPassword ? "text" : "password"}
					InputProps={{
						endAdornment : (
							<InputAdornment position="end">
								<IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
									<Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
					Register
				</LoadingButton>
			</Stack>
		</FormProvider>
	);
}
