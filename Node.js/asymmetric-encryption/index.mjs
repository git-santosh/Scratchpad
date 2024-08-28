import {generateKeyPairSync, publicEncrypt, privateDecrypt , constants} from 'node:crypto'
import fs from 'fs'

// The `generateKeyPairSync` method accepts two arguments:
// 1. The type ok keys we want, which in this case is "rsa"
// 2. An object with the properties of the key
const { publicKey, privateKey } = generateKeyPairSync("rsa", {
	// The standard secure default length for RSA keys is 2048 bits
	modulusLength: 2048,
    publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
})

try {
    fs.writeFileSync('public_key.pem', publicKey);
    fs.writeFileSync('private_key.pem', privateKey);
    const encrypt = encryptText('Hello Santosh')
    const decrypt = decryptText(encrypt)
    console.log(decrypt.toString())
    // file written successfully
  } catch (err) {
    console.error(err);
  }
export function encryptText (plainText) {
    return publicEncrypt({
      key: fs.readFileSync('public_key.pem', 'utf8'),
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256'
    },
    // We convert the data string to a buffer
    Buffer.from(plainText)
    )
  }
  
  export function decryptText (encryptedText) {
    return privateDecrypt(
      {
        key: fs.readFileSync('private_key.pem', 'utf8'),
        // In order to decrypt the data, we need to specify the
        // same hashing function and padding scheme that we used to
        // encrypt the data in the previous step
        padding: constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256'
      },
      encryptedText
    )
  }