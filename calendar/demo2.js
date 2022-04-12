function LoopingObject(inputobj, object, set) {
    for (let key in object) {
        let type = Returningtype(object[key])
        let value;
        if (type === 'Object') {
            let res = AccesingObject(object[key], set)
            value = CheckingInterface(key, res, set)
        } else if (type === 'Array') {
            value = AccesingArray(key, object[key], set)
        } else {
            value = type
        }
        if (inputobj.hasOwnProperty(key)) {
            if (!inputobj[key].includes(value)) {
                inputobj[key] += '|' + value
            }
        } else {
            inputobj[key] = value
        }
    }
    return inputobj
}
function ReturningObject(object,set){
    let obj={}
    return LoopingObject(obj,object,set)
}
function CheckingInterface(key, data, set) {
    let res = ''
    let json = JSON.stringify(data)
    if (!set.includes(json)) {       
        set.push(json)       
        res = key[0].toUpperCase() + key.slice(1)
        set.push(res)
    } else {
        let index = set.indexOf(json)
        res = set[index + 1]
    }
    return res
}