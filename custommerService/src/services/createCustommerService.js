const Custommer = require('../models/CustommerSchema');
module.exports = async (msg) => {
    try {
        let obj = new Custommer(msg);
        // console.log(obj);
        let val = obj.validateSync();
        if (val) throw new Error(JSON.stringify(msg))
        return await obj.save();
    } catch(e) {
        console.error(e);
        throw new Error(e.message);
    }
}