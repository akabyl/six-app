import React, { useState } from 'react';
import Modal from './components/Modal'
import './index.scss';

function App() {
	const [open, setOpen] = useState(false);
	const openModal = () => {
		setOpen(!open);
	};
	return (
		<div className='App'>
			<button className='open-modal-btn' onClick={openModal}>
				✨ Открыть окно
			</button>
			<Modal open={open} openModal={openModal} />
		</div>
	);
}

export default App;
