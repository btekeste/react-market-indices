import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Asset = ( {asset} ) => {

  const { deleteAsset } = useContext(GlobalContext);

    return (
		<tr>
			<td className="w-auto text-center border border-slate-300 dark:border-slate-700 p-2">
				<button onClick={() => deleteAsset(asset.id)} className="">
					<svg xmlns="http://www.w3.org/2000/svg" 
						className="h-5 hover:-translate-y-2 hover:scale-110 ease-in-out delay-100 duration-300"
						viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 
							0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 
							0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
					</svg>
				</button>
			</td>
			<TailwindCSSTableCell>{asset.id}</TailwindCSSTableCell>
			<TailwindCSSTableCell>{asset.ticker}</TailwindCSSTableCell>
			<td className="hidden md:table-cell w-auto border border-slate-300 dark:border-slate-700 m-1 md:p-2
				text-slate-500 dark:text-slate-400 text-left">{asset.description}</td>
			<TailwindCSSTableCell>{asset.lastPrice.toLocaleString("en-US")}</TailwindCSSTableCell>
			<TailwindCSSTableCell>{asset.changePercentage}%</TailwindCSSTableCell>
			<TailwindCSSTableCell>{asset.changeValue}</TailwindCSSTableCell>
		</tr>
    )
}

const TailwindCSSTableCell = (props) => {
		return(
			<td className="w-auto border border-slate-300 dark:border-slate-700 md:m-1 md:p-2
			 text-slate-500 dark:text-slate-400 text-center">{props.children}</td>
		)
	}
