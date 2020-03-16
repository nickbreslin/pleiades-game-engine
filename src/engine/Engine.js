import Log from './Log';
import UI from './UI';

function Engine() {
	Log(`Pleiades start up sequence engaged.`, 'Engine');

	UI.setMeta();
}

export default Engine;