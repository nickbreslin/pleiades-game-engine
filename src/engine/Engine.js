import log from './Log';
import UI from './UI';

import Game from './Game';

function Engine() {
	log(`Pleiades start up sequence engaged.`, 'Engine');

	Game.load();
	UI.setMeta();

}

export default Engine;