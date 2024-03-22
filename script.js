

const buttonClick = document.querySelector(".button-convert")
const selectCurrency1 = document.querySelector(".select-currency1")
const selectCurrency2 = document.querySelector(".select-currency2")

const dollarValue = 4.87
const realValue = 1
const euroValue = 5.19
const poundValue = 6.03
const bitcoinValue = 128986.21
const ethereumValue = 7910.19


const convertValue = async () => {

    const inputCurrencyValue = document.querySelector(".input-amount").value
    const currencyToConvert = document.querySelector(".currency-value")
    const currencyConverted = document.querySelector(".converted-value")

    const endpoint = "http://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-GBP,USD-BRL,USD-EUR,USD-GBP,EUR-BRL,EUR-USD,EUR-GBP,GBP-BRL,GBP-USD,GBP-EUR,BTC-BRL,BTC-USD,BTC-EUR,ETH-BRL,ETH-USD,ETH-EUR"

    const data = await fetch(endpoint).then(response => response.json())
    
   
   

    //REAL
    const BRLEUR = data.BRLEUR.high
    const BRLGBP = data.BRLGBP.high
    const BRLUSD = data.BRLUSD.high
    
    //BTC

    const BTCUSD = data.BTCUSD.high
    const BTCEUR = data.BTCEUR.high
    const BTCBRL = data.BTCBRL.high

    //DOLLAR

    const USDBRL = data.USDBRL.high
    const USDEUR = data.USDEUR.high
    const USDGBP = data.USDGBP.high
   

    // EURO

    const EURBRL = data.EURBRL.high
    const EURUSD = data.EURUSD.high
    const EURGBP = data.EURGBP.high

    //POUND

    const GBPBRL = data.GBPBRL.high
    const GBPUSD = data.GBPUSD.high
    const GBPEUR = data.GBPEUR.high

    // ETH

    const ETHBRL = data.ETHBRL.high
    const ETHUSD = data.ETHUSD.high
    const ETHEUR = data.ETHEUR.high



    if (selectCurrency1.value == "real1") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)


        if (selectCurrency2.value == "real2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
        }

        if (selectCurrency2.value == "dollar2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * BRLUSD)
        }

        if (selectCurrency2.value == "euro2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * BRLEUR)
        }

        if (selectCurrency2.value == "pound2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * BRLGBP)
        }

        if (selectCurrency2.value == "bitcoin2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * realValue / bitcoinValue)
        }

        if (selectCurrency2.value == "ethereum2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "ETH" }).format(inputCurrencyValue * realValue / ethereumValue)

        }
    }

    if (selectCurrency1.value == "dollar1") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)


        if (selectCurrency2.value == "real2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * USDBRL)
        }

        if (selectCurrency2.value == "dollar2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)
        }

        if (selectCurrency2.value == "euro2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * USDEUR)
        }

        if (selectCurrency2.value == "pound2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * USDGBP)
        }

        if (selectCurrency2.value == "bitcoin2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * dollarValue / bitcoinValue)
        }

        if (selectCurrency2.value == "ethereum2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "ETH" }).format(inputCurrencyValue * dollarValue / ethereumValue)

        }
    }




    if (selectCurrency1.value == "euro1") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)


        if (selectCurrency2.value == "real2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * EURBRL)
        }

        if (selectCurrency2.value == "dollar2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * EURUSD)
        }

        if (selectCurrency2.value == "euro2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)
        }

        if (selectCurrency2.value == "pound2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * EURGBP)
        }

        if (selectCurrency2.value == "bitcoin2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "XBT" }).format(inputCurrencyValue * euroValue / bitcoinValue)
        }

        if (selectCurrency2.value == "ethereum2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "ETH" }).format(inputCurrencyValue * euroValue / ethereumValue)

        }
    }

    if (selectCurrency1.value == "pound1") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue)


        if (selectCurrency2.value == "real2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * GBPBRL)
        }

        if (selectCurrency2.value == "dollar2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * GBPUSD)
        }

        if (selectCurrency2.value == "euro2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * GBPEUR)
        }

        if (selectCurrency2.value == "pound2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue)
        }

        if (selectCurrency2.value == "bitcoin2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "XBT" }).format(inputCurrencyValue * poundValue / bitcoinValue)
        }

        if (selectCurrency2.value == "ethereum2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "ETH" }).format(inputCurrencyValue * poundValue / ethereumValue)

        }
    }

    if (selectCurrency1.value == "bitcoin1") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "XBT" }).format(inputCurrencyValue)


        if (selectCurrency2.value == "real2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * BTCBRL)
        }

        if (selectCurrency2.value == "dollar2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * BTCUSD)
        }

        if (selectCurrency2.value == "euro2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * BTCEUR)
        }

        if (selectCurrency2.value == "pound2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * bitcoinValue / poundValue)
        }

        if (selectCurrency2.value == "bitcoin2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "XBT" }).format(inputCurrencyValue)
        }

        if (selectCurrency2.value == "ethereum2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "ETH" }).format(inputCurrencyValue * bitcoinValue / ethereumValue)

        }
    }

    if (selectCurrency1.value == "ethereum1") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "ETH" }).format(inputCurrencyValue)


        if (selectCurrency2.value == "real2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * ETHBRL)
        }

        if (selectCurrency2.value == "dollar2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * ETHUSD)
        }

        if (selectCurrency2.value == "euro2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * ETHEUR)
        }

        if (selectCurrency2.value == "pound2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * ethereumValue / poundValue)
        }

        if (selectCurrency2.value == "bitcoin2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "XBT" }).format(inputCurrencyValue * ethereumValue / bitcoinValue)
        }

        if (selectCurrency2.value == "ethereum2") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "ETH" }).format(inputCurrencyValue)

        }
    }

}



