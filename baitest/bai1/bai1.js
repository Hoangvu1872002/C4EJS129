
let st1, st2, i=0, j, k, l=0, A, B;

 st1=prompt("nhap so thu nhat:","");
 st2=prompt("nhap so thu hai:","");

  st1=Number(st1);
  st2=Number(st2);

    if(st1 < 0 && st2 < 0){
        document.write('khong co so nguyen to');
        
        }else if(st1 > st2 && st1>0 && st2>0){
        B=st1; A=st2;
        }else if(st1 > st2 && st2 < 0){ 
        B=st1; A=1;
        }else if(st2 > st1 && st1 >0 && st2>0){
           A=st1; B=st2;  
        }else if(st2 > st1 && st1 < 0){
           B= st2; A=1;
        }
 for(j=A;j<=B;j++){
     l=0;
     for(k=2;k<=j/2;k++){
         if(j%k==0){
             l++;
         }
        }
     if(( l==0 || j==2) && j!=1 ){     
        document.write(j);
        document.write('<br/>')
            }  
     }