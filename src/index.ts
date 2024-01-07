const testAr = new Uint8Array([0xF1, 0x1F]);


const combineBytes = (bytes: Uint8Array): Uint16Array => {
  const [first, second] = bytes;
  const combined = parseInt(`${first.toString(16)}${second.toString(16)}`, 16);
  return new Uint16Array([combined]);
}

/**
 * Takes a byte word and splits it into two bytes
 * 
 * @param word 
 */
const splitBytes = (word: number): Uint8Array => {
  // const UWord = word - 1;
  // const divisor = 0xFF + 1;
  // const first = Math.floor(UWord / divisor);
  // const second = ((UWord) % divisor) + 1;
  const first = parseInt(word.toString(16).substring(0, 2), 16);
  const second = parseInt(word.toString(16).substring(2, 4), 16);
  return new Uint8Array([first, second]);
}

const wordArr = combineBytes(testAr);
const byteArr = splitBytes(0xF11F);
const hexArr: string[] = [];
byteArr.forEach((byte) => hexArr.push(byte.toString(16)))
console.log('byteArr', hexArr);

const blockCompress = () => {}
// import fs from 'node:fs';
// import sharp, { type OutputInfo } from 'sharp';
// import crypto, { createDecipheriv, createCipheriv } from 'node:crypto';

// const algorithm = 'aes-256-cbc';
// const password = 'password';
// const secret_iv = 'annoying';
// // const key = '0102030405607080a0b0c0d0e0f1a1b1'; // crypto.createHash('sha256').update(String(password)).digest('base64').substring(0, 32);
// const key = crypto
//   .createHash('sha512')
//   .update(password)
//   .digest('hex')
//   .substring(0, 32)
// const encryptionIV = crypto
//   .createHash('sha512')
//   .update(secret_iv)
//   .digest('hex')
//   .substring(0, 16)

// fs.readFile('./src/profile.jpg', async (err, data) => {
//   if (err) throw err;
//   await sharp(data)
//     .raw()
//     .toBuffer({ resolveWithObject: true })
//     .then( async ({ data, info }) => {
//       const { width, height, channels } = info;
//       console.log('orig', data.length);
//       // add one row of pixel data for encryption header
//       // size is in bytes, so channels * width = bytes per row
//       const encrypted = encrypt(data, info);
//       console.log('encrypted', encrypted.length);
//       await sharp(encrypted, { raw: { width, height, channels } })
//         .toFile('./src/encryptedProfile.jpg')
//     })
// });

// const encrypt = (buffer: Buffer, info: OutputInfo): Buffer => {
//   const { width } = info;
//   const headerBytes = width;
//   const divisor = encryptionIV.length + 1;
//   const dataQuotient = headerBytes % divisor === 0 ? headerBytes / encryptionIV.length : Math.floor(headerBytes / divisor);
//   const dataRemainder = headerBytes % divisor === 0 ? headerBytes : headerBytes % divisor;
//   const header = buffer.subarray(0, headerBytes);
//   const headerHash = crypto.createHash('sha512')
//   const bufHeader = Buffer.alloc(8, 'annoying', 'utf8')
//   console.log('iv length', encryptionIV.length);
//   // const bufHex = buffer.toString('hex');
//   // const cipher = createCipheriv(algorithm, key, encryptionIV);
//   // return Buffer.from(cipher.update(bufHex, 'hex', 'hex') + cipher.final('hex'), 'hex');
//   return buffer;
// }

// fs.readFile('./src/encryptedProfile.jpg', async (err, data) => {
//   if (err) throw err;
//   await sharp(data)
//     .raw()
//     .toBuffer({ resolveWithObject: true })
//     .then( async ({ data, info }) => {
//       const { width, height, channels } = info;
//       console.log('info', info);
//       const decrypted = decrypt(data);

//       await sharp(decrypted, { raw: { width, height: height-1, channels } })
//         .toFile('./src/decryptedProfile.jpg')
//     })
// });

// const decrypt = (encrypted: Buffer): Buffer => {
//   const bufHeader = encrypted.subarray(0, 8);
//   const bufBody = encrypted.subarray(8);
//   console.log('bufHeader', bufHeader.toString('utf8'));
//   return bufBody;
//   // const decipher = createDecipheriv(algorithm, key, encryptionIV);

//   // return Buffer.from(decipher.update(bufHex, 'hex', 'hex') + decipher.final('hex'), 'hex');
// }


/**
 * IV is 16 bytes, so we can use the first 16 bytes of the encrypted data as the IV
 * but the total bytes cant change, so we need to mathematically compress the total bytes to fit
 * the IV and the encrypted data.
 * 
 * 1. get the total bytes of the encrypted data
 * 2. get the total bytes of the IV
 * 3. get the remaining bytes of the encrypted data - IV bytes
 * 
 * if the remaining bytes is 0, then we can use the IV bytes as the header
 * and 
 * 
 */