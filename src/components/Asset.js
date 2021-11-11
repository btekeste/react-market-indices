import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Asset = ( {asset} ) => {

  const { deleteAsset } = useContext(GlobalContext);

    return (
		<tr>
			<td><button onClick={() => deleteAsset(asset.id)} 
          		className="delete-button">X</button></td>
      		<td>{asset.id}</td>
			<td>{asset.ticker}</td>
			<td>{asset.description}</td>
			<td>{asset.lastPrice.toLocaleString("en-US")}</td>
			<td>{asset.changePercentage}%</td>
			<td>{asset.changeValue}</td>
		</tr>
    )
}
