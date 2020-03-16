import Log from './Log';
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

	console.warn('Requested setting missing: ' +  key );

	return '';
}


