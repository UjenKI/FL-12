function isLeapYear(data) {
    let itsYear = new Date(data);
    if (!isNaN(itsYear)) {
        itsYear = itsYear.getFullYear();
        if (itsYear % 400 === 0 || itsYear % 100 !== 0 && itsYear % 4 === 0) {
            return `${itsYear} is leap year`;
        } else {
            return `${itsYear} isn't leap year`;
        }
    } else {
        return itsYear;
    }
}

isLeapYear('1996-10-02 18:36:00');