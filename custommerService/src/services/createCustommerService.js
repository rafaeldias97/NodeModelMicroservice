// const Custommer = require('../models/CustommerSchema');
module.exports = async (msg) => {
    try {
        console.log(msg);
        // throw new Error(JSON.stringify(msg))
    } catch(e) {
        console.log(e);
        throw new Error(e.message);
    }
}