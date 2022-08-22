import { useState } from "react";
import * as Yup     from "yup";
// form
import { useForm }     from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// our componets
import LoginForm from "./LoginForm";

const LoginFormContainer = () => {

	const [showPassword, setShowPassword] = useState(false);

	const LoginSchema = Yup.object().shape({
		email    : Yup.string().email("El correo electrónico debe de tener un formato correcto").required("El correo electrónico es requerido"),
		password : Yup.string().required("La constraseña es requerida"),
	});

	const defaultValues = {
		email    : "",
		password : "",
		remember : true,
	};

	const formMethods = useForm({
		resolver : yupResolver(LoginSchema),
		defaultValues,
	});

	const { handleSubmit } = formMethods;

	const toggleShowPassword = () => setShowPassword(!showPassword);

	const onSubmit = handleSubmit(async ( data ) => {
		console.log("Login", data);
	});

	return (
		<LoginForm
			delegations={{
				onSubmit,
				formMethods,
				showPassword,
				toggleShowPassword,
			}}
		/>
	);
};

export default LoginFormContainer;
