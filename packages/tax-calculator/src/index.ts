type CountryCode = "TH" | "MM";

function calculatePersonalIncomeTaxMyanmar(taxableMonthlyIncome: number) {
	const taxableIncome = taxableMonthlyIncome * 12;
	if (taxableIncome <= 2000000) {
		return 0;
	} else if (taxableIncome <= 5000000) {
		return (taxableIncome - 2000000) * 0.05;
	} else if (taxableIncome <= 10000000) {
		return (taxableIncome - 5000000) * 0.1 + 150000;
	} else if (taxableIncome <= 20000000) {
		return (taxableIncome - 10000000) * 0.15 + 500000;
	} else if (taxableIncome <= 30000000) {
		return (taxableIncome - 20000000) * 0.2 + 2000000;
	}
	return (taxableIncome - 30000000) * 0.25 + 4000000;
}

function calculatePersonalIncomeTaxThailand(taxableMonthlyIncome: number) {
	const taxableIncome = taxableMonthlyIncome * 12;
	if (taxableIncome <= 150000) {
		return 0;
	} else if (taxableIncome <= 300000) {
		return (taxableIncome - 150000) * 0.05;
	} else if (taxableIncome <= 500000) {
		return (taxableIncome - 300000) * 0.1 + 7500;
	} else if (taxableIncome <= 750000) {
		return (taxableIncome - 500000) * 0.15 + 27500;
	} else if (taxableIncome <= 1000000) {
		return (taxableIncome - 750000) * 0.2 + 65000;
	} else if (taxableIncome <= 2000000) {
		return (taxableIncome - 1000000) * 0.25 + 115000;
	} else if (taxableIncome <= 5000000) {
		return (taxableIncome - 2000000) * 0.3 + 365000;
	}
}

function calculatePersonalIncomeTax(
	taxableMonthlyIncome: number,
	countryCode: CountryCode
) {
	switch (countryCode) {
		case "MM":
			return calculatePersonalIncomeTaxMyanmar(taxableMonthlyIncome);
		case "TH":
			return calculatePersonalIncomeTaxThailand(taxableMonthlyIncome);
		default:
			return 0;
	}
}

export { calculatePersonalIncomeTax };
