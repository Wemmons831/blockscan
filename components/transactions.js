function Transactions(props){

    return(
        <div className="bg-white border-black border-4 rounded-lg">
            <div className="text-center">{props.info.name} Recent Transactions</div>

            <ul className="space-y-4">
                <li>
                    <h2 className="text-center">{props.info.t.t1.hash}</h2>
                        <div>From: {props.info.t.t1.from}</div>
                        <div>To: {props.info.t.t1.to}</div>
                
                </li>
                <li >
                    <h2 className="text-center">{props.info.t.t2.hash}</h2>
                        <div>From: {props.info.t.t2.from}</div>
                        <div>To: {props.info.t.t2.to}</div>
                
                </li>
                <li>
                    <h2 className="text-center">{props.info.t.t3.hash}</h2>
                        <div>From: {props.info.t.t3.from}</div>
                        <div>To: {props.info.t.t3.to}</div>
                
                </li>

            </ul>
        </div>
    )
}
export default Transactions