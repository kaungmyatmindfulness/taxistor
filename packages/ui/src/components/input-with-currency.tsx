import type { InputHTMLAttributes } from "react";

type InputWithCurrencyProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	currency: string;
};

export function InputWithCurrency(props: InputWithCurrencyProps) {
	const { label, currency, id, ...rest } = props;
	return (
		<div>
			<label
				className="ui-block ui-text-sm ui-font-medium ui-leading-6 ui-text-gray-900"
				htmlFor={id}
			>
				{label}
			</label>
			<div className="ui-relative ui-mt-2 ui-rounded-md ui-shadow-sm">
				<div className="ui-pointer-events-none ui-absolute ui-inset-y-0 ui-left-0 ui-flex ui-items-center ui-pl-3">
					<span className="ui-text-gray-500 sm:text-sm">{currency}</span>
				</div>
				<input
					aria-describedby={`${id}-currency`}
					className="ui-block ui-w-full ui-rounded-md ui-border-0 ui-py-1.5 ui-pl-9 ui-text-gray-900 ui-ring-1 ui-ring-inset ui-ring-gray-300 ui-placeholder:text-gray-400 ui-focus:ring-2 ui-focus:ring-inset ui-focus:ring-indigo-600 ui-sm:text-sm sm:leading-6"
					id={id}
					name={id}
					placeholder="0.00"
					{...rest}
				/>
			</div>
		</div>
	);
}
