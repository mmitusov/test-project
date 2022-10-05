//Предположим, что у нас не может быть отправленно пустых полей, а также у нас всегда есть id/роль пользователя (все проверяется на фронте)
//Поэтому мы записываем все полученные данные, без предварительной проверки
//Каждый id отвечает заданные конкретного человека и распеределяется по всем его полям в таблице


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
      
    async check(req, res) {
        const a = db.names.map(data => data.name)
        res.json(a)    
        // res.json(db.brands)
    }  
}

module.exports = new UserController()