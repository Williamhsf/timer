// var
const chronometer = document.querySelector('.chronometer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
// reset seconds 
let seconds = 0;
let timer;


// functions
function createSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function startClock() {
  timer = setInterval(function() {
    seconds++; // add more one
    chronometer.innerHTML = createSeconds(seconds);
  }, 1000);
}


// events
start.addEventListener('click', function(event) {
  chronometer.classList.remove('pause');
  clearInterval(timer);
  startClock();
});

pause.addEventListener('click', function(event) {
  chronometer.classList.add('pause');
  clearInterval(timer);
});

reset.addEventListener('click', function(event) {
  clearInterval(timer);
  chronometer.innerHTML = '00:00:00';
  seconds = 0;
  chronometer.classList.remove('pause');
});