import { User } from "src/app/models/users/user";

export const users : User[]= [
	{
		"id": "joao.silva",
		"name": "João da Silva",
		"groups": [],
		"cardPermissions": [
			"Add"
		],
		"propertiesPermisions": [
			"Add"
		]
	},
		{
		"id": "henrique.silva",
		"name": "João da Silva",
		"groups": [],
		"cardPermissions": [
			"Edit"
		],
		"propertiesPermisions": [
			"Edit"
		]
	},
		{
		"id": "igor.oliveira",
		"name": "João da Silva",
		"groups": [],
		"cardPermissions": [
			"Remove"
		],
		"propertiesPermisions": [
			"Remove"
		]
	},
		{
		"id": "igor.guimaraes",
		"name": "Igor Guimarães",
		"groups": [],
		"cardPermissions": [
			"MoveCard"
		],
		"propertiesPermisions": [
			"Add",
			"Edit"
		]
	},
		{
		"id": "diogo.defante",
		"name": "Diogo Defante",
		"groups": [],
		"cardPermissions": [
			"Add"
		],
		"propertiesPermisions": [
			"Add",
            "Edit",
            "Remove"
		]
	}
]
