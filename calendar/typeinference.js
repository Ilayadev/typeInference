let optional_propeties = {};
let interfaces = {}
let interface_extra_names = ['sample1', 'sample2', 'sample3 ']
function testingpatterns(name, data) {
    let interface_set = []
    if (typeof data === 'object') {
        if (!Array.isArray(data)) {
            let res = AccesingObject(data, interface_set)
            CheckingInterface(name, res, interface_set, true)
        } else {
            AccesingArray(name, data, interface_set, true)
        }
    }    
    let interface_length = interface_set.length
    for (let i = interface_length - 1; i >= 0; i = i - 2) {
        let obj = JSON.parse(interface_set[i - 1])
        CreatingData(interface_set[i], obj)

    }
}
function AccesingArray(key, data, set, boo) {
    let type = typeof data
    let response = '';
    let has_object = false
    if (Array.isArray(data)) {
        let type_array = [];
        let obj = {}
        let obj_count = 0;
        let object_keys;
        let keys_object = {}
        let object_optional_array=[]
        data.forEach((x) => {
            if (x.constructor.name === 'Object') {
                obj_count++
                object_keys = Object.keys(Object.assign(keys_object, x))
            }
        })
        if (data.length !== 0) {
            data.forEach((x) => {
                if (typeof x === 'object' && !Array.isArray(x)) {
                    has_object = true
                    if (obj_count > 1) {                                        
                        object_optional_array=checking_optionalProperties(object_optional_array,object_keys, x)
                    }
                    obj = LoopingObject(obj, x, set)
                } else {
                    let pattern = AccesingArray(key, x, set, false)
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
            response = 'any'
        }
        if (has_object) {
            key = CheckingInterface(key, obj, set, boo)
            if(obj_count>1){
                setting_optional_properties(key,object_optional_array)
            }
            if (type_array.length > 1) {
                response = `${response}|${key}`
            } else {
                response = `${response}${key}`
            }
        }
        response = `Array<${response}>`
    } else {
        response = type
    }
    return response
}
function AccesingObject(object, set) {
    let obj = {}
    return LoopingObject(obj, object, set)
}
function LoopingObject(inputobj, object, set) {
    for (let key in object) {
        let type = Returningtype(object[key])
        let value;
        if (type === 'Object') {
            let res = AccesingObject(object[key], set)
            value = CheckingInterface(key, res, set)
        } else if (type === 'Array') {
            value = AccesingArray(key, object[key], set, false)
        } else {
            value = type
        }
        if (inputobj.hasOwnProperty(key)) {
            let arr_of_value = inputobj[key].split('|')
            if (!arr_of_value.includes(value)) {
                inputobj[key] += '|' + value
            }
        } else {
            inputobj[key] = value
        }
    }
    return inputobj
}
function CheckingInterface(key, data, set, boolean) {
    let res = ''
    let json = JSON.stringify(data)
    if (!set.includes(json)) {
        set.push(json)
        res = key[0].toUpperCase() + key.slice(1)
        res = checking_interfaces(res)
        set.push(res)
    } else {
        let index = set.indexOf(json)
        res = set[index + 1]
        if (boolean) {
            set[index] = json
            set[index + 1] = key
        }
    }
    return res
}
function Returningtype(x) {
    return x.constructor.name
}
function CreatingData(name, obj) {
    let interface_name = name[0].toUpperCase() + name.slice(1)
    creatingInterfaceElement(interface_name);
    for (let key in obj) {
        let mid_sep;
        let end_sep = ';';
        if (optional_propeties[name] && optional_propeties[name].includes(key)) {
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
function checking_optionalProperties(optional_array, keys_array, object) {   
    keys_array.forEach((x) => {
        if (object[x] === undefined) {
            optional_array.push(x)
        }
    })
    return optional_array
}
function checking_interfaces(key) {
    let res = ''
    if (interfaces[key] === undefined) {
        interfaces[key] = 0
        res = key
    } else {
        let index = interfaces[key]
        let name_interface = interface_extra_names[index]
        interfaces[key] += 1
        res = name_interface
    }
    return res
}
function setting_optional_properties(key,properties){
    optional_propeties[key]=properties
}

