import fs from 'node:fs';

fs.readFile('./src/profile.jpg', (err, data) => {
  if (err) throw err;
  console.log(peekBuffer(data, {length: 3}))
});

// if (this.check([0xFF, 0xD8, 0xFF])) {
//   if (this.check([0xF7], {offset: 3})) { // JPG7/SOF55, indicating a ISO/IEC 14495 / JPEG-LS file
//     return {
//       ext: 'jls',
//       mime: 'image/jls',
//     };
//   }

//   return {
//     ext: 'jpg',
//     mime: 'image/jpeg',
//   };
// }

/* -- 2-byte signatures */
// let headers = [0xFF, 0xD8, 0xFF];

// function getFileInfo(buffer: Buffer, offset: number = 0) {
//   console.log(headers);
//   return true;
// }

const peekBuffer = (buffer: Buffer, {length = Number.MAX_SAFE_INTEGER, less = false}) => {
  const end = less ? Math.min(buffer.length, length) : length;
  return buffer.subarray(0, end);
}