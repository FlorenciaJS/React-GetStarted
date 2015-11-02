import React from 'react';

class HelloProps extends React.Component {
	render() {
		return (<p>Web component parameters: {this.props.text}</p>)
	}
}

export default HelloProps;