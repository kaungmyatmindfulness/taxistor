type CardInfoProps = {
	label: string;
	value: string;
};

export function CardInfo(props: CardInfoProps) {
	const { label, value } = props;

	return (
		<div className="ui-mt-2">
			<p className="ui-text-sm ui-text-gray-500">
				{label} <span className="ui-font-bold">{value}</span>
			</p>
		</div>
	);
}
