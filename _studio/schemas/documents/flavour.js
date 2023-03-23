export default {
	title: 'Flavour',
	name: 'flavour',
	type: 'document',
	fields: [
		{
			title: 'Flavour Name',
			name: 'flavourName',
			type: 'string',
			options: {
				list: [
					{title: 'Herbs', value: 'herbs'},
					{title: 'Toasted nuts', value: 'toastedNuts'},
					{title: 'Vanilla', value: 'vanilla'},
					{title: 'Agave', value: 'agave'},
					{title: 'Cedar oak', value: 'cedarOak'},
					]
				}
			},
				{
					title: 'Flavour icon',
					name: 'flavourIcon',
					type: 'image',
				}
			]
		}
