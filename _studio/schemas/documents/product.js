export default {
	title: 'Product',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
			}
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Information',
			name: 'information',
			type: 'text'
		},
		{
			name: 'type',
			title: 'Type',
			type: 'string',
			options: {
				list: [
					{title: 'Absinthe', value: 'absinthe'},
					{title: 'Amaretto', value: 'amaretto'},
					{title: 'Aperitivo', value: 'aperitivo'},
					{title: 'Bourbon', value: 'bourbon'},
					{title: 'Coffee liqueur', value: 'coffeeLiqueur'},
					{title: 'Gin', value: 'gin'},
					{title: 'Rum', value: 'rum'},
					{title: 'Spritz', value: 'spiritz'},
					{title: 'Tequila', value: 'tequila'},
					{title: 'Triple sec', value: 'tripleSec'},
					{title: 'Vermouth', value: 'vermouth'},
					{title: 'Whisky', value: 'whisky'},
				],
				layout: 'radio'
			}
		},
		{
			title: 'Flavour profile',
			name: 'flavourProfile',
			type: 'text'
		},
		{
			title: 'Flavours',
			name: 'flavours',
			type: 'array',
			of: [{ 
				type: 'reference',
				to: [{ type: 'flavour'}] //HVORFOR FUNKER IKKE DETTE?
			}]
		},
		{
			title: 'How to Enjoy',
			name: 'enjoy',
			type: 'text'
		},
		{
			title: 'Taste profile',
			name: 'tasteProfile',
			type: 'object',
			fields: [
				{
					title: 'To taste',
					name: 'toTaste',
					type: 'string'
				},
				{
					title: 'Bouquet',
					name: 'bouquet',
					type: 'string'
				} 
			]
		},
		{
			title: 'Instructions',
			name: 'instructions',
			type: 'text'
		},
	]
}