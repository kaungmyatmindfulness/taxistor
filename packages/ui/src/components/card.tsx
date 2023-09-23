import clsx from "clsx";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export function Card(props: CardProps) {
	const { children, className } = props;
	return (
		<div
			className={clsx(
				className,
				"ui-w-80 ui-rounded ui-overflow-hidden ui-shadow-lg ui-p-4"
			)}
		>
			{children}
		</div>
	);
}
