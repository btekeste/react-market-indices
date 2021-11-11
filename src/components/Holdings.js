import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Holdings = () => {
	const { assets } = useContext(GlobalContext);

	const holdings = assets
		.map(assets => Number(assets.lastPrice))	
		.reduce((previousValue, currentValue) => previousValue + currentValue);

    return (
		<>
			<h4>Holdings</h4>
			<h1>{holdings.toLocaleString("en-US")}</h1>
		</>
    )
}
