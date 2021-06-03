import {getKeys} from "./commons";
import {Connection} from "@solana/web3.js";
import {Token, TOKEN_PROGRAM_ID} from "@solana/spl-token";

async function main() {
    const connection = new Connection("http://localhost:8899", "confirmed")
    const keys = await getKeys()

    const tokenClient = new Token(connection, keys.tokenPubkey, TOKEN_PROGRAM_ID, keys.aliceKeypair)
    const res = await tokenClient.createAssociatedTokenAccount(keys.carolKeypair.publicKey)
    console.log(res.toBase58())
    // CVXoh26FpEyk8yTCMLqA8t6iYbfALDZTPAGmX6B4gxmP


}

main().catch(err => console.error(err))