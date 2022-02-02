import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Holdings = () => {
	const { assets } = useContext(GlobalContext);

	const holdings = assets
		.map(assets => Number(assets.lastPrice))	
		.reduce((previousValue, currentValue) => previousValue + currentValue);

    return (
		<div>
			<h4 className="pt-5 text-l text-center text-gray-500">Current Holding Based on Price: 
			<span className="text-blue-400"> {holdings.toLocaleString("en-US")}</span></h4>
		</div>
    )
}
