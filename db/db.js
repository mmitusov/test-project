class Db {
    constructor() {
        this._names = [
            {id: 1, name: "Steve"},
            {id: 2, name: "Tim"}
        ]
        this._birthDates = [
            {id: 1, date: "01.01.2000"},
            {id: 2, date: "01.01.2001"}
        ]
        this._passportSeries = [
            {id: 1, name: "AA0000"},
            {id: 2, name: "AA1111"}
        ]
        this._passportDates = [
            {id: 1, name: "01.01.2016"},
            {id: 2, name: "01.01.2017"}
        ]
        this._driverIds = [
            {id: 1, name: "12345"},
            {id: 2, name: "54321"}
        ]
        this._debitCardNumbers = [
            {id: 1, name: "1234 5678 0000"},
            {id: 2, name: "1234 5678 0001"}
        ]
        this._debitCardExpDates = [
            {id: 1, name: "01.01.2020"},
            {id: 2, name: "01.01.2021"}
        ]        
    }
    
    setNames(givenId, givenNames) {
        this._names.push({id: `${givenId}`, name: `${givenNames}`})
    }
    setBirthDates(givenId, givenBirthDate) {
        this._birthDates.push({id: `${givenId}`, name: `${givenBirthDate}`})
    }
    setPassportSeries(givenId, PassportSeries) {
        this._passportSeries.push({id: `${givenId}`, name: `${PassportSeries}`})
    }
    setPassportDates(givenId, PassportDates) {
        this._passportDates.push({id: `${givenId}`, name: `${PassportDates}`})
    }
    setDriverIds(givenId, DriverIds) {
        this._driverIds.push({id: `${givenId}`, name: `${DriverIds}`})
    }
    setDebitCardNumbers(givenId, DebitCardNumbers) {
        this._debitCardNumbers.push({id: `${givenId}`, name: `${DebitCardNumbers}`})
    }
    setDebitCardExpDates(givenId, DebitCardExpDates) {
        this._debitCardExpDates.push({id: `${givenId}`, name: `${DebitCardExpDates}`})
    }
    
    get names() {
        return this._names
    }
    get birthDates() {
        return this._birthDates
    }
    get passportSeries() {
        return this._passportSeries
    }
    get passportDates() {
        return this._passportDates
    }
    get driverIds() {
        return this._driverIds
    }
    get debitCardNumbers() {
        return this._debitCardNumbers
    }
    get debitCardExpDates() {
        return this._debitCardExpDates
    } 
}

module.exports = Db