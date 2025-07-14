var sending_message = false;
var last_message = '';
function show_message(msg) {
  let alert_ele = document.getElementsByClassName('alert')[0];
  alert_ele.innerHTML = `
  <div class="container"><div id="title"><h1 style="background-color: #FF0000; padding: 3px; color: #FFF; font-family: 'Aptos-Black'; font-size: 29px; white-space: nowrap;">     EMERGENCY ALERT    </h1></div><marquee style="background-color: #FFFFFF; padding: 1px; color: #000; font-family: 'Aptos-Light'; font-size: 32px;" scrollamount="14">${msg}</marquee></div>
  `;
  alert_ele.style.display = 'block';
  sending_message = true;
  setTimeout(() => {
    sending_message = false;
    alert_ele.innerHTML = '';
  }, 120000); //120000
}
setInterval(() => {
    console.log('TEST');
        fetch('/current_message')
        .then(res => res.text())
        .then(data => {
            if (data != localStorage.getItem('message')) {
                localStorage.setItem('message', data);
                show_message(data);
            }
        });
}, 2000);
