console.log('Contentscript injected');

let price = document.querySelector('.makeStyles-btb-27').textContent;
let element = document.createElement('div');
const injectedText = document.createTextNode(`Budget-to-Beat:${price}`);

element.appendChild(injectedText);
element.style.cssText = `
      background-color: #0b226b;
      color: white;
      padding: 20px 20px 20px 50px;
      text-align: center;
      border-radius: 5px;
      position:absolute;
      font-size:16px;
      top: 35px;
      right: 50px;
      font-weight:bold;
      background-image: url('./images/favicon-32x32.png');
      background-repeat:no-repeat;
      background-position-x: 10px;
      background-position-y: center;
`;

let innerElement = document.createElement('div');
const innerInjectedText = document.createTextNode(`climate change`);
innerElement.classList.add('modal');
innerElement.style.cssText = `
      display: none;
      position: absolute;
      top: 100px;
      right: 50px;
      width:100;
      height:20px;
      backdrop-filter: blur(20px);
      padding:20px;
`;
innerElement.appendChild(innerInjectedText);
element.addEventListener('mouseover', function () {
  innerElement.style.display = 'block';
});
element.addEventListener('mouseleave', function () {
  innerElement.style.display = 'none';
});

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section ',
);

parentElement.prepend(element);
parentElement.prepend(innerElement);
