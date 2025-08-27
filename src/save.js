/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * The save function describes the structure of your block's frontend content.
 *
 * This is what will be saved to the post content and rendered on the front end.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/
 *
 * @param {Object} props
 * @param {Object} props.attributes The block attributes, containing the `gameUrl`.
 * @return {WPElement} Element to render.
 */
export function Save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const { gameUrl } = attributes;

	// Only render the iframe if a URL exists.
	if ( ! gameUrl ) {
		return null;
	}

	return (
		<div { ...blockProps }>
			<div className="godot-game-wrapper">
				<iframe
					src={ gameUrl }
					width="100%"
					height="600"
					style={ { border: '0' } }
					title={ __( 'Godot Game', 'godot-game-block' ) }
					allowFullScreen={ true }
					allow="autoplay; fullscreen"
					sandbox="allow-scripts allow-forms allow-popups allow-same-origin allow-pointer-lock allow-top-navigation-by-user-activation allow-modals allow-presentation allow-orientation-lock allow-downloads"
				></iframe>
			</div>
		</div>
	);
}
