// //--I declare that this code was written by me. 

// I will not copy or allow others to copy my code. 

// I understand that copying code is considered as plagiarism.



// Student Name: Wei QingZhen

// Student ID: 22036164

// Class: C369-3D-E63C-A

// Date/Time Last modified:14/8/2023 2.54pm-->

function getExchange() {
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const pType = document.getElementById("pType").value;
    localStorage.setItem("amount", amount);
    localStorage.setItem("pType", pType);
    let exchange;
    switch (type) {
        case "USD":
            exchange = amount * 0.75;
            break;
        case "Euro":
            exchange = amount * 0.68;
            break;
        case "Pound":
            exchange = amount * 0.58;
            break;
        default:
            exchange = 0;
    }
    const roundedExchange = exchange.toFixed(2);
    
    document.getElementById("output").value = roundedExchange;
    
}


function getOSExchange() {
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const pType = document.getElementById("pType").value;
    localStorage.setItem("amount", amount);
    localStorage.setItem("pType", pType);
    let exchange;
    if (amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (type === pType) {
        alert("The to and from currencies cannot be the same.");
        return;
    }
    exchange = amount * getRate(pType, type);
    const roundedExchange = exchange.toFixed(2);
    
    document.getElementById("output").value = roundedExchange;
    
}



function getRate(pType, type) {
    const rate = {
        "USD": {
            "SGD": 1.3207,
            "Euro": 0.91,
            "Pound": 0.70
        },
        "Euro": {
            "SGD": 1.10,
            "USD": 1.08,
            "Pound": 0.88
        },
        "Pound": {
            "SGD": 1.44,
            "Euro": 1.13,
            "USD": 1.13
        },
        "SGD": {
            "USD": 0.76,
            "Euro": 0.91,
            "Pound": 0.70
        }
    };
    const exchangeRate = rate[pType][type];

    return exchangeRate;
}


function getRate(pType, type) {
    const rate = {
        "USD": {
            "SGD": 1.3207,
            "Euro": 0.91,
            "Pound": 0.70
        },
        "Euro": {
            "SGD": 1.10,
            "USD": 1.08,
            "Pound": 0.88
        },
        "Pound": {
            "SGD": 1.44,
            "Euro": 1.13,
            "USD": 1.13
        },
        "SGD": {
            "USD": 0.76,
            "Euro": 0.91,
            "Pound": 0.70
        }
    };
    const exchangeRate = rate[pType][type];

    return exchangeRate;
}

function enable(){
    document.getElementById("payment").removeAttribute("disabled");
}