import styles from "/styles/block.module.css"
function Block({ block, chain}){
    let unix_timestamp = block.timestamp; var date = new Date(unix_timestamp * 1000); var hours = date.getHours(); var minutes = "0" + date.getMinutes(); var seconds = "0" + date.getSeconds();var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    // ^^ time format 
    let solver = ""
    if(chain == "Ethereum"){
        solver = "Mined By: "+ block.miner;
    }
    else{
        solver= "Validated By: "+ block.miner;
    }
    return(
        <div className=" bg-blue-500 text-center text-white border-4 border-sky-500 rounded-lg space-y-4">
            <div className="text-3xl font-bold">{chain} Current Block: {block.number}</div>
            <div className="grid grid-cols-3 gap-4 content-start">
                <div>Found at {formattedTime}</div>
                <div>{block.transactions.length} Total Transactions</div>
                <div>Hash: {block.hash}</div>
                <div>{solver}</div>
                <div>Size: {block.size}</div>
                <div>Gas Used: {block.gasUsed}</div>
            </div>
        </div>
    )
}

  
export default Block
