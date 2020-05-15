const generateMessage = (username, text) => {
    if (text !== "") {
        return {
            username,
            text,
            createdAt: new Date().getTime()
        }
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}