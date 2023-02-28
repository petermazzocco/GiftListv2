const MerkleTree = require("./MerkleTree");
const niceList = require("./niceList");
const verifyProof = require("./verifyProof");

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();
console.log(root);
//Root --- ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa

// Find the proof that norman block is in the list
const name = "Norman Block";
const index = niceList.findIndex((n) => n === name);
const proof = merkleTree.getProof(index);

// verify proof against the Merkle Root
console.log(verifyProof(proof, name, root)); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?
