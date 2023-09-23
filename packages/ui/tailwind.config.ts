// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";

const config: Pick<Config, "prefix" | "presets" | "plugins"> = {
	prefix: "ui-",
	presets: [sharedConfig],
	plugins: [require("@tailwindcss/forms")],
};

export default config;
