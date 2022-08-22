import * as Yup     from "yup";
import { useState } from "react";
// form
import { useForm }     from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// hooks
import RegisterForm from "./RegisterForm";

const RegisterFormContainer = () => {

	const [showPassword, setShowPassword] = useState(false);

	const RegisterSchema = Yup.object().shape({
		firstName : Yup.string().required("El nombre es requerido"),
		lastName  : Yup.string().required("El apellido es requerido"),
		email     : Yup.string().email("El correo elctrónico debe de tener un formato valido").required("El correo electrónico es requerido"),
		password  : Yup.string().required("La contraseña es requerida"),
	});

	const defaultValues = {
		firstName : "",
		lastName  : "",
		email     : "",
		password  : "",
	};

	const formMethods = useForm({
		resolver : yupResolver(RegisterSchema),
		defaultValues,
	});

	const {
		handleSubmit,
	} = formMethods;

	const toggleShowPassword = () => setShowPassword(!showPassword);

	const onSubmit = handleSubmit(async ( data ) => {
		console.log("Register", data);
	});


	return (
		<RegisterForm
			delegations={{
				onSubmit,
				formMethods,
				showPassword,
				toggleShowPassword,
			}}
		 />
	);
};

export default RegisterFormContainer;
