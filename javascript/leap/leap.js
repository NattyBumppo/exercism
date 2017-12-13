var Year = function (yearNum) {
    this.yearNum = yearNum;
};

Year.prototype.isLeap = function() {
    if (this.yearNum % 400 == 0)
    {
        return true;
    }
    else if (this.yearNum % 100 == 0)
    {
        return false;
    }
    else if (this.yearNum % 4 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
};

module.exports = Year;
