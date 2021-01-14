import './App.css';
import { Login, Submit } from './utilities/buttons/styles/Buttons';

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<div className='border-div'>
					<h3>Submit Button from buttons folder</h3>
					<Submit type='submit'>Submit</Submit>
				</div>
				<div className='border-div'>
					<h3>Login Button from buttons folder</h3>
					<Login type='button'>Login Here</Login>
				</div>
			</div>
		</div>
	);
}

export default App;
