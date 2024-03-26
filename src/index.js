import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit.js';
import Save from './save.js';
import './block';
import './style.scss';

registerBlockType( 'vyatkait/developers', {
	edit: Edit,
	save: Save,
} );
