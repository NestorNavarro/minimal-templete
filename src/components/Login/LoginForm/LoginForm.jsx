import { Link as RouterLink } from "react-router-dom";
// form
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton }                                  from "@mui/lab";
// routes
import { PATH_AUTH } from "routes/paths";
// hooks
// components
import Iconify                       from "../../../components/Iconify";
import { RHFTextField, RHFCheckbox } from "../../../components/hook-form";

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
		<form>

			<Stack spacing={3}>
				{!!hookForm.errors.afterSubmit && <Alert severity="error">{hookForm.errors.afterSubmit.message}</Alert>}

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
		</form>
	);
};

export default LoginForm;
