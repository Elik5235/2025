const age = 9;
const license = true;
if(age >= 18 && license === true){
    console.log('сідай за руль');
}else if ( age < 18){
    console.log('ви не можете, бо малий');
}else if(license){
   console.log('немає прав'); 
}else{
    console.log('помилка');
}