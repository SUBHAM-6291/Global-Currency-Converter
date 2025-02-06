import { InputBox } from "./Components"; // InputBox component import kar rahe hain / Importing the InputBox component
import useCurrencyInfo from "../src/Hooks/UseCurrencyinfo"; // Custom hook jo currency rates fetch karega / Custom hook that fetches currency exchange rates

const App = () => {
  // State variables define kar rahe hain / Defining state variables
  const [amount, setAmount] = useState(0); // User jo amount enter karega / The amount entered by the user
  const [from, setFrom] = useState("USD"); // Source currency ka state / The state for the source currency
  const [to, setTo] = useState("INR"); // Destination currency ka state / The state for the destination currency
  const [convertedAmount, setConvertedAmount] = useState(0); // Converted amount store karne ke liye / To store the converted amount

  const currencyInfo = useCurrencyInfo(from); // API se currency exchange rates la rahe hain / Fetching the exchange rates from the API
  const options = Object.keys(currencyInfo); // Currency list generate kar rahe hain / Generating the list of currencies

  // Currency swap karne ka function / Function to swap the currencies
  const swap = () => {
    setFrom(to); // Source currency ko destination se swap karna / Swap the source currency with the destination
    setTo(from); // Destination currency ko source se swap karna / Swap the destination currency with the source
    setConvertedAmount(amount); // Converted amount ko update karna / Update the converted amount
    setAmount(convertedAmount); // Amount ko update karna / Update the amount with the converted value
  };

  // Amount convert karne ka function / Function to convert the amount
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]); // Conversion rate ke according amount update karna / Updating the converted amount based on the conversion rate
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600')`, // Stylish background set kar rahe hain / Setting a stylish background
      }}
    >
      {/* Yeh main container hai jo pura UI contain karega / This is the main container that will hold the entire UI */}
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-6 backdrop-blur-sm bg-white/30 shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Form submit hone se page reload na ho / Prevent the page reload when form is submitted
            convert(); // Convert function call karega / Calling the convert function
          }}
        >
          {/* Input Box jisme user amount enter karega / Input box where user will enter the amount */}
          <div className="w-full mb-4">
            <InputBox
              label="From" // Label jo dikhai dega / The label to be displayed
              amount={amount} // Input field ka value / The value of the input field
              currencyOptions={options} // Currency dropdown ke options / Options for the currency dropdown
              onCurrencyChange={(currency) => setFrom(currency)} // Jab currency change ho / When the currency is changed
              selectCurrency={from} // Selected currency / The selected currency
              onAmountChange={(amount) => setAmount(amount)} // Amount change hone par update karega / Update the amount when changed
            />
          </div>

          {/* Swap button jo currencies ko switch karega / Swap button that switches the currencies */}
          <div className="relative w-full flex justify-center my-2">
            <button
              type="button"
              className="border-2 border-white rounded-full bg-blue-600 text-white px-3 py-1 shadow-md hover:bg-blue-700 transition"
              onClick={swap} // Swap function call karega / Calling the swap function
            >
              Swap
            </button>
          </div>

          {/* Converted Amount Box / Converted amount display box */}
          <div className="w-full mt-4 mb-6">
            <InputBox
              label="To" // Label jo dikhai dega / The label to be displayed
              amount={convertedAmount} // Converted amount dikhane ke liye / To display the converted amount
              currencyOptions={options} // Currency dropdown ke options / Options for the currency dropdown
              onCurrencyChange={(currency) => setTo(currency)} // Jab currency change ho / When the currency is changed
              selectCurrency={to} // Selected currency / The selected currency
              amountDisable // Amount field disable rahega / The amount field will be disabled
            />
          </div>

          {/* Convert Button jo conversion perform karega / Convert button that performs the conversion */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()} {/* Convert button label / The label of the convert button */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App; // Component export kar rahe hain / Exporting the component

/**
 * Currency Converter Application / Currency Converter Application
 * 
 * Yeh ek React-based application hai jo real-time currency conversion perform karta hai. / This is a React-based application that performs real-time currency conversion.
 * 
 * Features: / Features:
 * - User ek amount enter kar sakta hai jo kisi bhi currency mein ho sakta hai. / The user can enter an amount in any currency.
 * - User from aur to currencies select kar sakta hai. / The user can select the "from" and "to" currencies.
 * - Swap button currencies ko interchange karta hai. / The swap button interchanges the currencies.
 * - Convert button exchange rate ke hisaab se amount convert karta hai. / The convert button converts the amount based on the exchange rate.
 * - Background stylish aur visually appealing hai. / The background is stylish and visually appealing.
 * 
 * Components: / Components:
 * - InputBox: Amount aur currency select karne ke liye. / InputBox: For selecting the amount and currency.
 * - useCurrencyInfo Hook: Exchange rates fetch karne ke liye. / useCurrencyInfo Hook: To fetch exchange rates.
 * - App: Main component jo UI aur logic handle karta hai. / App: The main component that handles the UI and logic.
 * 
 * Working: / Working:
 * - Application useCurrencyInfo hook ka use karta hai taaki wo real-time exchange rates fetch kar sake. / The application uses the useCurrencyInfo hook to fetch real-time exchange rates.
 * - User amount enter karta hai aur currency select karta hai. / The user enters the amount and selects the currency.
 * - Convert button press karne par exchange rate ke basis par converted amount dikhai deta hai. / When the convert button is pressed, the converted amount is displayed based on the exchange rate.
 * - Swap button dono currencies ko interchange kar deta hai. / The swap button interchanges both currencies.
 * 
 * Usage Example: / Usage Example:
 * <App /> // Isko render karne se application load hoga / Rendering this will load the application
 * 
 * Dependencies: / Dependencies:
 * - React: Frontend framework. / React: The frontend framework.
 * - Tailwind CSS: Styling ke liye. / Tailwind CSS: For styling.
 * - API (useCurrencyInfo hook): Exchange rates fetch karne ke liye. / API (useCurrencyInfo hook): To fetch exchange rates.
 */
