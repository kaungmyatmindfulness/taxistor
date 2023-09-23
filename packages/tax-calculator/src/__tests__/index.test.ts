import { calculatePersonalIncomeTax } from "..";

// function delay(ms: number) {
// 	return new Promise<void>((resolve) => {
// 		setTimeout(() => {
// 			resolve();
// 		}, ms);
// 	});
// }

it("should calculate personal income tax for Myanmar correctly", () => {
	// await delay(3000);
	expect(calculatePersonalIncomeTax(100000, "MM")).toBe(0);
});
