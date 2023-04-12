export default Structure =>  {
	const { divider, editor, list, listItem, documentTypeListItem } = Structure;

	return list()
				.title('Catalogue content')
				.showIcons(false)
				.items([
					documentTypeListItem('product'),
					documentTypeListItem('flavour'),
					documentTypeListItem('alcoholType'),

					divider(),

					listItem()
					.title('Settings')
					.child(
						editor().id('settings').schemaType('settings')
					),

					
				])
}