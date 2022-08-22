// @mui
import { Stack }         from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider, RHFTextField } from "components/global/hook-form";

export default function ResetPasswordForm({
	delegations : {
		onSubmit,
		formMethods,
		isSubmitting,
	},
}) {
	return (
		<FormProvider methods={formMethods} onSubmit={onSubmit}>
			<Stack spacing={3}>
				<RHFTextField name="email" label="Email address" />

				<LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
					Reset Password
				</LoadingButton>
			</Stack>
		</FormProvider>
	);
}
