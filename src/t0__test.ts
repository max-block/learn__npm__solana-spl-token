import {getKeys} from "./commons";
import {Connection} from "@solana/web3.js";


async function main() {
    const connection = new Connection("http://127.0.0.1:8899", "confirmed")
    const keys = await getKeys()
    console.log(keys)
}

main().catch(err => console.error(err))