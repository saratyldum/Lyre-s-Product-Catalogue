import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import settings from './structure/settings.js';
import catalogue from './structure/catalogue.js';

export default {
	title: 'Lyres product catalogue',

	projectId: '50b9ial6',
	dataset: 'production',

	plugins: [
		deskTool({
			title: 'Catalogue',
			name: 'catalogue',
			structure: catalogue
		}), 
		deskTool({
			title: 'Settings',
			name: 'settings',
			structure: settings
		}),
		visionTool()],

	schema: {
		types: schemas,
	},
};
