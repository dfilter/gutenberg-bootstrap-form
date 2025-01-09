import { getConfig, getContext, store } from '@wordpress/interactivity';

import metadata from './block.json';

const { state, actions } = store( metadata.name, {
	actions: {
		resetForm: () => {
			const config = getConfig();
			document.getElementById( config.formId ).reset();
		},
		/**
		 * @param {SubmitEvent} event
		 */
		submit: async ( event ) => {
			event.preventDefault();

			const config = getConfig();
			const formData = new FormData( event.currentTarget );
			const data = {
				...state[ config.formId ],
				url: window.location.href,
				postId: config.postId,
				postType: config.postType,
			};
			formData.forEach( ( _, key ) => {
				const values = formData.getAll( key );
				data[ key ] = values.length > 1 ? values : values[ 0 ];
			} );

			const context = getContext();
			try {
				const response = await fetch(
					`${ state.restUrl }${ config.apiEndpoint }`,
					{
						method: 'POST',
						body: JSON.stringify( data ),
						headers: {
							'Content-Type': 'application/json',
							'X-WP-Nonce': state.nonce,
						},
					}
				);
				const responseData = await response.json();
				context.alertMessage = responseData;
				if ( ! response.ok ) {
					context.alertClass = 'alert alert-danger';
					return;
				}
				context.alertClass = 'alert alert-success';

				actions.resetForm();
			} catch ( error ) {}
		},
	},
} );
