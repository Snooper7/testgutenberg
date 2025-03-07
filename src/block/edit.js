import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { isBlobURL } from '@wordpress/blob';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { title, description, image_url, image_alt, image_id } = attributes;
	return (
		<div { ...useBlockProps() }>
			{ image_url && (
				<div className={ `image ${ isBlobURL( image_url ) ? 'is-loading' : 'loaded' }` }>
					<img src={ image_url } alt={ image_alt } id={ image_id } />
					{ isBlobURL( image_url ) && <Spinner /> }
				</div>
			) }
			<MediaPlaceholder
				onSelect={ ( val ) => {
					setAttributes( {
						image_id: val.id,
						image_url: val.url,
						image_alt: val.alt,
					} );
				} }
				onSelectURL={ ( val ) => {
					setAttributes( {
						image_id: undefined,
						image_url: val,
						image_alt: '',
					} );
				} }
				accept="image/*"
				allowedTypes={ [ 'image' ] }
				disableMediaButtons={ image_url }
			/>
			<RichText
				tagName="h2"
				allowedFormats={ [] }
				value={ title }
				placeholder={ __( 'Your title', 'vyatka-it-developers' ) }
				onChange={ ( val ) => setAttributes( { title: val } ) }
			/>
			<RichText
				tagName="p"
				allowedFormats={ [] }
				value={ description }
				placeholder={ __( 'Your Description', 'vyatka-it-developers' ) }
				onChange={ ( val ) => setAttributes( { description: val } ) }
			/>
		</div>
	);
}
