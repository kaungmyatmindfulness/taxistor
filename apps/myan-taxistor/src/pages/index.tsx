import { useMemo, useState } from "react";
import { calculatePersonalIncomeTax } from "tax-calculator";
import { Card, InputWithCurrency, CardInfo, CardNote } from "ui";

function Home() {
	const [salary, setSalary] = useState<number>();

	const personalIncomeTax = useMemo(() => {
		return calculatePersonalIncomeTax(salary || 0, "MM");
	}, [salary]);

	const onChangeSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
		const salary = Number(event.target.value);
		setSalary(salary || undefined);
	};

	return (
		<div className="w-screen h-screen place-items-center grid">
			<div>
				<h1 className="font-bold text-lg">
					Myanmar Simple Personal Income Tax (PIT) Calculator
				</h1>
				<Card className="mt-2">
					<InputWithCurrency
						currency="Ks"
						label="Monthly salary"
						onChange={onChangeSalary}
						type="number"
						value={salary || ""}
					/>
					<CardInfo
						label="Annual personal income tax: "
						value={personalIncomeTax.toLocaleString("MM", {
							style: "currency",
							currency: "MMK",
						})}
					/>
					<CardInfo
						label="Monthly personal income tax: "
						value={(personalIncomeTax / 12).toLocaleString("MM", {
							style: "currency",
							currency: "MMK",
						})}
					/>
					<CardNote note="The calculation might not be accurate. Please consult with your accountant." />
				</Card>
			</div>
		</div>
	);
}

export default Home;
