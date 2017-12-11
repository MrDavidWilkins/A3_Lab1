(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   // defined variables
   var cardetails = document.querySelectorAll('.data-ref'),
        costofcar = document.querySelector('.priceInfo'), //container with price information
        nameofmodel = document.querySelector('.modelName'),// container with model number
        carinfo = document.querySelector('.modelDetails');// container with car specifations
   //this is the container that holds all the info

       function details (){
         const url = './includes/functions.php?carModel=' + this.id;

         fetch(url) //fetch api
         .then((resp) => resp.json()) //convert to json
         .then(({ modelName, pricing, modelDetails, model }) => {
           costofcar.innerHTML = pricing;
           nameofmodel.textContent = modelName;
           carinfo.textContent = modelDetails;

           cardetails.forEach(function(Element,index){
           	Element.classList.add('nonActive');
           });

           document.querySelector(`#${model}`).classList.remove('nonActive');;
         })
         .catch(function(error){
           console.log(error);
         })

       }



       cardetails.forEach(function(Element,index){
        Element.addEventListener('click', details, false);
       });



})();
