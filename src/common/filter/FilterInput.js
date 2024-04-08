import React, { useCallback, useEffect, useState } from "react";
import styles from "../../css/filter.module.css"
import FilterOption from "./FilterOption";

const FilterInput = React.memo(({ placeholder, data, attributeName, onChangeValue }) => {
    const [inputValue, setInputValue] = useState('');
    const [allOptions, setAllOptions] = useState([]);
    const [choosedOptions, setChoosedOptions] = useState(new Set());

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        const parseData = () => {
            let key, option;

            if (!attributeName) {
                return;
            }

            const _options = data.map(item => {
                let attributes = attributeName.split(".");
                key = attributes[0];
                option = item[key];
                for (let i = 1; i < attributes.length; i++) {
                    key = attributes[i];
                    option = option[key];
                }
                return option;
            });
            setAllOptions(_options);
        }

        parseData();

    }, [data, attributeName]);

    const onChangeOption = useCallback(option => {
        if (choosedOptions.has(option)) {
            choosedOptions.delete(option)
        } else {
            choosedOptions.add(option)
        }
        setChoosedOptions(new Set(choosedOptions))
        setInputValue('')
        onChangeValue(choosedOptions)
    })

    return (
        <div className={styles.filterInput}>
            {/* Result */}
            {
                [...choosedOptions].map(option =>
                    <span
                        key={`filter-result-${option}`}
                        className={styles.filterInputOption}
                    >
                        {option}
                    </span>
                )
            }
            {/* Input */}
            <input type="text"
                data={data}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChangeInput}
            />

            {/* Option */}
            {
                inputValue.length !== 0 &&
                <FilterOption
                    options={allOptions.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()))}
                    highlightText={inputValue.toLowerCase()}
                    onChangeOption={onChangeOption}
                />
            }
        </div>
    )
})
export default FilterInput;