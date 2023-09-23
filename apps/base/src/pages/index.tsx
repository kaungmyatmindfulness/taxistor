// import { useState } from "react";
import { calculatePersonalIncomeTax } from "tax-calculator";

function Home() {
	// tax calculator
	// const [monthlyIncome, setMonthlyIncome] = useState(0);

	return <div>{calculatePersonalIncomeTax(100000, "TH")}</div>;
}

export default Home;
