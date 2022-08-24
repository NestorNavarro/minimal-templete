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

const ac = new AccessControl(grantsObject);

export default ac;
