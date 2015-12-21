var alpha, beta, gamma, delta;
var hasDecimal = false;
var isNegative = false;
var isOperator = false;
var isSolved = false;
var operatorOnce = false;

var x1 = 0;
var x2 = 0;
var opr = 'NaO';

//Helper Functions
function getOutput() {
    return $(".output").html();
}

function setOutput(val) {
    $(".output").html(val.toString());
}

function appendOutput(val) {
    setOutput(getOutput() + val);
}

function getEspression() {
    return $(".espression").html();
}

function setEspression(esp) {
    $(".espression").html(esp.toString());
}

function appendEspression(esp) {
    setEspression(getEspression() + esp);
}

function replaceEndEsp(esp, len) {
    setEspression(getEspression().substring(0, getEspression().length - len) + esp);
}

function charAtIsOperator(charPos, str) {
    if (str.charAt(charPos - 1) == '/' ||
        str.charAt(charPos - 1) == 'x' ||
        str.charAt(charPos - 1) == '-' ||
        str.charAt(charPos - 1) == '+') {
        return true;
    } else {
        return false;
    }
}

function parseToNumber(str) {
    return parseFloat(str);
}




//Button function

function clearAll() {
    if ($(".AC").html() == "AC") {
        clearOutput();
        clearEspression();
        opr = 'NaO';
        isSolved = false;
        operatorOnce = false;
        x1 = 0;
        x2 = 0;
    } else if ($(".AC").html() == "C") {
        clearOutput();
    } else {
        console.error("clear button is not set correctly");
    }

}

function clearOutput() {
    setOutput("0");
    hasDecimal = false;
    isNegative = false;
    isOperator = false;
}

function clearEspression() {
    setEspression("0");
}

function getAlpha() {
    setOutput(alpha);
    appendEspression(alpha);
}

function setAlpha(val) {
    alpha = val;
    clearOutput();
}

function getBeta() {
    setOutput(beta);
    appendEspression(beta);
}

function setBeta(val) {
    beta = val;
    clearOutput();
}

function getGamma() {
    setOutput(gamma);
    appendEspression(gamma);
}

function setGamma(val) {
    gamma = val;
    clearOutput();
}

function getDelta() {
    setOutput(delta);
    appendEspression(delta);
}

function setDelta(val) {
    delta = val;
    clearOutput();
}

function root() {
    if (isSolved) clearAll();
    if (!isOperator) {
        var len = getOutput().length;
        setOutput(Math.sqrt(getOutput()));
        replaceEndEsp(getOutput(), len);
    }
}

function plusmn() {
    var n;
    if (isSolved) clearAll();
    if (!isOperator) {
        if (isNegative) {
            setOutput(-1 * parseFloat(getOutput()));
            n = getOutput();
            replaceEndEsp(n, n.length + 1);
            isNegative = false;
        } else {
            n = getOutput();
            setOutput(-1 * parseFloat(getOutput()));
            replaceEndEsp('-' + n, n.length);
            isNegative = true;
        }
    }

}

function cube() {
    if (isSolved) clearAll();
    if (!isOperator) {
        var len = getOutput().length;
        setOutput(Math.pow(parseFloat(getOutput()), 3));
        replaceEndEsp(getOutput(), len);
    }
}

function square() {
    if (isSolved) clearAll();
    if (!isOperator) {
        var len = getOutput().length;
        setOutput(Math.pow(parseFloat(getOutput()), 2));
        replaceEndEsp(getOutput(), len);
    }
}

function percent() {
    if (isSolved) clearAll();
    if (!isOperator) {
        var len = getOutput().length;
        setOutput(parseFloat(getOutput()) / 100);
        replaceEndEsp(getOutput(), len);
    }
}

function roundUp() {
    var num = parseFloat(getOutput());
    num = Math.ceil(num);
    setOutput(num);
    setEspression(num);
    hasDecimal = false;
}

function roundDown() {
    var num = parseFloat(getOutput());
    num = Math.ceil(num) - 1;
    setOutput(num);
    setEspression(num);
    hasDecimal = false;
}


function roundTwoDecimal() {
    var num = parseFloat(getOutput());
    num = Math.ceil(num * 100) / 100;
    setOutput(num);
    setEspression(num);
}

function roundThreeDeciaml() {
    var num = parseFloat(getOutput());
    num = Math.ceil(num * 1000) / 1000;
    setOutput(num);
    setEspression(num);
}

function factorial()
{
    if(hasDecimal) return setOutput("Error. Interger only.");
    var num = parseInt(getOutput());
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    setOutput(tmp);
    setEspression(tmp);
}


//fuctionality

//when a number button gets pressed what happens?
function num(n) {
    if (isOperator) {
        isOperator = false;
        clearOutput();
    }
    if (isSolved) clearAll();

    if (getOutput() === '0' && n != '.') {
        //set the out put to that number
        setOutput(n);
        (getEspression().length > 1) ? appendEspression(n): setEspression(n);
    } else {
        appendOutput(n);
        appendEspression(n);
    }
}

function operator(op) {
    var esp = getEspression();
    if (operatorOnce && !charAtIsOperator(esp.length, esp)) solve();
    if (isSolved) {
        setEspression(getOutput());
        isSolved = false;
    }

    //write the correct statement
    if (charAtIsOperator(esp.length, esp)) {
        replaceEndEsp(op, op.length);
    } else {
        //append operator to expression
        appendEspression(op);
    }
    //store the value the 1st time the operator is clicked
    if (!isOperator) x1 = getOutput();
    //store the operator
    opr = op;
    //clear the output
    //clearOutput();
    isOperator = true;
    operatorOnce = true;
}

function solve() {
    var ans;
    //when equal is pressed again ralculate again using the 2ed input as the 1st and the answer as the second variable
    if (isSolved) {
        x1 = getOutput();
    } else {
        x2 = getOutput();
    }


    //ensure variables are computable as numbers
    x1 = parseToNumber(x1);
    x2 = parseToNumber(x2);

    switch (opr) {
    case '+':
        ans = x1 + x2;
        setOutput(ans);
        isSolved = true;
        break;
    case '-':
        ans = x1 - x2;
        setOutput(ans);
        isSolved = true;
        break;
    case 'x':
        ans = x1 * x2;
        setOutput(ans);
        isSolved = true;
        break;
    case '/':
        ans = x1 / x2;
        setOutput(ans);
        isSolved = true;
        break;
    default:
        break;
    }
    operatorOnce = false;
}