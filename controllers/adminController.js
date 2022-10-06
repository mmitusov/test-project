const dbClass = require ('../db/db')
const db = new dbClass();

class adminController {          
    async check(req, res) {
        const {id} = req.body
        const getUserData = []

        db.names.map((e) => {if (e.id === id) getUserData.push(e)})
        db.birthDates.map((e) => {if (e.id === id) getUserData.push(e)})
        db.passportSeries.map((e) => {if (e.id === id) getUserData.push(e)})
        db.passportDates.map((e) => {if (e.id === id) getUserData.push(e)})
        db.driverIds.map((e) => {if (e.id === id) getUserData.push(e)})
        db.debitCardNumbers.map((e) => {if (e.id === id) getUserData.push(e)})
        db.debitCardExpDates.map((e) => {if (e.id === id) getUserData.push(e)})        
        res.json(getUserData.length ? getUserData : `There is no such user`)
    }

    async declined(req, res) {
        const {id} = req.body

        db.names.map((e, index) => {if (e.id === id) db.names.splice(index, 1)})
        db.birthDates.map((e, index) => {if (e.id === id) db.birthDates.splice(index, 1)})
        db.passportSeries.map((e, index) => {if (e.id === id) db.passportSeries.splice(index, 1)})
        db.passportDates.map((e, index) => {if (e.id === id) db.passportDates.splice(index, 1)})
        db.driverIds.map((e, index) => {if (e.id === id) db.driverIds.splice(index, 1)})
        db.debitCardNumbers.map((e, index) => {if (e.id === id) db.debitCardNumbers.splice(index, 1)})
        db.debitCardExpDates.map((e, index) => {if (e.id === id) db.debitCardExpDates.splice(index, 1)})        
        res.json("Your documents have been declined. Please send your documents again")
    }

    async accepted(req, res) {                
        res.json("Your documents have been accepted.")
    }
}

module.exports = new adminController()