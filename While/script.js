//  let i=0, sum=0;
//  while (i<6) {
//      sum=sum+i;
//      i++;
//  }
//  console.log(sum);
//  console.log(`Total is : ${sum}`);

let i=5, sum=0;
do{
    sum+=i;
}while (i<5); 
console.log(sum);
//önce ciktiyi aliyor sonra sarta bakiyor sagliyormu diye

for (let a = 0; a<5; a++) {
    document.write("a",a)
    console.log(a)  
}
for (let b = 3; b<15; b++) {
    document.write("b",b)
    console.log(b)  
}
// let counter=0;
// for (let c = 1; c<50; c++) {
//     // document.write("c",c)
//     counter = counter +c
// }
// console.log("von 1 bis 50 plus die Zahlen", counter);
let counter=0;
// for (d = 0; d<50; d++) {
//      // document.write("c",c)
//     i % 10===0 ? (counter+=i) : null;
// }
// console.log("von 1 bis 50 10 division null die Zahlen", counter);

// let brand= "Clarusway"

// for(let c=0; c<brand.length; c++){
//     console.log(i+1, brand[i])
// }

for(let i=0; i<=10; i++){
    for(j=0; j<=10; j++){
        document.write(` ${i}*${j} = ${j*i}`,"<br/>");
    }
}

const number = [13,45,87,98,98,54];
let result=0;
for(let k=0; k<number.length; k++){
    result+=number[i];
}
console.log(result);

let x= prompt("Enter a Nummer");
result=1;
for(i=1; i<=x; i++){
    result=result*i;
}
console.log(result);