module.exports = async (msg) => {
    try {
        console.log(msg)
    } catch(e) {
        console.log(e)
        throw e
    }
}