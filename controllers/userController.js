const dbClass = require ('../db/db')
const db = new dbClass();

class UserController {
    async post(req, res) {
        const {id, name, birthDate, passportSeries, passportDate, driverId, debitCardNumber, debitCardExpDate, role} = req.body
        if (name) {
            db.setNames(id, name)            
        }
        if (birthDate) {
            db.setBirthDates(id, birthDate)            
        }
        if (passportSeries) {
            db.setPassportSeries(id, passportSeries)            
        }
        if (passportDate) {
            db.setPassportDates(id, passportDate)            
        }
        if (driverId) {
            db.setDriverIds(id, driverId)            
        }
        if (debitCardNumber) {
            db.setDebitCardNumbers(id, debitCardNumber)            
        }
        if (debitCardExpDate) {
            db.setDebitCardExpDates(id, debitCardExpDate)            
        }
        res.json(db)
    }
}

module.exports = new UserController()