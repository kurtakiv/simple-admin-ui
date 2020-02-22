const SELECTORS = {
    tableOrdering: "tableOrdering"
};

const saveToLocalStorage = ( selector, value) => {
    localStorage.setItem( selector, value);
};

const getItemFromLocalStorage= ( selector ) =>{
    return localStorage.getItem(selector);
};

const getTableSortOrder = () => {
    return Number(getItemFromLocalStorage(SELECTORS.tableOrdering));
};

const setTableSortOrder = (value) => {
    return saveToLocalStorage(SELECTORS.tableOrdering, value);
};

export {getTableSortOrder, setTableSortOrder};