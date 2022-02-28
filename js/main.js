var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elResultPeople = document.querySelector(".people")
var elResultBycicle = document.querySelector(".bycicle")
var elResultCar = document.querySelector(".car")
var elResultAirplane = document.querySelector(".airplane")



elForm.addEventListener("submit" , function(evt){
   evt.preventDefault();
   
   var elInputVal = Number(elInput.value.trim());
   
   var elError = document.querySelector(".error");
   var peopleSpeed = 3.6;
   var bycicleSpeed = 20.1;
   var carSpeed = 70;
   var airplaneSpeed = 800;
   
   
   if(elInputVal <= 0 || isNaN(elInputVal)){
      elError.textContent = "Iltimos 0 dan katta raqam kiriting, yoki son kiriting !!!";
      
      elError.classList.add("result-error");
      elError.classList.remove("result-success");
      
      
   }else{
      
      elError.textContent = " ";
      
      elError.classList.remove("result-error");
      elError.classList.add("result-success")
   }
   
   
   
   
    function timePeople(distance, speed){
      if( elInputVal > 0){
         var hour = Math.floor(elInputVal / peopleSpeed);
         var minute = Math.floor((elInputVal / peopleSpeed - hour) * 60);
         return hour + ' soat ' + minute + ' minut ';
      }else{
         return elInputVal = "!!!";
      }
   }
   
   function timeBycicle(distance, speed){
      if( elInputVal > 0){
         var hour = Math.floor(elInputVal / bycicleSpeed);
         var minute = Math.floor((elInputVal / bycicleSpeed - hour) * 60);
         return hour + ' soat ' + minute + ' minut ';
      }else{
         return elInputVal = "!!!";
      }
   }
   
   function timeCar(distance, speed){
      if( elInputVal > 0){
         var hour = Math.floor(elInputVal / carSpeed);
         var minute = Math.floor((elInputVal / carSpeed - hour) * 60);
         return hour + ' soat ' + minute + ' minut ';
      }else{
         return elInputVal = "!!!";
      }
   }
   
   
   function timeAirplane(distance, speed) {
      if( elInputVal > 0){
         var hour = Math.floor(elInputVal / airplaneSpeed);
         var minute = Math.floor((elInputVal / airplaneSpeed - hour) * 60);
         return hour + ' soat ' + minute + ' minut ';
      }else{
         return elInputVal = "!!!";
      }
   }
   
   elResultPeople.textContent = timePeople();
   elResultBycicle.textContent = timeBycicle();
   elResultCar.textContent = timeCar();
   elResultAirplane.textContent = timeAirplane();
   
});
