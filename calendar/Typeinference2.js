let optional_properties={};
let interface_set=[];
function Looping_Object(name, op, ip, is_same, old_keys) {
    let keys = Object.keys(ip)
    for(let key in ip) {
        let type = ip[key].constructor.name
        let value;
        if (type === 'Object') {
            let same = Object_keys_Checking(ip[key], keys,"Object")
            if (same) {
                value = name
                Looping_Object(name, op, ip[key], true, keys)
            }else{
                value=AccesingObject(key,ip[key])
            }
        } else if (type === 'Array') {
            let same = Object_keys_Checking(ip[key], keys,"Array")
        } else {
            value = type
        }
        if (is_same){
            if (old_keys.includes(key)) {
                if (op[key] === undefined) {
                    op[key] = value
                }else {
                    let arr_of_value = op[key].split('|')
                    if (!arr_of_value.includes(value)) {
                        op[key] += '|' + value
                    }
                }
            }else{
                op[key]=value                           
                if(optional_properties[name]===undefined){
                    optional_properties[name]=[]
                    optional_properties[name].push(key)
                }else{                   
                    optional_properties[name].push(key)
                }
            }            
        } else {
            op[key] = value
        }
    }
    if(is_same){
        old_keys.forEach(x=>{
            if(!keys.includes(x)){
                if(optional_properties[name]===undefined){
                    optional_properties[name]=[]
                    optional_properties[name].push(x)
                }else{
                    optional_properties[name].push(x)
                }
            }
        })  
    }   
    if (!is_same) {
        return op
    }
}
function AccesingObject(key, data) {
    let obj = {}    
    let res= Looping_Object(key, obj, data, false)   
    return checking_interfaces(key,res)
}
function Object_keys_Checking(data, keys_array,type) {
    let match = false
    let has_object=false
    if(type==='Array'){
        let unique_object={}
        array.forEach(x=>{
            if(x.constructor.name==='Object'){
                has_object=true
                Object.assign(unique_object,x)
            }
        })
        data=unique_object
    }else{
        has_object=true
    }
    if(has_object){
    let data_keys = Object.keys(data)
        keys_array.forEach((x) => {
            if (data_keys.includes(x)) {
                match = true
            }
        })
    }
    return match
}
function checking_interfaces(key,data){
    let json=JSON.stringify(data)
    let res=''
    if(interface_set.includes(json)){
        let index=interface_set.indexOf(json)
        res=interface_set[index+1]
    }else{
        interface_set.push(json)
        res = key[0].toUpperCase() + key.slice(1)
        interface_set.push(res)
    }
    return res
}
function AccesingArray(key,array,object_key){
        
        
}