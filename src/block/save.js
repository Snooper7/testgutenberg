import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { title, description, image_url, image_alt, image_id } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<img src={ image_url } alt={ image_alt } id={ image_id } />
			<RichText.Content tagName="h2" value={ title } />
			<RichText.Content tagName="p" value={ description } />
		</div>
	);
}
