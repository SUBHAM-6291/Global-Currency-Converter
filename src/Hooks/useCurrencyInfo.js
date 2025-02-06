import { useEffect, useState } from "react";

// Custom hook used for fetching the exchange rate of any given currency
function useCurrencyinfo(currency) {
    // useState hook to store the exchange rates in the state, initially set to an empty object
    const [rates, setRates] = useState({}); 

    // useEffect hook to perform a side effect (fetching data from an API)
    // This will run every time the 'currency' prop changes
    useEffect(() => {
        // Fetch request to get the exchange rates based on the provided currency
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then(res => res.json()) // Convert the response to JSON format
            .then(data => {
                // Once the data is fetched, update the state with the exchange rates
                setRates(data.rates); 
                console.log(data); // Print the fetched data to the console for debugging purposes
            })
            .catch(err => console.error("Error:", err)); // Log any errors to the console if the fetch request fails

    }, [currency]); // This effect will run whenever the 'currency' value changes

    // Returning the 'rates' object, which contains exchange rates for various currencies
    return rates; 
}

export default useCurrencyinfo;

/**
 * useCurrencyInfo Hook Documentation in English:
 * 
 * `useCurrencyInfo` is a custom React hook that fetches the latest exchange rates for a given currency.
 * It uses the `fetch` API to retrieve the data from an external exchange rate service.
 * The hook then stores the data in the component state and returns it, making it accessible for use in your React components.
 * 
 * Parameters:
 * - `currency` (string): This is the base currency for which exchange rates are fetched. 
 *   For example, if you pass "USD", it fetches exchange rates for USD. 
 *   If you pass "INR", it fetches exchange rates for INR.
 * 
 * Return Value:
 * - `rates` (object): An object containing exchange rates for various currencies. 
 *   The keys represent the currency codes (e.g., "USD", "INR", "EUR"), and the values are the exchange rates of those currencies relative to the base currency.
 * 
 * Example Usage:
 * 
 * const rates = useCurrencyInfo("USD");
 * console.log(rates["INR"]); // If USD is the base currency, this will print the exchange rate for USD to INR.
 * 
 * Code Explanation:
 * 
 * - `useState`: Initializes the state variable `rates` to store the exchange rates. It is initially set to an empty object.
 * - `useEffect`: Whenever the `currency` prop changes, this effect runs and triggers the fetch request to the API to get the latest exchange rates.
 * - `fetch`: Sends a request to the external API to fetch the exchange rates for the given currency.
 * - `then`: If the request is successful, the response data is stored in the `rates` state and printed to the console for debugging.
 * - `catch`: If there is an error (e.g., network issues or invalid currency), the error is logged to the console.
 * - `return rates`: Returns the `rates` object containing the exchange rates for various currencies.
 * 
 * Notes:
 * - The hook is asynchronous because fetching the data from the API takes time. The `useEffect` ensures that data is fetched when the component mounts or when the `currency` changes.
 * - The API response contains a `rates` property that holds the exchange rates. This is stored in the `rates` state variable.
 * 
 * Limitations:
 * - This hook fetches exchange rates relative to the base currency only.
 * - The external API (Exchangerate API) may have rate limits or restrictions on usage.
 * 
 * Example:
 * If you use `useCurrencyInfo("USD")`, you will get the exchange rates for USD. The response might look like this:
 * {
 *   "INR": 74.58,
 *   "EUR": 0.85,
 *   "GBP": 0.75,
 *   "JPY": 110.22,
 *   ...
 * }
 * 
 * You can access the exchange rate for INR using `rates["INR"]`.
 */








