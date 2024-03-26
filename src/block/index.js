import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit.js';
import Save from './save.js';

registerBlockType( 'vyatkait/block', {
	title: __( 'My Block', 'vyatka-it-developers' ),
	description: __( 'Single Block', 'vyatka-it-developers' ),
	icon: 'universal-access',
	parent: [ 'vyatkait/developers' ],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		image_url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		image_alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		image_id: {
			type: 'number',
		},
	},
	edit: Edit,
	save: Save,
} );
