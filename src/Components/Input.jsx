import React, { useId } from 'react';

function InputBox({
    label, // Yeh label hai jo input field ke upar dikhaya jayega / This is the label which will be displayed above the input field
    amount, // Yeh current amount value hai jo input box mein dikhni chahiye / This is the current amount value that should be displayed in the input box
    onAmountChange, // Yeh function hai jo amount change hone pe call hoga / This is the function which will be called when the amount changes
    onCurrencyChange, // Yeh function hai jo currency change hone pe call hoga / This is the function which will be called when the currency changes
    currencyOptions = [], // Yeh available currency options ka array hai / This is an array of available currency options
    selectCurrency = "USD", // Yeh default selected currency hai / This is the default selected currency
    amountDisable = false, // Agar yeh true hoga to amount input disable rahega / If this is true, the amount input will be disabled
    currencyDisable = false, // Agar yeh true hoga to currency dropdown disable rahega / If this is true, the currency dropdown will be disabled
    className = "" // Yeh extra classes add karne ke liye hai / This is for adding extra classes
}) {
    const amountinputId = useId(); // Unique ID generate karte hain for input field / Generating a unique ID for the input field

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Yeh pura container hai jo input aur dropdown ko contain karega / This is the main container which will hold the input and dropdown */}
            <div className="w-1/2">
                {/* Label jo amount input field ke upar show hoga / Label which will show above the amount input field */}
                <label htmlFor={amountinputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                {/* Amount input field jisme user amount enter karega / Amount input field where user will enter the amount */}
                <input 
                    id={amountinputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount" // Placeholder text jab input empty ho / Placeholder text when input is empty
                    disabled={amountDisable} // Agar disable true hoga to input disabled rahega / If disabled is true, the input will be disabled
                    value={amount || ""} // Input field ki current value / The current value of the input field
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // Jab user input change karega / When the user changes the input value
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                {/* Currency type label jo dropdown ke upar show hoga / Currency type label which will show above the dropdown */}
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                {/* Currency dropdown jisme user currency select karega / Currency dropdown where user will select a currency */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // Currently selected currency / Currently selected currency
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Jab user currency change karega / When the user changes the selected currency
                    disabled={currencyDisable} // Agar disable true hoga to dropdown disabled rahega / If disabled is true, the dropdown will be disabled
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency} {/* Yeh option ke andar currency ka naam show karega / This will display the currency name inside the option */}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox; // Export kar rahe hain InputBox component ko / Exporting the InputBox component

/**
 * InputBox Component
 * 
 * Yeh ek reusable React component hai jo ek amount input field aur ek currency dropdown provide karta hai.
 * 
 * This is a reusable React component which provides an amount input field and a currency dropdown.
 * 
 * Props:
 * - label (string): Input field ke upar dikhne wala label / The label that appears above the input field
 * - amount (number): Amount input ki current value / The current value of the amount input field
 * - onAmountChange (function): Jab amount change ho to call hone wala function / The function to be called when the amount changes
 * - onCurrencyChange (function): Jab currency change ho to call hone wala function / The function to be called when the currency changes
 * - currencyOptions (array): Available currency options ka array / An array of available currency options
 * - selectCurrency (string): Default selected currency / The default selected currency
 * - amountDisable (boolean): Amount input disable karne ke liye / To disable the amount input
 * - currencyDisable (boolean): Currency dropdown disable karne ke liye / */
