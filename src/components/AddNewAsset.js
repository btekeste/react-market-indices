import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddNewAsset = () => {
    const [ticker, setTicker] = useState('n/a');
    const [description, setDescription] = useState('n/a');
    const [lastPrice, setLastPrice] = useState(0);
    const [changePercentage, setChangePercentage] = useState(0);
    const [changeValue, setChangeValue] = useState(0);

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
        <div>
            <h3>Add New Asset</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="ticker">Ticker</label>
                    <input type="text" value={ticker} onChange={(e) => setTicker(e.target.value)}
                        placeholder="Enter ticker..." />
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description..." />
                </div>
                <div className="form-control">
                <label htmlFor="lastPrice">Last Price</label>
                    <input type="number" value={lastPrice} onChange={(e) => setLastPrice(e.target.value)}
                        placeholder="Enter lastPrice..." />
                </div>
                <div className="form-control">
                <label htmlFor="changePercentage">Change Percentage</label>
                    <input type="number" value={changePercentage} onChange={(e) => setChangePercentage(e.target.value)}
                        placeholder="Enter changePercentage..." />
                </div>
                <div className="form-control">
                <label htmlFor="changeValue">Change Value</label>
                    <input type="number" value={changeValue} onChange={(e) => setChangeValue(e.target.value)}
                        placeholder="Enter changeValue..." />
                </div>
                <button className="button">Add New Asset</button>
            </form>
        </div>
    )
}
