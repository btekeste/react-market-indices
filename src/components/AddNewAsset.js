import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddNewAsset = () => {
    const [ticker, setTicker] = useState('');
    const [description, setDescription] = useState('');
    const [lastPrice, setLastPrice] = useState();
    const [changePercentage, setChangePercentage] = useState();
    const [changeValue, setChangeValue] = useState();

    const { addAsset } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newAsset = {
            id: Math.floor(Math.random() * 100),
            ticker,
            description,
            lastPrice,
            changePercentage,
            changeValue
        }
        
        addAsset(newAsset);
    }

    return (
        <div className="md:m-2 md:p-2">
            <h3 className="my-3 text-xl">Enter A New Asset:</h3>
            <form onSubmit={onSubmit} className="max-w-xs items-center">
                <div className="mb-3">
                    <label htmlFor="ticker">Ticker</label>
                    <input type="text" 
                        className="TailwindCSSFormInput"
                        value={ticker} onChange={(e) => setTicker(e.target.value)}
                        placeholder="Enter ticker ..."
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                        className="TailwindCSSFormInput"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description ..." 
                        required />
                </div>
                <div className="mb-3">
                <label htmlFor="lastPrice">Last Price</label>
                    <input type="number" 
                        className="TailwindCSSFormInput"                     
                        value={lastPrice} onChange={(e) => setLastPrice(e.target.value)}
                        placeholder="0" 
                        required />
                </div>
                <div className="mb-3">
                <label htmlFor="changePercentage">Change Percentage</label>
                    <input type="number" 
                        className="TailwindCSSFormInput"                     
                        value={changePercentage} onChange={(e) => setChangePercentage(e.target.value)}
                        placeholder="0" 
                        required />
                </div>
                <div className="mb-3">
                <label htmlFor="changeValue">Change Value</label>
                    <input type="number" step='any'
                        className="TailwindCSSFormInput" 
                        value={changeValue} onChange={(e) => setChangeValue(e.target.value)}
                        placeholder="0" 
                        required />
                </div>
                <div className="flex items-center mb-3">
                    <button 
                        className="px-4 py-3 font-semibold text-sm bg-gray-500 text-white 
                            rounded-md shadow-sm 
                            hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 ease-in-out 
                            delay-100 duration-300"
                        >Add Asset
                    </button>
                </div>
            </form>
        </div>
    )
}
