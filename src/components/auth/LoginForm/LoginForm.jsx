import { Link as RouterLink } from "react-router-dom";
// @mui
import { Link, Stack }   from "@mui/material";
import { LoadingButton } from "@mui/lab";
// routes
import { PATH_AUTH } from "routes/paths";
// components
import Iconify                                     from "components/global/Iconify";
import { RHFTextField, RHFCheckbox, FormProvider } from "components/global/hook-form";

// ----------------------------------------------------------------------

const LoginForm = ({
	delegations : {
		onSubmit,
		formMethods,
		showPassword,
		toggleShowPassword,
	},
}) => {
	const { formState: { isSubmitting } } = formMethods;

	return (
		<FormProvider methods={formMethods} onSubmit={onSubmit}>
			<Stack spacing={3}>
				<RHFTextField name="email" label="Correo Electrónico" />
				<RHFTextField
					name="password"
					label="Password"
					type={showPassword ? "text" : "password"}
					endIconOnClick={toggleShowPassword}
					endIcon={ <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} /> }
				/>
			</Stack>

			<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my : 2 }}>
				<RHFCheckbox name="remember" label="Remember me" />
				<Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.resetPassword}>
					¿Olvidaste tu contraseña?
				</Link>
			</Stack>

			<LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
				Entrar
			</LoadingButton>
		</FormProvider>
	);
};

export default LoginForm;
