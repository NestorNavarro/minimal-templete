import * as Yup        from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect }   from "react";
// form
import { useForm, useWatch } from "react-hook-form";
import { yupResolver }       from "@hookform/resolvers/yup";
// routes
import { PATH_DASHBOARD } from "routes/paths";
// components
import VerifyCodeForm from "./VerifyCodeForm";


const VerifyCodeFormContainer = () => {

	const navigate = useNavigate();

	const VerifyCodeSchema = Yup.object().shape({
		code1 : Yup.string().required("El código es requerido"),
		code2 : Yup.string().required("El código es requerido"),
		code3 : Yup.string().required("El código es requerido"),
		code4 : Yup.string().required("El código es requerido"),
		code5 : Yup.string().required("El código es requerido"),
		code6 : Yup.string().required("El código es requerido"),
	});

	const defaultValues = {
		code1 : "",
		code2 : "",
		code3 : "",
		code4 : "",
		code5 : "",
		code6 : "",
	};

	const formMethods = useForm({
		mode     : "onBlur",
		resolver : yupResolver(VerifyCodeSchema),
		defaultValues,
	});

	const {
		control,
		setValue,
		handleSubmit,
	}  = formMethods;

	const codes = useWatch({ control });


	const handlePasteClipboard = (event) => {
		let data = event?.clipboardData?.getData("Text") || "";

		data = data.split("");

		[].forEach.call(document.querySelectorAll("#field-code"), (node, index) => {
			node.value = data[index];
			const fieldIndex = `code${index + 1}`;
			setValue(fieldIndex, data[index]);
		});
	};

	const handleChangeWithNextField = (event, handleChange) => {
		const { maxLength, value, name } = event.target;
		const fieldIndex = name.replace("code", "");

		const fieldIntIndex = Number(fieldIndex);

		if (value.length >= maxLength) {
			if (fieldIntIndex < 6) {
				const nextfield = document.querySelector(`input[name=code${fieldIntIndex + 1}]`);

				if (nextfield !== null) {
					nextfield.focus();
				}
			}
		}

		handleChange(event);
	};

	const onSubmit = handleSubmit(async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 500));
			const code = Object.values(data).join("");
			console.log("code:", code);

			navigate(PATH_DASHBOARD.root, { replace : true });
		} catch (error) {
			console.error(error);
		}
	});

	useEffect(() => {
		document.addEventListener("paste", handlePasteClipboard);
	}, []);

	return (
		<VerifyCodeForm
			delegations={{
				codes,
				onSubmit,
				formMethods,
				handleChangeWithNextField,
			}}
		/>
	);
};

export default VerifyCodeFormContainer;
