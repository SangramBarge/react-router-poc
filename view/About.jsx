import React   from 'react';


export default class About extends React.Component {



	handleSubmit = () => {

		this.props.history.push('/welcome');
	}

	render() {

		return (
					<div> In about us page <button name="button1" id="button1" onClick={this.handleSubmit}>Click me </button></div>
			);
	}


}