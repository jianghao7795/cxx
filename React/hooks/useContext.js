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

const  params = {id: 8};

fetch({...params})  fetch({id: 8})

callback = () => {


	dispatch({
		type: '',
		payloads: {

		},
		callback: () => {

		}
	})
}

callback && callback()

if (typeof callback === 'function') {
	callback()
}

params = {
	city: "shanghai"
};
qs

stringify()

${stringify(params)}

const {dispatch} = this.props;