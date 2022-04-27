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

// ********************************************************
// *************** 추가 ***********************************
// ********************************************************
// await은 Promise의 resolve한 값을 리턴해야지 멈춰준다!!
// ********************************************************
// ********************************************************
// await 예시
function delayP(ms){
 return new Promise((resolve, reject) => {
   setTimeout(resolve, ms);
  });
}

async function a() {
  try {
    console.log('1')
    await delayP(1000);
    console.log('2')
    await delayP(1000);
    console.log('3')
    await delayP(1000);    
    console.log('4')
  }catch(err) {
    console.error(err);
  }
}

// await은 Promise의 resolve한 값을 리턴해야지 멈춰준다!!
async function a() {
  const a = await 1;
  const b = await Promise.resolve(1);  
}




