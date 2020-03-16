 function Character () {

    this.health = 101;
}

export default Character;


export function calcLevel ( expPoints ) {

	return expPoints / 10;
}