const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const server = "http://localhost:1225";
// New merkle tree object
const merkleTree = new MerkleTree(niceList);
// Find a name
let x = Math.floor(Math.random() * niceList.length);
let name = niceList[x];

// Find root
const root = merkleTree.getRoot();
console.log("Root number:", root);

// Find proof
const index = niceList.findIndex((n) => n === name);
const proof = merkleTree.getProof(index);
console.log("Proof:", proof);

async function main() {
  try {
    const { data: gift } = await axios.post(`${server}/gift`, {
      name: name,
      proof: proof,
    });
    console.log({ gift });
  } catch (err) {
    console.log("Error message:", err);
  }
}

main();
