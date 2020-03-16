// CSS
import 'css/main.css';


// Components
import Character, { calcLevel } from './components/Character';


const myCharacter = new Character();

const main = () => {
    console.log(myCharacter.health);

    const level = calcLevel( 100 );
    console.log(level);
}


main();