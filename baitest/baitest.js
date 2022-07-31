// const listname=['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
// let i=1;
// let max=listname[0].length;
// for(i;i<5;i++){
//     if(max<listname[i].length){
//         max=listname[i].length;
//     }
// }
// i=0;
// for(i;i<5;i++){
//     if(max==listname[i].length){
//         console.log(listname[i]);
//     }
// }
const heavy=[60, 40, 55, 75, 64];
let i=0, m=0, n=0;
const team1[];
const team2[];
for(i;i<5;i++){
    if(i%2==1){
       team1[m]=heavy[i];
       m++
    }else{
        team2[n]=heavy[i];
        n++
    }
}
let sum=0;
i=0;
 for(i;i<=m;i++){
    sum+= Number(team1[i]);
 }
 console.log(sum);
