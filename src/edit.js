import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { columns } = attributes;
	return (
		<div
			{ ...useBlockProps( {
				className: `the-${ columns }-columns`,
			} ) }
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns', 'vyatka-it-developers' ) }
						min={ 1 }
						max={ 4 }
						value={ columns }
						onChange={ ( val ) =>
							setAttributes( { columns: val } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ [ 'vyatkait/block' ] }
				template={ [
					[
						'vyatkait/block',
						{
							title: 'Test title',
							description: 'Test description',
						},
					],
					[
						'vyatkait/block',
						{
							title: 'Test title 2',
							description: 'Test description 2',
						},
					],
					[
						'vyatkait/block',
						{
							title: 'Test title 3',
							description: 'Test description 3',
						},
					],
				] }
			/>
		</div>
	);
}
