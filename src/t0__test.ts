import {ASSOCIATED_TOKEN_PROGRAM_ID, Token, TOKEN_PROGRAM_ID} from "@solana/spl-token"
import {PublicKey} from '@solana/web3.js';

async function main() {
    const mint = new PublicKey("CZyEKArwVYSKkv9im3grGNXmggbPfS8YGUovBnzoKQ4s")
    const owner = new PublicKey("CD6To88A4KrApbnDUkHrwpjMY5ufgPpVQzm9rRX5d3ro")
    const pubkey = await Token.getAssociatedTokenAddress(ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, mint, owner);
    console.log(pubkey.toBase58())
    await Token.createAssociatedTokenAccountInstruction()
    // G6GTsFAnYP1PaNc1g36SF4iuEiosfTZZCWWdnCNxxA8d
}

main().catch(err=>console.error(err))