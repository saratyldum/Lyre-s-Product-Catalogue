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