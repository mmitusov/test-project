module.exports = function(roleCheck) {
    if (!roleCheck) {
        return res.status(401).json({message: `Role is not found.`})
    } 

    return function (req, res, next) {
        const {role} = req.body
        try {                        
            if (role !== roleCheck) { 
                return res.status(403).json({message: `You have no accsess`}) 
            }            
            next()
        } catch (err) {
            res.status(401).json({message: "Error:  Not authorized"})
        }
    }
}
