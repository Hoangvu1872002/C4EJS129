// let number = Number(number=prompt("nhap so thu nhat:"));
// let number = Number(number=prompt("nhap so thu hai:"));
// function kiemtrasonguyento()


// let name=prompt("nhap ten cua ban:","");
// function logger(a){
//     console.log(`Xin chao ${a}`);
// }
// logger(name);

// Cho 1 mảng học sinh: arrStudents = [‘Lan’, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘Trinh’];
// 		+ Thêm ‘An’ vào sau ‘Ngạn’ -> Hiển thị [‘Lan’, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘An’, ‘Trinh’];
// 		+ Xóa ‘Ngọc’ -> hiển thị [‘Lan’, ‘Điệp’,,’Ngạn’, ‘Trinh’];
// 		+ Tìm kiếm và hiển thị vị trí của người tên là Trinh  trong mảng
// 		+ Cập nhật ‘Lan’ thành ‘Phú’ -> Hiển thị [‘Phú, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘Trinh’];
 let i, j=0;
 let arrStudents = ['Lan', 'Điệp', 'Ngọc','Ngạn', 'Trinh'];
for(i=0 ;i <= arrStudents.length; i++ ){
    if( arrStudents[i]==='Lan'){
        arrStudents[i]="Phú";
        j++;
    }
}
console.log(arrStudents);
if(j==0){
    console.log('không tìm thấy tên !');
}
 const number1 =[ 0,1,2,3,4,5,6,7,8];
 let sum = 0;
 for( let number of number1){
    sum += number;
 }
 console.log(sum);


 
 const newarrStudent = arrStudents.map((student)=>{return student + " ngu";});
 console.log(newarrStudent);


//  const number1 =[ 0,1,2,3,4,5,6,7,8];
 const newnumber1 = number1.map((number1)=>{
    return number1 **2;
 });

//  let number3;
//  const newnumber2 = number1.map((number2)=>{
//    if(number2%2==1){
//     number3= number2;
//    }else{
//     number3= null;
//    }
//    return number3;
//  });
//  console.log(newnumber1);
//  console.log(newnumber2);

const newnumber2 = number1.filter((number2, index)=>{
        return number2%2==1 && index%3==0;
    })
       console.log(newnumber1);
  console.log(newnumber2);
