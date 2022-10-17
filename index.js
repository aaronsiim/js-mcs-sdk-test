require('dotenv').config()
const { mcsSDK } = require('js-mcs-sdk')

async function main() {
  const mcs = await mcsSDK.initialize({
    privateKey: process.env.PRIVATE_KEY,
    rpcUrl: process.env.RPC_URL,
  })

  const testFile = JSON.stringify({ address: mcs.publicKey })
  const fileArray = [{ fileName: `${mcs.publicKey}.txt`, file: testFile }]

  const uploadResponse = await mcs.upload(fileArray)
  console.log(uploadResponse)
}

main()