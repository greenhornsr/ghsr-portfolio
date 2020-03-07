// grab the html element with the class of number-tickers
let counters = document.getElementsByClassName('number-tickers')

// create a div element node, give it a class of digit
let defaultDigitNode = document.createElement('div')
defaultDigitNode.classList.add('digit')

// loop through numbers 0-9, write the number to the defaultDigitNode element, add a new line break
for(let i=0; i<10; i++){
    defaultDigitNode.innerHTML += i + '<br>';
}

// use the JS function .call() to loop through anonymous array, passing the counters number-tickers element and the foreach cb function.
[].forEach.call(counters, (counter) => {
    // declare current val, assign it to the parsed integer version of data-value attribute string of (1000000) or 0.  the data-value attribute is a part of the counters html element; counter is a single instance of counters
    let currval = parseInt(counter.getAttribute('data-value')) || 0
    // declare array; call it digits
    let digits = []
    
    // declared below.
    generateDigits(currval.toString().length)
    setValue(currval);

    // use setInterval to determine the frequency of calling setValue function(declared below)
    setInterval(() => {
        setValue(Math.floor(Math.random() * 1000000));
    }, 2000);

    // converts the number to a string, split, reverse, join
    function setValue(number){
        // change the int to string, split into array, reverse the order, join it back into a single string 
        let s = number.toString().split('').reverse().join('');
        console.log("my S: ", s)
        // length of s, to know when to produce a 0
        let l = s.length;
        console.log("my L: ", l)
        console.log("digits.length: ", digits.length)
        // if length of the number is greater than digits array length, invoke generateDigits passing l minus length of digits array.  i.e. 7-6.  Unlikely to hit given the value within data-value attribute.  if you reduce that starting value to something less, you can see this code run.
        if(l > digits.length){
            console.log('TEST! TEST!!')
            generateDigits(l - digits.length);
        }

        // for each i while i is less than the length of digits array, invoke setDigit(declared below)
        for(let i=0; i<digits.length; i++){
            // pass setDigit i as the digitIndex, and the i index of the s array as the number or 0
            setDigit(i, s[i] || 0)
        }
    }

    // takes in an 'index' number and a 'number' argument, setting the digit[index] to the number via style.marginTop
    function setDigit (digitIndex, number) {
        digits[digitIndex]
        .style.marginTop = `-${number}em`
    }

    // takes in a number, adds a new defaultDigitNode cloned element/node to the counter number-tickers div and adds it to the front of the array.
    function generateDigits(amount){
        for(let i=0; i < amount; i++){
            // console.log('amount', amount)
            // create a new cloned node/element of defaultDigitNode
            let d = defaultDigitNode.cloneNode(true);
            // append it to the counter number-tickers div
            counter.appendChild(d);
            // unshift the cloned node to the front of the digits array
            digits.unshift(d);
        }
    }
})