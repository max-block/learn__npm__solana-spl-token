import {Keypair, PublicKey} from "@solana/web3.js"
import {ASSOCIATED_TOKEN_PROGRAM_ID, Token, TOKEN_PROGRAM_ID} from "@solana/spl-token"
import {readFileSync} from "fs";

function readKeypairFromPath(path: string): Keypair {
    const data = JSON.parse(readFileSync(path, "utf-8"))
    return Keypair.fromSecretKey(Buffer.from(data))
}

export interface Keys {
    tokenPubkey: PublicKey
    aliceKeypair: Keypair
    bobKeypair: Keypair
    carolKeypair: Keypair
    aliceToken: PublicKey
}

export async function getKeys(): Promise<Keys> {
    const tokenKeypair = readKeypairFromPath(__dirname + "/../localnet/token.json")
    const aliceKeypair = readKeypairFromPath(__dirname + "/../localnet/alice.json")
    const bobKeypair = readKeypairFromPath(__dirname + "/../localnet/bob.json")
    const carolKeypair = readKeypairFromPath(__dirname + "/../localnet/carol.json")
    const aliceToken = await Token.getAssociatedTokenAddress(ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, tokenKeypair.publicKey, aliceKeypair.publicKey);
    return {tokenPubkey: tokenKeypair.publicKey, aliceKeypair, bobKeypair, carolKeypair, aliceToken}


}