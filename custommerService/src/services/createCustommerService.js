const Custommer = require('../models/CustommerSchema');
module.exports = async (msg) => {
    try {
        // console.log(msg);
        // let obj = new Custommer(msg.data);
        // let val = await obj.validateSync();
        // console.log('validade ', val)
        // let res = await obj.save()
        // console.log('result create ', res)
        // throw new Error(JSON.stringify(msg))
    } catch(e) {
        console.error(e);
        throw new Error(e.message);
    }
}