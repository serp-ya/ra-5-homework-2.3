const TextRenderLine = ({value, onChange}) => {
	const onChangeText = (event) => {
		const newText = event.currentTarget.value;
    onChange(newText);
	};
	return (
		<div className="type-text">
			<textarea value={value} onChange={onChangeText} name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки"></textarea>
		</div>
	);
};
