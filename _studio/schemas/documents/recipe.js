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
			type: 'image',
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
					title: 'Lyre Ingredient',
					name: 'lyreIngredient',
					type: 'object',
					fields: [
						{
							title: 'Quantity',
							name: 'quantity',
							type: 'number',
							decription: 'Amount in mL'
						},
						{
							title: 'Entity',
							name: 'entity',
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
					],
					preview: {
						select: {
							quantity: 'quantity',
							entity: 'entity',
							product: 'product.title',
						},
						prepare: (fields) => {
				
							const { quantity, entity, product } = fields;
							return {
								title: `${quantity}${entity} ${product} `
							}
						}
					}
				},
				{
					title: 'secondary Ingredient',
					name: 'secondaryIngredient',
					type: 'object',
					fields: [
						{
							title: 'Quantity',
							name: 'quantity',
							type: 'number',
							decription: 'Amount in mL'
						},
						{
							title: 'Entity',
							name: 'entity',
							type: 'string',
							// options: 
						},
						{
							title: 'Product',
							name: 'product',
							type: 'string',
						},
					],
					preview: {
						select: {
							quantity: 'quantity',
							entity: 'entity',
							product: 'product',
						},
						
						prepare: (fields) => {
							const { quantity, entity, product} = fields;
							return {
								title: `${quantity}${entity} ${product} `
							}
						}
					}
				},
			],
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
		},
	]
}