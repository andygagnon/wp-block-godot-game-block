/**
 * Internal dependencies
 */
import { Edit } from './edit';
import { Save } from './save';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Lets import the block's metadata and styling.
 */
import './style.scss';
import './editor.scss';
import metadata from './block.json';

/**
 * The core logic for the block's editing and saving functionality.
 *
 * The Edit component is used to render the block in the editor.
 * The Save component is used to render the block on the frontend.
 */

// Register the block. The `metadata` object is imported from block.json.
registerBlockType( metadata.name, {
	/**
	 * @see ./block.json
	 */
	edit: Edit,
	save: Save,
} );
