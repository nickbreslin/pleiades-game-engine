import log from './Log';

function render( template, container, data = {}, cb) {
	log(`Pleiades start up sequence engaged.`, 'zr');

	const name = `src/templates/tmp/${'template'}.hbs`;

	const containerObject = document.querySelector( container );

	if( containerObject ) {
		containerObject.innerHtml( html );
		
	} else {
		log(`Template missing: ${'template'}`, 'Render');
	}

	if ( cb ) {
		cb();
	}
	
}

export default render;