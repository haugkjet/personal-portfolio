function PriceTracker (props) {

    return <div className="flex">
                <div className="text-blue-500 font-bold text-sm ml-4">{props.ticker}</div>
                <div className="text-red-500 font-bold text-sm ml-4">{props.price}</div>
                <div className="text-yellow-500 font-bold text-sm ml-4">{props.lastUpdate}</div>
            </div>
}

export default PriceTracker;