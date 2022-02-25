import {getAssociatedTokenAddress} from "@solana/spl-token"
import {PublicKey} from '@solana/web3.js'

async function main() {
    const mint = new PublicKey("CZyEKArwVYSKkv9im3grGNXmggbPfS8YGUovBnzoKQ4s")
    const owner = new PublicKey("CD6To88A4KrApbnDUkHrwpjMY5ufgPpVQzm9rRX5d3ro")
    const pubkey = await getAssociatedTokenAddress(mint, owner)
    console.log(pubkey.toBase58())
    // G6GTsFAnYP1PaNc1g36SF4iuEiosfTZZCWWdnCNxxA8d
}

main().catch(err => console.error(err))