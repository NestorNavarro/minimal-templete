import AccessControl from "accesscontrol";

// This is actually how the grants are maintained internally.
const grantsObject = {
	administrator : {
		user : {
			"create:any" : ["*"],
			"read:any"   : ["*"],
			"update:any" : ["*"],
			"delete:any" : ["*"],
		},
	},
};
//trying to implemetn this approach

// const permission = {
// 	users : {
// 		create : {
// 			admin      : ["*"], //att
// 			supervisor : ["*"],
// 		},
// 		read : {
// 			admin      : ["*"],
// 			supervisor : ["name"],
// 		},
// 		update : {
// 			admin      : ["*"],
// 			supervisor : ["*"],
// 		},
// 		delete : {
// 			admin      : ["*"],
// 			supervisor : ["*"],
// 		},
// 	},
// };


//admin todo
//supervisor pede leer el expediente, !tabla de ordenes.

//[0] = *
//si no, filtrar los atributos.


const ac = new AccessControl(grantsObject);

export default ac;
