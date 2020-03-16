// CSS
import 'css/main.css';


import Engine from './engine/Engine';

// app
// view
// component
// engine


if ( document.readyState === 'complete' ||
    ( document.readyState !== 'loading' && !document.documentElement.doScroll )
) {
	Engine();
} else {
  document.addEventListener('DOMContentLoaded', Engine());
}