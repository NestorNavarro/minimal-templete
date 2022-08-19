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
		firstName : Yup.string().required("First name required"),
		lastName  : Yup.string().required("Last name required"),
		email     : Yup.string().email("Email must be a valid email address").required("Email is required"),
		password  : Yup.string().required("Password is required"),
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
		reset,
		setError,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = formMethods;

	const onSubmit = async (data) => {
	};
	return (
		<RegisterForm />
	);
};

export default RegisterFormContainer;
