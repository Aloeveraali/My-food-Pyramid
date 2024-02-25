

/*The second parameter is the function we want to call when the event occurs.*/
document.addEventListener('DOMContentLoaded', function() {


    // Assign event listeners to all controls

    //this selects the elmenets with the class '.pyramid-level' then 'forEach' is then called on thsi node list to iterate over each element.

    document.querySelectorAll('.pyramid-level').forEach(level => {
      
      // mouseenter event is triggered when the mouse pointer enters the element
      //the call back function is executed when the event occurs
      level.addEventListener('mouseenter', function() {

        //inside the pyramid level become visible whe the mouse hovers over the pyramidlevel by remocing a css class(hidden) that was hiding it 
        this.querySelector('.controls').classList.remove('hidden');
      });
  
      /*Inside the mouseleave event listener,
       this line finds the first child element of level that matches the selector 
       .controls and adds the class hidden to it, 
       hiding the element by changing the css display .*/
      level.addEventListener('mouseleave', function() {
        this.querySelector('.controls').classList.add('hidden');
        /*t event listener waits for mouse to leave the area of
         a .pyramid-level it automatically hides the 
         controls that were visible during the mouseenter event.  */
      });
  /*s declare three constants withthe othe  .pyramid-level
   element being processed. Each constant represents an element inside the .pyramid-level element:
    minusButton for the element with the class .minus, plusButton for the .plus element, 
    and numberDisplay for the .number element.*/
      const minusButton = level.querySelector('.minus');
      const plusButton = level.querySelector('.plus');
      const numberDisplay = level.querySelector('.number');
  
      /*Adds a click event listener to the minusButton. When the button is clicked,
       the enclosed callback function is executed.*/
      minusButton.addEventListener('click', function() {

        /*Inside the click event listener for the minusButton, this code snippet first parses 
        the integer value of the numberDisplay element's text content. If the current value is greater than 0, 
        it decreases this value by 1 and updates the numberDisplay element's text content to reflect this new value.*/
        let currentValue = parseInt(numberDisplay.textContent);
        if (currentValue > 0) {
          numberDisplay.textContent = currentValue - 1;
        }
      });
  
      plusButton.addEventListener('click', function() {
        let currentValue = parseInt(numberDisplay.textContent);
        numberDisplay.textContent = currentValue + 1;
      });
    });
  });
  