export default {
	name: 'alcoholType',
	title: 'Alcohol Type',
	type: 'document',
	fields: [
		{
			name: 'type',
			title: 'Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Absinthe', value: 'absinthe' },
					{ title: 'Amaretto', value: 'amaretto' },
					{ title: 'Aperitivo', value: 'aperitivo' },
					{ title: 'Bourbon', value: 'bourbon' },
					{ title: 'Coffee liqueur', value: 'coffeeLiqueur' },
					{ title: 'Gin', value: 'gin' },
					{ title: 'Rum', value: 'rum' },
					{ title: 'Spritz', value: 'spiritz' },
					{ title: 'Tequila', value: 'tequila' },
					{ title: 'Triple sec', value: 'tripleSec' },
					{ title: 'Vermouth', value: 'vermouth' },
					{ title: 'Whisky', value: 'whisky' },
				],
				layout: 'radio'
			}
		},
	]


}