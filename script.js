const total = document.getElementById('total-count');
const curr = document.getElementById('curr-count');

const day = document.getElementById('day');
const time = document.getElementById('time');
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday']

function currentTime() {
  const d = new Date();
  day.textContent = days[d.getDay()];
  time.textContent = `${d.getHours()}:${d.getMinutes()}`
  let t = setTimeout(function(){ currentTime() }, 60000); 
}

currentTime();

function incrementCurr() {
  curr.textContent = parseInt(curr.textContent) + 1;
}

function increment() {
  total.textContent = parseInt(total.textContent) + 1;
}

