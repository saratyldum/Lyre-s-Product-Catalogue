export default {
	title: 'Settings',
	name: 'settings',
	type: 'document',
	fields: [
		{
			title: 'Bio',
			name: 'bio',
			type: 'text',
		},
		{
			title: 'Categories',
			name: 'categories',
			type: 'array',
			of: [{
				type: 'string',
			}]
		}
	],

	preview: {
		prepare: () => {
			return {
				title: 'Settings'
			}
		}
	}
}