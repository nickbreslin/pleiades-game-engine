import log from './Log';
import * as settingsJson from './../data/settings.json';


function settings( key ) {
	return settingsData.get( key );
}

export default settings;


/*
 SettingsData
*/
const settingsData = {};
settingsData.data = settingsJson.default;

settingsData.get = ( key ) => {


	if( settingsData.data.hasOwnProperty(key) ) {
	    return settingsData.data[key];
    }

    // not using `log` here to prevent a chicken-egg situation
	console.warn('Requested setting missing: ' +  key );

	return '';
}


