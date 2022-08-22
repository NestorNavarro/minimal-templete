import * as Yup        from "yup";
import { useState }    from "react";
import { useNavigate } from "react-router";
// form
import { useForm }     from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// hooks
import RegisterForm from "./RegisterForm";
// paths
import { PATH_AUTH } from "routes/paths";

const RegisterFormContainer = () => {

	const navigate = useNavigate();

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
		try {
			//replace for your petition
			await new Promise((resolve) => setTimeout(resolve, 500));

			console.log("Register", data);
			navigate(PATH_AUTH.login);
		} catch (error) {
			console.error(error);
		}
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
