let st1, n, a;
n=0;
do{
         while(n>0){
            st1=prompt("nhap lai x la so nguyen tu 1 den 10:","");
            break;
         }
         while(n==0){
             st1=prompt("nhap x la so nguyen tu 1 den 10:","");
             n++;
        }
        st1=Number(st1);
        a=st1 % 1;
     }while(st1 < 1 || st1 > 10 || a!=0  )
let x = st1 ;

function numberOneTriangle(x){
    for (let i=1; i<=x; i++){
        for (let j=1; j<=i; j++){
            document.write('*')
        }
        document.write('<br/>')
    }
}

numberOneTriangle(x);