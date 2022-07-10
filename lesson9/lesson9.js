Bài 1:
// let chuoi, i=0;
// chuoi = prompt("nhap chuoi cua ban:","");
// while(chuoi[i] != null){
//     i++;
// }
// console.log(i);

 Bài 2:
// let st1, st2, i=0, j, k, l=0, A, B;
// do{
//     while(i>0){
//        st1=prompt("nhap lai so thu nhat la so nguyen duong:","");
//        st2=prompt("nhap lai so thu hai la so nguyen duong:","");
//        break;
//     }
//     while(i==0){
//         st1=prompt("nhap so thu nhat la so nguyen duong:","");
//         st2=prompt("nhap so thu hai la so nguyen duong:","");
//         i++;
//     }
// }while(st1<0 || st2<0)

//  st1=Number(st1);
//  st2=Number(st2);

// if(st1 > st2){
//     B=st1; A=st2;
// }else{ 
//     B=st2; A=st1;}
// console.log(A);
// console.log(B);
     SO NGUYEN TO:
// for(j=A+1;j<B;j++){
//     l=0;
//     for(k=2;k<=j/2;k++){
//         if(j%k==0){
//             l++;
//         }
//     }
//     if(l==0){
//         console.log(j);
//     }  
// } 

UOC CHUNG LON NHAT: cách 1:
// for(i=A;i>0;i--){
//     if(A%i==0 && B%i==0){
//         console.log(i);
//         break;
//     }
// }

UOC CHUNG LON NHAT: cách 2:( tối ưu)
BOI CHUNG NHO NHAT

// let D, BCNN;
// D=A*B;
// do{
//     if(A>B){
//         A=A-B;
//     }else if(B>A){
//         B=B-A;
//     }
//      if(A==B){
//         console.log(A);
//         break;
//     }
// }while(A!=B)
// BCNN=D/A;
// console.log(BCNN);

DAY SO fibonacci:
// let a=0, b=1, n;
// a=Number(a);
// b=Number(b);
// n=prompt("nhap so phan tu cua day:","");
// let i=3, c;
// c=Number(c);
// console.log(a);
// console.log(b);
// while(i<=n){
// c=a+b;
// a=b;
// b=c;
// console.log(c);
// i++;
// }

Bài 4:

// let a, b=0;
// do{
//     b=Number(b);
// a=prompt("nhap phan tu cua day so:","");
// a=Number(a);
// if(a>0){
//     b+=a;
// }
// }while(a>0)
// console.log(b);




