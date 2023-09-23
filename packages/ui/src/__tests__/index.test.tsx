import { createRoot } from "react-dom/client";
import { Card } from "../components/card";

describe("Card", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		const root = createRoot(div);
		root.render(<Card>Card</Card>);
		root.unmount();
	});
});
