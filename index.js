
$(document).ready(function(){

function turnOffLights(light) {
  if ( (light).attr('id') === 'stopButton'){
     $('#stopLight').css('background-color' , 'red');
   }else if ((light).attr('id') === 'slowButton'){
     $('#slowLight').css('background-color' , 'yellow');
   }else if ((light).attr('id') === 'goButton'){
     $('#goLight').css('background-color' , 'green');
   }
}

// turn on stop function
$('.button').on('click', turnOnStopLight);
function turnOnStopLight() {
    // change background color of stop light to red
    // changes background color of green and yellow to black
  console.log('fff');
   if ($(this).attr('id') === 'stopButton'){
      $('#stopLight').css('background-color' , 'red');
    }else {
      $('#stopLight').css('background-color' , 'black');
    }
}


// turn on slow function
$('.button').on('click',turnOnSlowLight );

function turnOnSlowLight() {
  // change background color of slow light to yellow
  // changes background color of red and green to black
   if ($(this).attr('id') === 'slowButton'){
     $('#slowLight').css('background-color' , 'yellow');
   }else {
     $('#slowLight').css('background-color' , 'black');
   }
}
// turn on go function
$('.button').on('click',turnOnGoLight);

function turnOnGoLight() {
    // change background color of go light to green
    // changes background color of red and yellow to black
    if ($(this).attr('id') === 'goButton'){
      $('#goLight').css('background-color' , 'green');
    }else {
      $('#goLight').css('background-color' , 'black');
    }
}

// set stop light click event
//event listener blah blah
 turnOffLights($(this));

// set slow light click event

// set go light click event
}) //DON'T WRITE CODE BELOW THIS
