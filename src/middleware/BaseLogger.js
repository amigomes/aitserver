//#codingpattern Singleton 
class BaseLogger {
    constructor() {
        if(BaseLogger.instance == null){
            this.logs = []
            BaseLogger.instance = this
        }
        return BaseLogger.instance
    }

    log(message) {
        this.logs.push(message);
        console.log(`BaseLogger: ${message}`)
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`)
    }
}

const logger = new BaseLogger()
Object.freeze(logger)
module.exports = {
    logger
}