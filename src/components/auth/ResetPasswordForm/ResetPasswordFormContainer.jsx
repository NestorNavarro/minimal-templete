import PropTypes from "prop-types";
//form
import * as Yup        from "yup";
import { useForm }     from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//hooks
import useIsMountedRef from "hooks/useIsMountedRef";
//components
import ResetPassword from "./ResetPasswordForm";

const ResetPasswordFormContainer = ({ onSent, onGetEmail }) => {
	const isMountedRef = useIsMountedRef();

	const ResetPasswordSchema = Yup.object().shape({
		email : Yup.string().email("El correo elctrónico debe de tener un formato valido").required("El correo electrónico es requerido"),
	});

	const formMethods = useForm({
		resolver      : yupResolver(ResetPasswordSchema),
		defaultValues : { email : "demo@domain.com" },
	});

	const {
		handleSubmit,
		formState: { isSubmitting },
	} = formMethods;

	const onSubmit = handleSubmit(async (data) => {
		try {
			//replace for your petition
			await new Promise((resolve) => setTimeout(resolve, 500));

			if (isMountedRef.current) {
				console.log(data);
				onSent();
				onGetEmail(data.email);
			}
		} catch (error) {
			console.error(error);
		}
	});
	return (
		<ResetPassword
			delegations={{
				onSubmit,
				formMethods,
				isSubmitting,
			}}
		/>
	);
};

ResetPasswordFormContainer.propTypes = {
	onSent     : PropTypes.func,
	onGetEmail : PropTypes.func,
};

export default ResetPasswordFormContainer;
