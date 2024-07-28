"use client";
import React, { FC, useState, useRef } from "react";
import Select from "react-select";
import CountryFlag from "react-country-flag";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/calendar.css";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}


const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo, Democratic Republic of the", code: "CD" },
    { name: "Congo, Republic of the", code: "CG" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" },
    { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea, North", code: "KP" },
    { name: "Korea, South", code: "KR" },
    { name: "Kosovo", code: "XK" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Laos", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia", code: "FM" },
    { name: "Moldova", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar (Burma)", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestine", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syria", code: "SY" },
    { name: "Taiwan", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Vatican City", code: "VA" },
    { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
  ];
  
  const countryOptions = countries.map((country) => ({
    value: country.name,
    label: (
      <div className="flex items-center" key={country.code}>
        <CountryFlag
          countryCode={country.code}
          svg
          style={{ width: "1.5em", height: "1.5em" }}
        />
        <span className="ml-2">{country.name}</span>
      </div>
    ),
  }));
  

const customSelectStyles = {
  control: (provided: any) => ({
    ...provided,
    padding: "0.28rem",
    borderColor: "#D1D5DB", // Tailwind gray-300
    borderRadius: "0.5rem", // Tailwind rounded-lg
    boxShadow: "none",
    "&:hover": {
      borderColor: "#6366F1", // Tailwind indigo-500
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#9CA3AF", // Tailwind gray-400
  }),
};

const Modal: FC<ModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  // Set default date to today's date, formatted as dd-MM-yyyy
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(today);

  // Function to format the date as "27th July 2024"
  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";
    return `${day}${suffix} ${month} ${year}`;
  };


  const [name, setName] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [agenda, setAgenda] = useState<string | null>(null);


  const handleChange = (selectedOption: any) => {
    if (selectedOption) {
      setCountry(selectedOption.value);
    } else {
      setCountry('not mentioned');
    }
  };

  // Handle click to generate mailto URL and navigate
  const handleSendMail = () => {
    console.log("inside mail function")
    console.log(name, country, phone, budget, date, agenda)
    const mailtoUrl = `mailto:codemonkeyservices@gmail.com?subject=Meeting Request&body=Hey team Codemonkey,%0A%0Asome content to ask for a meeting%0A%0A%3Cdetails%3E%0A%0Aname%3A%20${encodeURIComponent(name)}%0Acountry%3A%20${encodeURIComponent(country)}%0Aphone%3A%20${encodeURIComponent(phone)}%0Abudget%3A%20${encodeURIComponent(budget)}%0A%3C/details%3E`;

    window.location.href = mailtoUrl; //Opens the default email client
    
  };


  return (
    isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#30303048]">
        <div className="h-[80%] w-[60%] bg-white rounded-lg drop-shadow-lg flex flex-col p-6 text-lg relative">
          <p className="font-bold text-2xl mb-6 text-center">
            Book a meeting with us in few clicks
          </p>
          <form className="flex flex-col space-y-6">
            <div className="flex space-x-4">
              <label className="flex flex-col flex-1 text-gray-700 text-start">
                <p className="px-2">Name:</p>
                <input
                  type="text"
                  className="border border-gray-300 p-3 rounded-lg mt-1 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your name"
                  required 
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="flex flex-col flex-1 text-gray-700 text-start">
                <p className="px-2">Phone Number:</p>
                <input
                  type="tel"
                  className="border border-gray-300 p-3 rounded-lg mt-1 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your phone number"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>
            <div className="flex gap-4 w-full">
              <label className="flex flex-col text-gray-700 w-full text-start">
                <p className="px-2">Country:</p>
                <Select
                  options={countryOptions}
                  className="mt-1"
                  styles={customSelectStyles}
                  placeholder="Select your country"
                  required
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col text-gray-700 w-full text-start">
                <p className="px-2 text-lg font-semibold">Select Date</p>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date)}
                  className="border border-gray-300 p-3 rounded-lg mt-1 focus:outline-none focus:border-indigo-500 custom-datepicker"
                  dateFormat="dd-MM-yyyy" // Display format for calendar interaction
                  minDate={today} // Disable dates before today
                  required
                  // Custom placeholder for display format
                  placeholderText={formatDate(startDate)}
                  // Render custom date format in the input field
                  customInput={
                    <input
                      type="text"
                      className="border border-gray-300 p-3 rounded-lg mt-1 focus:outline-none focus:border-indigo-500"
                      value={formatDate(startDate)}
                      readOnly
                      onChange={(e) => setDate(e.target.value)}
                    />
                  }
                />
              </label>
              <label className="flex flex-col text-gray-700 w-full text-start">
                <p className="px-2">What is your budget?</p>
                <select
                  className="border border-gray-300 p-3 rounded-lg mt-1 focus:outline-none focus:border-indigo-500"
                  required
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option className="font-semibold" value="1000-5000">
                    {"1,000$ - 5,000$"}
                  </option>
                  <option className="font-semibold" value="5000-10000">
                    {"5,000$ - 10,000$"}
                  </option>
                  <option className="font-semibold" value="5000-10000">
                    {"10,000$ - 15,000$"}
                  </option>
                  <option className="font-semibold" value="10000+">
                    {"15000$ +"}
                  </option>
                </select>
              </label>
            </div>
            <label className="flex flex-col text-gray-700 text-start">
              <p className="px-2">What do you want to discuss?</p>
              <textarea
                className="border border-gray-300 p-3 rounded-lg mt-1 focus:outline-none focus:border-indigo-500"
                placeholder="Enter details"
                rows={4}
                required
                onChange={(e) => setAgenda(e.target.value)}
              />
            </label>
          </form>
          <div className="absolute bottom-0 right-0 p-6 flex space-x-4 text-lg gap-2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="border-2 border-black rounded-lg w-32 py-2 hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border-2 border-black rounded-lg px-3 py-2 bg-green-600 text-white hover:bg-gray-800 transition-all flex gap-2"
            >
              <MdOutlineWhatsapp className="size-7" />
              <p> Book via whatsapp</p>
            </button>
            <button
              type="submit"
              onClick={handleSendMail}
              className="border-2 border-black rounded-lg px-3 py-2 bg-black text-white hover:bg-gray-800 transition-all flex gap-2"
            >
              <MdOutlineMailOutline className="size-7" />
              <p> Book via e-mail</p>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;


