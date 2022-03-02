import Block from "/components/block.js"
import Transactions from "../components/transactions"
const Web3 = require("web3")
export default function Home(props){
  
  return(
    <body className=" bg-sky-300">
      <div>
        <Block block={props.BSC.block} chain={"Binance Smart Chain"}></Block>
        <Block block={props.ETH.block} chain={"Ethereum"}></Block>
        <Block block={props.POL.block} chain={"Polygon"}></Block>
      </div>
      <div className="grid grid-cols-3">
        <Transactions info = {props.BSC}></Transactions>
        <Transactions info = {props.ETH}></Transactions>
        <Transactions info = {props.POL}></Transactions>
      </div>



    </body>
  )
}
export async function getServerSideProps(context) {
  var web3_bsc = new Web3("https://bsc-dataseed2.binance.org/");
  var web3_eth = new Web3("https://mainnet.infura.io/v3/d3e4073c38874a8d95019644ae15d833");
  var web3_pol = new Web3("https://rpc-mainnet.maticvigil.com");
  const block_bsc = await web3_bsc.eth.getBlock('latest')
  const block_eth = await web3_eth.eth.getBlock('latest')
  const block_pol = await web3_pol.eth.getBlock('latest')
  const trans_bsc =  await {"t1": await web3_bsc.eth.getTransaction(block_bsc.transactions[1]),"t2": await web3_bsc.eth.getTransaction(block_bsc.transactions[2]),"t3": await web3_bsc.eth.getTransaction(block_bsc.transactions[3]) }
  console.log("bsc")
  const trans_eth =  await {"t1": await web3_eth.eth.getTransaction(block_eth.transactions[1]),"t2": await web3_eth.eth.getTransaction(block_eth.transactions[2]),"t3": await web3_eth.eth.getTransaction(block_eth.transactions[3]) }
  console.log("eth")
  const trans_pol =  await {"t1": await web3_pol.eth.getTransaction(block_pol.transactions[1]),"t2": await web3_pol.eth.getTransaction(block_pol.transactions[2]),"t3": await web3_pol.eth.getTransaction(block_pol.transactions[3]) }
  console.log("pol")
  return {
    props: {
      BSC:{
        name: "Binance Smart Chain",
        block: block_bsc,
        t: trans_bsc
      },
      ETH:{
        name:"Ethereum",
        block:block_eth,
        t: trans_eth
      },
      POL:{
        name:"Polygon",
        block: block_pol,
        t: trans_pol
      }  
    }, 
  }
}