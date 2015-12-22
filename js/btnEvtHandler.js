//
// The handler
//

//set keyboard event listener
$("html").keypress(function (evt) {
    //if enter is pressed, make it the same as equals.
    (evt.which === 13) ? btnClicked('='): btnClicked(String.fromCharCode(evt.which));
})

//the event handler
function btnClicked(evt) {
    switch (evt) {
    case '0':
        console.log(evt);
        num(evt);
        break;
    case '1':
        console.log(evt);
        num(evt);
        break;
    case '2':
        console.log(evt);
        num(evt);
        break;
    case '3':
        console.log(evt);
        num(evt);
        break;
    case '4':
        console.log(evt);
        num(evt);
        break;
    case '5':
        console.log(evt);
        num(evt);
        break;
    case '6':
        console.log(evt);
        num(evt);
        break;
    case '7':
        console.log(evt);
        num(evt);
        break;
    case '8':
        console.log(evt);
        num(evt);
        break;
    case '9':
        console.log(evt);
        num(evt);
        break;
    case 'dot':
    case '.':
        console.log(evt);
        if (hasDecimal) {
            break;
        } else {
            num('.');
            hasDecimal = true;
            break;
        }
    case 'AC':
    case 'C':
        console.log(evt);
        clearAll();
        break;
    case 'divide':
    case '/':
        console.log(evt);
        operator('/');
        break;
    case 'multiply':
    case '*':
        console.log(evt);
        operator('x');
        break;
    case 'subtract':
    case '-':
        console.log(evt);
        operator('-');
        break;
    case "add":
    case '+':
        console.log(evt);
        operator('+');
        break;
    case 'equals':
    case '=':
        console.log(evt);
        solve();
        break;
    case 'factorial':
        console.log(evt);
        factorial();
        break;
    case 'plusmn':
        console.log(evt);
        plusmn();
        break;
    case '%':
        console.log(evt);
        percent();
        break;
    case 'root':
        console.log(evt);
        root();
        break;
    case 'cube':
        console.log(evt);
        cube();
        break;
    case 'square':
        console.log(evt);
        square()
        break;
    case 'roundUp':
        console.log(evt);
        roundUp();
        break;
    case 'roundDown':
        console.log(evt);
        roundDown();
        break;
    case '.00':
        console.log(evt);
        roundTwoDecimal();
        break;
    case '.000':
        console.log(evt);
        roundThreeDeciaml();
        break;
    case 'storeA':
        console.log(evt);
        setAlpha(getOutput());
        break;
    case 'storeB':
        console.log(evt);
        setBeta(getOutput());
        break;
    case 'storeC':
        console.log(evt);
        setGamma(getOutput());
        break;
    case 'storeD':
        console.log(evt);
        setDelta(getOutput());
        break;
    case 'A':
        console.log(evt);
        getAlpha();
        break;
    case 'B':
        console.log(evt);
        getBeta();
        break;
    case 'G':
        console.log(evt);
        getGamma();
        break;
    case 'D':
        console.log(evt);
        getDelta();
        break;
    case 'TSCO':
        console.log(evt);
        liveStockPrice("TSCO.L");
        break;
    case 'SBRY':
        console.log(evt);
        liveStockPrice("SBRY.L");
        break;
    case 'WMT':
        console.log(evt);
        liveStockPrice("WMT");
        break;
    case 'MRW':
        console.log(evt);
        liveStockPrice("MRW.L");
        break;

    default:
        console.log("defult case: " + evt);
    }
}