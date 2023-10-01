
const setUseName = (userName) =>{
    return {
        type : 'setUserName',
        username : userName
    }
}
const setAppName = (appName) => {
    return {
        type : 'setAppName',
        AppName : appName,
    }
}

export {
    setUseName,
    setAppName
}