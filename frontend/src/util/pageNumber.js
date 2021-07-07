const getPageNumber = (page) => {
    let number = 1;
    if (page && typeof page === 'string') {
        number = parseInt(page, 10);
    }

    return number;
};

export default getPageNumber;