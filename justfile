localnet-validator:
	solana-test-validator -r --ledger localnet/ledger

localnet-init:
	solana airdrop 1 4ipsPDTvbGwAB9bkm8hEJ5si2PU1wn7MpyZhV93GqQCX -ul
	spl-token create-token localnet/token.json -ul
	spl-token create-account 5YpwAAkr4ZFQtxCA1Z2SnTDFFLEnUvhrcJY32ygqBfrH --owner localnet/alice.json -ul
	spl-token create-account 5YpwAAkr4ZFQtxCA1Z2SnTDFFLEnUvhrcJY32ygqBfrH --owner localnet/bob.json -ul
	spl-token mint 5YpwAAkr4ZFQtxCA1Z2SnTDFFLEnUvhrcJY32ygqBfrH 100 J7psmEJWqfZkf8s7Y5bzz1gMCaeBmNvxymoH9fp5jETn -ul # mint to alice 100 SPL
