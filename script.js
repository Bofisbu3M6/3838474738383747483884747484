
const loginPage = document.getElementById('loginPage');
const mainPage = document.getElementById('mainPage');
const unlockBtn = document.getElementById('unlockBtn');
const logoutBtn = document.getElementById('logoutBtn');
const keyInput = document.getElementById('keyInput');
const userBadge = document.getElementById('userBadge');

const validKeys = {
  FREE123: 'FREE',
  VIP999: 'VIP',
  ADMIN777: 'ADMIN'
};

function openApp(type){
  loginPage.classList.remove('active');
  mainPage.classList.add('active');
  userBadge.innerText = type;
}

unlockBtn.addEventListener('click', ()=>{
  const key = keyInput.value.trim();

  if(validKeys[key]){
    localStorage.setItem('spernew_key', key);
    openApp(validKeys[key]);
  }else{
    alert('Key không hợp lệ');
  }
});

logoutBtn.addEventListener('click', ()=>{
  localStorage.removeItem('spernew_key');

  mainPage.classList.remove('active');
  loginPage.classList.add('active');
});

const saved = localStorage.getItem('spernew_key');

if(saved && validKeys[saved]){
  openApp(validKeys[saved]);
}

document.querySelectorAll('.navbar button').forEach(btn=>{
  btn.addEventListener('click', ()=>{

    document.querySelectorAll('.navbar button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.nav;

    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));

    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  });
});

document.querySelector('.navbar button').classList.add('active');

document.getElementById('deviceInfo').innerText =
  navigator.platform + ' | ' + navigator.userAgent.split(')')[0] + ')';

const dragSlider = document.getElementById('dragSlider');
const precisionSlider = document.getElementById('precisionSlider');

dragSlider.addEventListener('input', ()=>{
  document.getElementById('dragValue').innerText = dragSlider.value;
});

precisionSlider.addEventListener('input', ()=>{
  document.getElementById('precisionValue').innerText = precisionSlider.value;
});

console.log('Converted from React/Replit source');
