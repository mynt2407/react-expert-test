import React from "react";
import styles from "../../css/filter.module.css"

const FilterOption = React.memo(({
    options, highlightText,
    onChangeOption
}) => {
    const getHighlightOptionText = (option) => {
        return option.replaceAll(new RegExp(`(${highlightText})`, 'ig'), `<b>$1</b>`)
    }
    return (
        <>
            {
                options.map(option =>
                    <span key={`filter-option-${option}`}
                        dangerouslySetInnerHTML={{ __html: `${getHighlightOptionText(option)}` }}
                        onClick={() => onChangeOption(option)}
                        className={styles.filterInputOption}
                    >
                    </span>
                )
            }
        </>
    )
});

export default FilterOption;