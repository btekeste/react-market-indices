import React, { useContext} from 'react';
import { Asset } from './Asset';
import { GlobalContext } from '../context/GlobalState';

export const AssetList = () => {
  const { assets } = useContext(GlobalContext);

	return (
		<>
			<h3>List of Assets</h3>
			<table>
				<tbody className="table">
					<tr>
						<th>DELETE</th>
						<th>ID</th>
						<th>TICKER</th>
						<th>DESCRIPTION</th>
						<th>LAST PRICE</th>
						<th>CHANGE PERCENTAGE</th>
						<th>CHANGE VALUE</th>
					</tr>	
					{assets.map(asset =>
						(<Asset key={ asset.id } asset={ asset } />))				
					}
				</tbody>
			</table>
		</>
    )
}
