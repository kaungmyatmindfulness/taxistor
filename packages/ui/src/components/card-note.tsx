type CardNoteProps = {
	note: string;
};

export function CardNote(props: CardNoteProps) {
	const { note } = props;
	return (
		<div className="ui-mt-4">
			<p className="ui-text-sm ui-text-gray-500 ui-italic">* {note}</p>
		</div>
	);
}
