const FontSelector = ({fonts, selectedFont, onSelect}) => {
  const demoChars = 'abc';
  const onChange = (event) => {
    const currentSelectedFontId = event.currentTarget.dataset.fontId;
    const currentSelectedFont = fonts[currentSelectedFontId];

    onSelect(currentSelectedFont);
  };

  return (
    <div className="font-picker">
      {fonts &&
        fonts.map((font, i) => (
          <div key={`font-grup-${i}`} className="grid center font-item">
            <input onChange={onChange} type="radio" name="font" value={font.name} id={font.name} data-font-id={i}/>
            <label htmlFor={font.name} className="grid-1">
              <PictureFont text={demoChars} path={font.path}/>
            </label>
          </div>
        ))
      }
    </div>
  )
};