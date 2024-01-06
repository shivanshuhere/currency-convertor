import { useState } from "react";
import { InputBox } from "../components";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("inr");
    const [to, setTo] = useState("usd");
    const [resAmoutn, setResAmount] = useState(0);
    const currencyInfo = useCurrencyInfo(from);
    const currencyOptions = Object.keys(currencyInfo);
    const swap = () => {
        setFrom(to);
        setTo(from);
        // setResAmount(amount); // convert the res when swapped
        // setAmount(resAmoutn) ----> change the res/converted amount to amout given by user
    };

    function convert() {
        setResAmount(amount * currencyInfo[to]); // set the result value to the req amount --- by mulitplyin with the selected option value
    }
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-blue-800 text-lg"
            style={
                {
                    // backgroundImage: `url('${BackgroundImage}')`,
                }
            }
        >
            <div className="w-full">
                <h2 className="text-center text-4xl text-white mb-4 font-semibold">
                    Currency Exchange Rate
                </h2>
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1  bg-white rounded-lg">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={currencyOptions}
                                handleAmountChange={(amount) =>
                                    setAmount(amount)
                                }
                                handleCurrencyChange={(Currency) =>
                                    setFrom(Currency)
                                }
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4 bg-white rounded-lg">
                            <InputBox
                                label="To"
                                amount={resAmoutn}
                                currencyOptions={currencyOptions}
                                handleCurrencyChange={(Currency) =>
                                    setTo(Currency)
                                }
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default App;
