let counters = document.getElementsByClassName('number-tickers')

let defaultDigitNode = document.createElement('div')
defaultDigitNode.classList.add('digit')

for(let i=0; i<10; i++){
    defaultDigitNode.innerHTML += i + '<br>';
}

[].forEach.call(counters, (counter) => {
    let currval = parseInt(counter.getAttribute('data-value')) || 0
    let digits = []
    
    // console.log('working')

    generateDigits(currval.toString().length)
    setValue(currval);

    setInterval(() => {
        setValue(Math.floor(Math.random() * 1000000));
    }, 2000);

    function setValue(number){
        let s = number.toString().split('').reverse().join('');
        let l = s.length;

        if(l > digits.length){
            generateDigits(l - digits.length);
        }

        for(let i=0; i<digits.length; i++){
            setDigit(i, s[i] || 0)
        }
    }

    function setDigit (digitIndex, number) {
        digits[digitIndex].style.marginTop = `-${number}em`
    }

    function generateDigits(amount){
        for(let i=0; i < amount; i++){
            // console.log('amount', amount)
            let d = defaultDigitNode.cloneNode(true);
            counter.appendChild(d);
            digits.unshift(d);
        }
    }
})