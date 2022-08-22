import { useState }    from "react";
import { useNavigate } from "react-router";
// form
import * as Yup        from "yup";
import { useForm }     from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// our componets
import LoginForm from "./LoginForm";
// paths
import { PATH_DASHBOARD } from "routes/paths";

const LoginFormContainer = () => {

	const navigate = useNavigate();

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
		try {
			//replace for your petition
			await new Promise((resolve) => setTimeout(resolve, 500));

			console.log("Login", data);
			navigate(PATH_DASHBOARD.home);
		} catch (error) {
			console.error(error);
		}
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
