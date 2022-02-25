import {getKeys} from "./commons";
import {Connection} from "@solana/web3.js";
import {createAssociatedTokenAccount} from "@solana/spl-token";

async function main() {
    const connection = new Connection("http://127.0.0.1:8899", "confirmed")
    const keys = await getKeys()
    const res = await createAssociatedTokenAccount(connection, keys.aliceKeypair, keys.tokenPubkey, keys.carolKeypair.publicKey)
    console.log(res.toBase58())
    // CVXoh26FpEyk8yTCMLqA8t6iYbfALDZTPAGmX6B4gxmP
}

main().catch(err => console.error(err))