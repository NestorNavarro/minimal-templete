import { Link as RouterLink } from "react-router-dom";
// form
// @mui
import { Link, Stack, IconButton, InputAdornment, Alert } from "@mui/material";
import { LoadingButton }                                  from "@mui/lab";
// routes
import { PATH_AUTH } from "routes/paths";
// hooks
// components
import Iconify                       from "components/global/Iconify";
import { RHFTextField, RHFCheckbox } from "components/global/hook-form";
import { FormProvider }              from "react-hook-form";

// ----------------------------------------------------------------------

const LoginForm = ({
	delegations : {
		onSubmit,
		hookForm,
		showPassword,
		toggleShowPassword,
	},
}) => {
	console.log(hookForm.errors);

	return (
		<form onSubmit={onSubmit}>
			<FormProvider {...hookForm}>
				<Stack spacing={3}>
					{!!hookForm.errors?.email && <Alert severity="error">Credenciales incorrectas</Alert>}

					<RHFTextField name="email" label="Email address" />

					<RHFTextField
						name="password"
						label="Password"
						type={showPassword ? "text" : "password"}
						InputProps={{
							endAdornment : (
								<InputAdornment position="end">
									<IconButton onClick={toggleShowPassword} edge="end">
										<Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Stack>

				<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my : 2 }}>
					<RHFCheckbox name="remember" label="Remember me" />
					<Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.resetPassword}>
						Forgot password?
					</Link>
				</Stack>

				<LoadingButton fullWidth size="large" type="submit" variant="contained" loading={false}>
					Login
				</LoadingButton>
			</FormProvider>
		</form>
	);
};

export default LoginForm;
