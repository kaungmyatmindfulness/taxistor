type CountryCode = "TH" | "MM";
declare function calculatePersonalIncomeTax(taxableMonthlyIncome: number, countryCode: CountryCode): number;

export { calculatePersonalIncomeTax };