function currencyChange1() {
    const currencyName1 = document.querySelector(".current-currency")
    const currencyImg1 = document.querySelector(".currency-img1")



    if (selectCurrency1.value == "real1") {
        currencyName1.innerHTML = "Real"
        currencyImg1.src = "./assets/brasilflag.png"
    }

    if (selectCurrency1.value == "dollar1") {
        currencyName1.innerHTML = "US Dollar"
        currencyImg1.src = "./assets/usaflag.png"
    }

    if (selectCurrency1.value == "euro1") {
        currencyName1.innerHTML = "Euro"
        currencyImg1.src = "./assets/euro.png"
    }

    if (selectCurrency1.value == "pound1") {
        currencyName1.innerHTML = "Pound"
        currencyImg1.src = "./assets/gbp.png"
    }

    if (selectCurrency1.value == "bitcoin1") {
        currencyName1.innerHTML = "Bitcoin"
        currencyImg1.src = "./assets/btc.png"
    }

    if (selectCurrency1.value == "ethereum1") {
        currencyName1.innerHTML = "Ethereum"
        currencyImg1.src = "./assets/eth.png"
    }

    

}

function currencyChange2() {

    const currencyName2 = document.querySelector(".converted-currency")
    const currencyImg2 = document.querySelector(".currency-img2")

    if (selectCurrency2.value == "real2") {
        currencyName2.innerHTML = "Real"
        currencyImg2.src = "./assets/brasilflag.png"
    }

    if (selectCurrency2.value == "dollar2") {
        currencyName2.innerHTML = "US Dollar"
        currencyImg2.src = "./assets/usaflag.png"
    }

    if (selectCurrency2.value == "euro2") {
        currencyName2.innerHTML = "Euro"
        currencyImg2.src = "./assets/euro.png"
    }

    if (selectCurrency2.value == "pound2") {
        currencyName2.innerHTML = "Pound"
        currencyImg2.src = "./assets/gbp.png"
    }

    if (selectCurrency2.value == "bitcoin2") {
        currencyName2.innerHTML = "Bitcoin"
        currencyImg2.src = "./assets/btc.png"
    }

    if (selectCurrency2.value == "ethereum2") {
        currencyName2.innerHTML = "Ethereum"
        currencyImg2.src = "./assets/eth.png"
    }
 convertValue()
}



selectCurrency1.addEventListener("change", currencyChange1)
selectCurrency2.addEventListener("change", currencyChange2)

buttonClick.addEventListener("click", convertValue)

