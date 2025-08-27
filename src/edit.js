/**
 * WordPress dependencies
 */
import { useBlockProps, URLInput } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * The edit function describes the structure of your block in the editor.
 *
 * This represents the "Edit" view of the block, visible in the WordPress editor.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/
 *
 * @param {Object} props
 * @param {string} props.attributes The block attributes, containing the `gameUrl`.
 * @param {Function} props.setAttributes Function to update the attributes.
 * @return {WPElement} Element to render.
 */
export function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const { gameUrl } = attributes;

	const onChangeGameUrl = ( newUrl ) => {
		setAttributes( { gameUrl: newUrl } );
	};

	// Use a simple iframe for the editor preview.
	const gamePreview = gameUrl ? (
		<iframe
			src={ gameUrl }
			width="100%"
			height="600"
			style={ { border: '0' } }
			title={ __( 'Godot Game Preview', 'godot-game-block' ) }
			sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
		></iframe>
	) : (
		<div style={ { padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0', border: '2px dashed #ccc' } }>
			{ __( 'Enter a Godot game URL to preview it here.', 'godot-game-block' ) }
		</div>
	);

	return (
		<div { ...blockProps }>
			<div className="godot-game-wrapper">
				{ gamePreview }
			</div>
			<div className="url-input-wrapper">
				<URLInput
					value={ gameUrl }
					onChange={ onChangeGameUrl }
					placeholder={ __( 'Enter Godot Game URL...', 'godot-game-block' ) }
				/>
			</div>
		</div>
	);
}
