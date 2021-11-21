import React, { useEffect, useState } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './components/store/auth-context'
// import Modal from './components/UI/Modal/Modal'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userName, setUserName] = useState({})

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		setUserName({ email: email, password: password })
		localStorage.setItem('isLogged','1')
		setIsLoggedIn(true)
	}

	useEffect(() => {
		const storedvalue = localStorage.getItem('isLogged')
		if (storedvalue === '1') {
			setIsLoggedIn(true)
		}
	},[])

	const logoutHandler = () => {
		localStorage.removeItem('isLogged')
		setIsLoggedIn(false)
	}

	return (
		<React.Fragment>
			<AuthContext.Provider
				value={{
					isLoggedIn: isLoggedIn,
					onLogout: logoutHandler,
					liftinUp: userName,
				}}
			>
				<MainHeader />
				<main>
					{!isLoggedIn && <Login onLogin={loginHandler} />}
					{isLoggedIn && <Home onLogout={logoutHandler} />}
				</main>
			</AuthContext.Provider>
		</React.Fragment>
	)
}

export default App
