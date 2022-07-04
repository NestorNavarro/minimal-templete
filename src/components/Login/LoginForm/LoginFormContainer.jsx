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
		email    : Yup.string().email("Email must be a valid email address").required("Email is required"),
		password : Yup.string().required("Password is required"),
	});

	const defaultValues = {
		email    : "demo@minimals.cc",
		password : "demo1234",
		remember : true,
	};

	const hookForm = useForm({
		resolver : yupResolver(LoginSchema),
		defaultValues,
	});

	const { handleSubmit } = hookForm;

	const toggleShowPassword = () => setShowPassword(!showPassword);

	const onSubmit = handleSubmit( async ( data ) => {
		console.log("Login", data);
	});

	return (
		<LoginForm
			delegations={{
				onSubmit,
				hookForm,
				showPassword,
				toggleShowPassword,
			}}
		/>
	);
};

export default LoginFormContainer;
