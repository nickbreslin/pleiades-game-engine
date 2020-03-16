/*
  Stylized log message with per-component color highlightning for quick
  filtering in the console.
*/

function Log(message, component = 'default') {

	const componentColor = logConfig.getComponentColor( component );
	console.log(
		`%c[P]%c[${component}]%c ${message}`,
		'color:red;font-weight:bold', // TODO - Move to settings.
		`color:${componentColor}`,
		'color:#ccc' // TODO -- move to settings
	);
}

export default Log;



/*
  This object has a single purpose: decorate the logs.
  We have this has a separate object from the Log() function
  above so that we can export just the Log and have it easily
  called.
*/
const logConfig = {};
logConfig.components = []

logConfig.register = ( component, color ) => {
	component = component.toLowerCase();
	logConfig.components[component] = color;
};

logConfig.getComponentColor = ( component )  => {

	component = component.toLowerCase();

	if( logConfig.components[component] ) {
		return logConfig.components[component];
	} else {
		return logConfig.components['default'];
	}
}

/*
  Could load these from a settings file
*/
logConfig.register( 'default',   '#FFF' ); // White
logConfig.register( 'Engine',    '#CC3' ); // Yellow
logConfig.register( 'Render',    '#3C3' ); // Green
logConfig.register( 'Datastore', '#C3C' ); // Purple