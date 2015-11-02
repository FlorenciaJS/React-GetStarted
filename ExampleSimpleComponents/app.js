import React from 'react';
import HelloWorld from './Components/HelloWorld.js';
import HelloProps from './Components/HelloProps.js';

React.render(
	<HelloWorld/>,
	document.getElementById('HelloWorld') // This is an object of replacing DOM. Node Mount.
);

React.render(
	<HelloProps text='test my component'/>,
	document.getElementById('HelloProps') // This is an object of replacing DOM. Node Mount.
);
