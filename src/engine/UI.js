import Log from './Log';
import settings from './Settings';

class UI {

	constructor() {}

	static setMeta() {
		Log('SetMeta', 'Engine');
		window.document.title = settings('title');
		//render( 'head', 'head', { append : true } );
	}
};


export default UI;