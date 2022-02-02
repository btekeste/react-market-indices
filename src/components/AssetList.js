import React, { useContext} from 'react';
import { Asset } from './Asset';
import { GlobalContext } from '../context/GlobalState';

export const AssetList = () => {
  const { assets } = useContext(GlobalContext);

	return (
		<>
			<h3 className="p-2 m-2 text-2xl text-center">List of Assets</h3>
			<table className="table-auto border-collapse border border-slate-400 items-center">
				<tbody>
					<tr>
						<TailwindCSSTableTitle>REMOVE</TailwindCSSTableTitle>
						<TailwindCSSTableTitle>ID</TailwindCSSTableTitle>
						<TailwindCSSTableTitle>TICKER</TailwindCSSTableTitle>
						<th className="hidden md:table-cell w-auto border border-slate-300 dark:border-slate-600 
							font-semibold text-sm m-1 md:p-2 text-slate-900 dark:text-slate-200 text-center">
							DESCRIPTION
						</th>
						<TailwindCSSTableTitle>LAST PRICE</TailwindCSSTableTitle>
						<TailwindCSSTableTitle>CHANGE PERCENTAGE</TailwindCSSTableTitle>
						<TailwindCSSTableTitle>CHANGE VALUE</TailwindCSSTableTitle>						
					</tr>	
					{assets.map(asset =>
						(<Asset key={ asset.id } asset={ asset } />))				
					}
				</tbody>
			</table>
		</>
    )
}

const TailwindCSSTableTitle = (props) => {
	return(
		<th className="w-auto border border-slate-300 dark:border-slate-600 font-semibold text-sm md:m-1 
			md:p-2 text-slate-900 dark:text-slate-200 text-center">{props.children}</th>
	)
}
