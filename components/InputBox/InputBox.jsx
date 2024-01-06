import { useId } from "react";

function InputBox({
    label,
    amount,
    className = "",
    handleAmountChange,
    handleCurrencyChange,
    currencyOptions = [],
    selectCurrency = "inr",
    amountDisable = false,
}) {
    const amountInputId = useId(); //uniqe value for id

    return (
        <div className={` p-4 rounded-lg text-sm flex bg-white  ${className}`}>
            <div className="w-full">
                <label
                    htmlFor="amountInputId" // attach to input
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>
                <input
                    id={amountInputId} // attach to lable
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        handleAmountChange &&
                        handleAmountChange(Number(e.target.value))
                    }
                />
            </div>
            <div className="w-1/2  text-left ">
                <p className="text-black/40 mb-2 w-full ">Currency Type</p>
                <select
                    className="   px-1 py-1 bg-gray-100 cursor-pointer outline-none text-"
                    value={selectCurrency}
                    onChange={(e) =>
                        handleCurrencyChange &&
                        handleCurrencyChange(e.target.value)
                    }
                >
                    {currencyOptions.map(
                        (
                            opt // remember the key while using loops in React to improve performance
                        ) => (
                            <option value={opt} key={opt}>
                                {opt}
                            </option>
                        )
                    )}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
