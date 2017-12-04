(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   // defined variables 
   var cardetails = document.querySelectorAll('.data-ref'),
   //this is the container that holds all the info

       costofcar = document.querySelector('.priceInfo'), //container with price information
       nameofmodel = document.querySelector('.modelName'),// container with model number
       carinfo = document.querySelector('.modelDetails');// container with car specifations

       cardetails.forEach(function(Element,index){
       	Element.addEventListener('click', details,false);
       });

       function details (){
       	let run = carData[this.id];
       	nameofmodel.firstChild.nodeValue = run.modelName;
       	carinfo.firstChild.nodeValue = run.modelDetails;
        costofcar.firstChild.nodeValue = run.priceInfo;

        cardetails.forEach(function(model) {
        	model.classList.add('nonActive');
        });

        
           this.classList.remove("nonActive");
       }




})();
