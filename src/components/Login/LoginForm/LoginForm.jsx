import { Link as RouterLink } from "react-router-dom";
// form
// @mui
import { Link, Stack, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton }                           from "@mui/lab";
// routes
import { PATH_AUTH } from "routes/paths";
// hooks
// components
import Iconify                                     from "components/global/Iconify";
import { RHFTextField, RHFCheckbox, FormProvider } from "components/global/hook-form";

// ----------------------------------------------------------------------

const LoginForm = ({
	delegations : {
		onSubmit,
		hookForm,
		showPassword,
		toggleShowPassword,
	},
}) => {

	return (
		<FormProvider methods={hookForm} onSubmit={onSubmit}>
			<Stack spacing={3}>
				{/* {!!hookForm.errors && <Alert severity="error">Credenciales incorrectas</Alert>} */}

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
	);
};

export default LoginForm;
