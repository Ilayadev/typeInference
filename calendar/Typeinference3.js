let interfaces = {}
let interfacesKeys = {}
let optionalProperties = {}
let interfaceNames={}
let interfacesExtraNames=["Second","Third","Fourth","Fifth","Sixth","Seventh","Eight","Ninth","Tenth"]
function testingpatterns(name, data) {   
    if (typeof data === 'object') {
        if (!Array.isArray(data)) {
            AccesingObject(name, data)
        } else {
            AccesingArray(name, data)
        }
    }   
    for (let key in interfaces) {
        CreatingData(key, interfaces[key])
    }   
}
function AccesingObject(key, data) {
    interfacesKeys[key] = Object.keys(data)
    interfaces[key] = {}
    LoopingObject(key, data, false)
}
function LoopingObject(name, ip, is_same) {
     
    for (let key in ip) {
        let type;
        if(ip[key]){
            type=ip[key].constructor.name
        }else{
            type="null"    
        }        
        let value;
        if (type === 'Object') {
            let sameKey = ObjectkeysChecking(ip[key], type)
            if (sameKey) {
                value = sameKey
                LoopingObject(sameKey, ip[key], true)
            } else {
                value=Interfacesname(key)
                AccesingObject(value, ip[key])                
            }
        } else if (type === 'Array') {
            let sameKey = ObjectkeysChecking(ip[key], type)
            if (sameKey) {
                value = AccesingArray(sameKey, ip[key])
            } else {
                let name=Interfacesname(key)
                value = AccesingArray(name, ip[key])
            }
        } else {
            value = type
        }
        AssingValue(interfaces[name], key, value)
    }
    if (is_same) {
        let objectKeys = Object.keys(ip)
        CheckingOptionalProperties(name, interfacesKeys[name], objectKeys)
        CheckingOptionalProperties(name, objectKeys, interfacesKeys[name])
    }
}
function AssingValue(object, key, value) {
    if (object[key] === undefined) {
        object[key] = value
    } else {
        let arr_of_value = object[key].split('|')
        if (!arr_of_value.includes(value)) {
            object[key] += '|' + value
        }
    }
} function ObjectkeysChecking(data, type) {
    let response = false
    let br = false
    if (type === 'Array') {
        data = ObjectFromArray(data)
    }
    let dataKeys = Object.keys(data)
    let lengthOfKeys = dataKeys.length
    for (let key in interfacesKeys) {
        let array = interfacesKeys[key]
        let MatchedCount = 0
        for (let i = 0; i < lengthOfKeys; i++) {
            if (array.includes(dataKeys[i])) {
                MatchedCount++             
                if(MatchedCount>=Math.round(array.length/2)){
                    response = key
                    br = true
                    break
                }
            }
        }
        if (br) break
    }
    return response
}
function CheckingOptionalProperties(key, ip_array, target_array) {
    if (optionalProperties[key] === undefined) {
        optionalProperties[key] = []
    }
    ip_array.forEach(x => {
        if (!target_array.includes(x)) {
            optionalProperties[key].push(x)
            if (!interfacesKeys[key].includes(x)) {
                interfacesKeys[key].push(x)
            }
        }
    });
}
function AccesingArray(key, data) {
    let type = data.constructor.name
    let response = ''
    if (type === "Array") {
        let hasObject = false       
        let type_array = []       
        data.forEach(x => {
            if (x.constructor.name === 'Object') {
                hasObject = true               
            }
        })
        if (hasObject) {
            if (interfaces[key] === undefined) {                
                interfaces[key] = {}
                interfacesKeys[key] = Object.keys(ObjectFromArray(data))
            }
        }
        if (data.length !== 0) {
            data.forEach((x) => {
                if (typeof x === 'object' && !Array.isArray(x)) {
                    LoopingObject(key, x, true)
                } else {
                    let pattern = AccesingArray(key, x)
                    if (type_array.includes(pattern)) {
                    } else {
                        type_array.push(pattern)
                        if (type_array.length > 1) {
                            response += '|' + pattern;
                        } else {
                            response += pattern
                        }
                    }
                }
            })
        } else {
            response = "any"
        }
        if (hasObject) {
            response = `${response}${key}`
        }
        response = `Array<${response}>`
    } else {
        response = type
    }
    return response
}
function ObjectFromArray(array) {
    let obj = {}
    array.forEach(x => {
        if (x.constructor.name === 'Object') {
            Object.assign(obj, x)
        }
    })
    return obj
}
function CreatingData(name, obj) {
    let interface_name = name[0].toUpperCase() + name.slice(1)
    creatingInterfaceElement(name);
    for (let key in obj) {
        let mid_sep;
        let end_sep = ';';
        if (optionalProperties[name] && optionalProperties[name].includes(key)) {
            mid_sep = '?:'
        } else {
            mid_sep = ':'
        }
        keysparent(key, mid_sep, obj[key], end_sep)
    }
    creatingcurlyparent()
}
function creatingInterfaceElement(obj_name) {
    let div = document.createElement('div')
    div.classList.add('interfaceEle')
    creatingSpanElement(div, 'interfacespan', 'interface')
    creatingSpanElement(div, 'objectname', obj_name)
    creatingSpanElement(div, 'curlyright', '{')
    document.querySelector('.overall').appendChild(div)
}
function keysparent(key, mid, value, end) {
    let parent = document.createElement('div')
    parent.classList.add('keysparent')
    creatingSpanElement(parent, 'key', key)
    creatingSpanElement(parent, 'Mid_Sep', mid)
    creatingSpanElement(parent, 'keyvalue', value)
    creatingSpanElement(parent, 'End_Sep', end)
    document.querySelector('.overall').appendChild(parent)
}
function creatingSpanElement(parent, classname, value) {
    let span = document.createElement('span')
    span.classList.add(classname)
    span.innerText = value;
    parent.appendChild(span)
}
function creatingcurlyparent() {
    let span = document.createElement('div')
    span.classList.add('leftcurly')
    span.innerText = '}';
    document.querySelector('.overall').appendChild(span)
}
function Interfacesname(key){
    let response=''
    if(interfaceNames[key]===undefined){
        interfaceNames[key]=0
         response=key
    }else{
        let  index=interfaceNames[key]
        let name=interfacesExtraNames[index]
        response=`${name}${key}`
    }
    return response
}