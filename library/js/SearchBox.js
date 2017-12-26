const SearchBox = (props) => {
    const currentValue = props.value;
    const filterFunction = props.filterBooks;

    const onChange = (event) => {
      const inputValue = event.currentTarget.value;
      filterFunction(inputValue);
    };

    return (
        <input type="text" placeholder="Поиск по названию или автору" value={currentValue} onChange={onChange}/>
    );
};