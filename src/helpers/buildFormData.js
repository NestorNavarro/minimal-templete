import isValidArray from "./isValidArray";

const buildFormData = (data) => {
	const body = new FormData();

	if (!data) return body;

	for (const item in data) {

		if (isValidArray(data[item])) {

			data[item].forEach((element) => {

				if (typeof element === "object") {

					body.append(`${item}[]`, JSON.stringify(element));

				} else {
					if (data[item] !== undefined) {
						body.append(`${item}[]`, element);
					}
				}
			});
			continue;
		}

		if (typeof data[item] === "object") {

			if (data[item] instanceof File) {
				body.append(item, data[item]);
				continue;
			}

			if (data[item] instanceof Date ) {
				body.append(item,  data[item]);
				continue;
			}

			body.append(item, JSON.stringify(data[item]));
			continue;
		}

		if (data[item] !== undefined) {
			body.append(item, data[item]);
		}
	}
	return body;
};

export default buildFormData;
