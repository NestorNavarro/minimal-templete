// @mui
import { Stack }         from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import Iconify                        from "core/Iconify";
import { RHFTextField, FormProvider } from "components/global/hook-form";

// ----------------------------------------------------------------------

export default function RegisterForm({
	delegations : {
		onSubmit,
		formMethods,
		showPassword,
		toggleShowPassword,
	},
}) {
	const { formState: { isSubmitting } } = formMethods;

	return (
		<FormProvider methods={formMethods} onSubmit={onSubmit}>
			<Stack spacing={3}>
				<Stack direction={{ xs : "column", sm : "row" }} spacing={2}>
					<RHFTextField name="firstName" label="Nombre" />
					<RHFTextField name="lastName" label="Apellido" />
				</Stack>

				<RHFTextField name="email" label="Correo electrónico" />

				<RHFTextField
					name="password"
					label="Password"
					type={showPassword ? "text" : "password"}
					endIconOnClick={toggleShowPassword}
					endIcon={ <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} /> }
				/>

				<LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
					Registrar
				</LoadingButton>
			</Stack>
		</FormProvider>
	);
}
