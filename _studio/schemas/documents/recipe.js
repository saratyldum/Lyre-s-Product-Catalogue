export default {
	title: 'Recipe',
	name: 'recipe',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Ingredients',
			name: 'ingredients',
			type: 'array',
			of: [
				{
					title: 'Main Ingredient',
					name: 'mainIngredient',
					type: 'object',
					fields: [
						{
							title: 'Quantity',
							name: 'quantity',
							type: 'number',
							decription: 'Amount in mL'
						},
						{
							title: 'Enitity',
							name: 'enitity',
							type: 'string',
							// options: 
						},
						{
							title: 'Product',
							name: 'product',
							type: 'reference',
							to: [
								{ type: 'product'}
							],
						},

					]
				},
				{
					title: 'optional Ingredient',
					name: 'optional Ingredient',
					type: 'object',
					fields: [
						{
							title: 'Quantity',
							name: 'quantity',
							type: 'number',
							decription: 'Amount in mL'
						},
						{
							title: 'Enitity',
							name: 'enitity',
							type: 'string',
							// options: 
						},
						{
							title: 'Prodcut',
							name: 'prodcut',
							type: 'reference',
							to: [
								{ type: 'product'}
							],
						},

					]
				},
			]
		},
		{
			title: 'Method',
			name: 'method',
			type: 'text',
		},
		{
			title: 'Garnish',
			name: 'garnish',
			type: 'string',
		}
	]
}