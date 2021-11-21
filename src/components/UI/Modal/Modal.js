import React, { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import './Modal.css'

const Modal = () => {
    const modalLogic = useContext(AuthContext)
	return (
		<div className={modalLogic.isLoggedIn ? "blackdrop active" : "blackdrop"} >
			<div className={modalLogic.isLoggedIn ? "content active" : "content"} >
				<h4>Оооо!  {modalLogic.liftinUp.email} чем могу помочь Вам?</h4>
				<img
					className='img'
					src='https://simpledoc.ru/resume/examples/vrach/res/i/photo.jpg'
					alt='Докторша'
				/>
				<div className='phone'>
					<h2>Светлана</h2>
					<p className='img-content'>Специалист во всем !</p>
					<label id='phone'>
						Oставьте номер и специалист свяжется с вами, <br />
						ОБЯЗА́ТЕЛЬНО
					</label>
					<input
						className='input'
						id='phone'
						type='text'
						placeholder='написать'
					/>
				</div>
				<button className='btn' onClick={modalLogic.onLogout}>Нет спасибо</button>
			</div>
		</div>
	)
}

export default Modal
