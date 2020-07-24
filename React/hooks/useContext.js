import React, {useContext} from 'react'

const AppContext = React.createContext({})

const Button1 = () => {
	const {name} = useContext(AppContext)
	return <div>{name}</div>
}
const Button2 = () => {
	const {name, age} = useContext(AppContext)
	return (
		<div>
			{name}
			{age}
		</div>
	)
}