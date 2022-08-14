//Border radius generator
function borderRadius(top_left, top_right, bottom_left, bottom_right) {
    /*Функция для создания тени*/
    document.querySelector('.border-rarius-generator .result_box').style.borderTopLeftRadius = top_left+'px'
    document.querySelector('.border-rarius-generator .result_box').style.borderTopRightRadius = top_right+'px'
    document.querySelector('.border-rarius-generator .result_box').style.borderBottomLeftRadius = bottom_left+'px'
    document.querySelector('.border-rarius-generator .result_box').style.borderBottomRightRadius = bottom_right+'px'
 
    document.querySelector('#result_border_css').value = 'border-top-left-radius: ' + top_left + 'px;' +
    '\nborder-top-right-radius: ' + top_right + 'px;' +
    '\nborder-bottom-left-radius: ' + bottom_left + 'px;' +
    '\nborder-bottom-right-radius: ' + bottom_right + 'px;';
 }
 borderRadius(75, 75, 0, 75);
 
 for(let item of document.querySelectorAll('.border-rarius-generator input')){
    item.addEventListener('input', function(e){
    /*Событие при изменении значений*/
    /*Новые значения переменных*/
    let top_left = document.querySelector('.border-rarius-generator #top_left').value; //Смещение по x
    let top_right = document.querySelector('.border-rarius-generator #top_right').value; //Смещение по y
    let bottom_left = document.querySelector('.border-rarius-generator #bottom_left').value; //Размытие
    let bottom_right = document.querySelector('.border-rarius-generator #bottom_right').value; //Растяжение
 
    borderRadius(top_left, top_right, bottom_left, bottom_right);
    })
 }

 //Text shadow generator
 function tsxtShadow({font_size, offset_x, offset_y, blur, opacity, color, rgba}) {
    /*Функция для создания тени*/
    let cssStyles = offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba;
    document.querySelector('.example').style.textShadow = cssStyles
    document.querySelector('.text-shadow-generator #resultHex').value = 'text-shadow: '+offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' +color+';\nfont-size: '+font_size+'px;'
    document.querySelector('.text-shadow-generator #resultRgba').value = 'text-shadow: ' + cssStyles + ';\nfont-size: ' + font_size + 'px;'
 }
 tsxtShadow({
    /*Вызов функции со значениями по умолчанию*/
    font_size: 40,
    offset_x: 4,
    offset_y: -1,
    blur: 0,
    opacity: 1,
    color: '#ff0000',
    rgba: 'rgba(255, 0, 0, 1)'
 });
 for(let item of document.querySelectorAll('.text-shadow-generator input')){
    item.addEventListener('input', function(e){
    /*Событие при изменении значений*/
    /*Новые значения переменных*/
    let font_size = document.querySelector('.text-shadow-generator #font_size').value//Размер шрифта
    let offset_x = document.querySelector('.text-shadow-generator #offset_x').value//Смещение по x
    let offset_y = document.querySelector('.text-shadow-generator #offset_y').value//Смещение по y
    let blur = document.querySelector('.text-shadow-generator #blur').value//Размытие
    let opacity = document.querySelector('.text-shadow-generator #opacity').value//Прозрачность
    let color = document.querySelector('.text-shadow-generator input[type="color"]').value+''//Цвет
    let red16 = color[1]+''+color[2];//Доля красного цвета в 16 системе
    let green16 = color[3]+''+color[4];//Доля зеленого цвета в 16 системе
    let blue16 = color[5]+''+color[6];//Доля синего цвета в 16 системе
    let red10 = parseInt(red16,16);//Доля красного цвета в 10 системе
    let green10 = parseInt(green16,16);//Доля зеленого цвета в 10 системе
    let blue10 = parseInt(blue16,16);//Доля синего цвета в 10 системе
    let rgba = 'rgba('+red10+', '+green10+', '+blue10+', '+opacity+')';
    
    document.querySelector('.example').style.fontSize = font_size+'px'//Изменить размер текста на примере
 
    tsxtShadow({
       /*Вызвать функцию с новыми параметрами*/
       font_size: font_size,
       offset_x: offset_x,
       offset_y: offset_y,
       blur: blur,
       opacity: opacity,
       color: color,
       rgba: rgba
    });
    })
 }

 //Box shadow generator
 function boxShadow({
   inset,
   offset_x,
   offset_y,
   blur,
   size,
   rgba
}) {
   /*Функция для создания тени*/
   let cssStyles = inset + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + size + 'px ' + rgba;
   document.querySelector('.box-shadow-generator .result_box').style.boxShadow = cssStyles;
   document.querySelector('.box-shadow-generator #resultRgba').value = 'box-shadow: ' + cssStyles + ';'
}
boxShadow({
   /*Вызов функции со значениями по умолчанию*/
   inset: '',
   offset_x: 0,
   offset_y: 0,
   blur: 8,
   size: 6,
   rgba: 'rgba(0, 0, 0, 0.5)'
});
for(let item of document.querySelectorAll('.box-shadow-generator input')){
   item.addEventListener('input', function(e){
   /*Событие при изменении значений*/
   /*Новые значения переменных*/
   let offset_x = document.querySelector('.box-shadow-generator #offset_x').value; //Смещение по x
   let offset_y = document.querySelector('.box-shadow-generator #offset_y').value; //Смещение по y
   let blur = document.querySelector('.box-shadow-generator #blur').value; //Размытие
   let size = document.querySelector('.box-shadow-generator #size').value; //Растяжение
   let opacity = document.querySelector('.box-shadow-generator #opacity').value; //Прозрачность
   let color = document.querySelector('.box-shadow-generator input[type="color"]').value + ''; //Цвет
   let red16 = color[1] + '' + color[2]; //Доля красного цвета в 16 системе
   let green16 = color[3] + '' + color[4]; //Доля зеленого цвета в 16 системе
   let blue16 = color[5] + '' + color[6]; //Доля синего цвета в 16 системе
   let red10 = parseInt(red16, 16); //Доля красного цвета в 10 системе
   let green10 = parseInt(green16, 16); //Доля зеленого цвета в 10 системе
   let blue10 = parseInt(blue16, 16); //Доля синего цвета в 10 системе
   let rgba = 'rgba(' + red10 + ', ' + green10 + ', ' + blue10 + ', ' + opacity + ')';

   let inset = '';
   if (document.querySelector('.box-shadow-generator #inset').checked) {
      inset = 'inset '
   } else {
      inset = ''
   }
   boxShadow({
      /*Вызвать функцию с новыми параметрами*/
      inset: inset,
      offset_x: offset_x,
      offset_y: offset_y,
      blur: blur,
      size: size,
      rgba: rgba
   });
   });
}

//button-form-generator
function btnForm({
   radius, 
   font_size, 
   font_color, 
   text, 
   button_size_X, 
   button_size_Y, 
   button_color, 
   padding
}){
   let btnStyles = 1
};