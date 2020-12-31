import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

const usePerson = personId => {
	const [loading, setLoading] = useState(false);
	const [person, setPerson] = useState({});

	useEffect(() => {
		setLoading(() => true);
		fetch(`https://swapi.co/api/people/${personId}/`)
			.then(response => response.json())
			.then(data => {
				setPerson(() => data);
				setLoading(() => false);
			});
	}, [personId])

	return [loading, person];
};

