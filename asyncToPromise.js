// AS-IS
async function a() {
  const a = 1;
  const b = await a;
  console.log('b', b);
}

// TO-BE
new Promise((resolve, reject) => {
 const a = 1;
  resolve(a)
}).then((b) => {
  console.log('b', b)
})

// ************************************
// *************** 설명 ***************
// ************************************

// const b는 resolve값이 a인 Promise이다.
const b = await a; // as-is
const b = Promise.resolve(a); // to-be

// await = resolve
// a = return 값
// b = Promise

// ************************************
