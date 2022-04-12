function factorial(a) {
    var f = 1;
    function recursion(a) {
        if (a > 0) {
            f = f * a;
            a--;
            recursion(a)

        } else {
            console.log(f)
        }
    }
    if (a === 0) { console.log(1) }
    else {
        recursion(a)
    }
}
function factorial(a) {
    var f = 1;
    if (a > 0) {
        f = f * a;
        a--;
        recursion(a)

    } else {
        console.log(f)
    }
}
// function factorial(a) {
//     if (a >= 1) {
//         return (a * factorial(a - 1))
//     } else {
//         return 1
//     }
// }
// function testingpatterns(i) {
//     let ele;
//     if (typeof (i) === 'object') {
//         if (Array.isArray(i)) {
//             ele = [];
//             i.forEach(x => {
//                 ele.push(testingpatterns(x))
//             })
//             return ele;
//         } else {
//             ele = {};
//             for (let keys in i) {
//                 ele[keys] = testingpatterns(i[keys])
//             }
//             return ele;
//         }
//     } else {
//         return typeof (i)
//     }
// }
// function testingpatterns(i) {
//     let ele;
//     if (typeof (i) === 'object') {
//         if (Array.isArray(i)) {
//             let array_of_type = [];
//             i.forEach((x) => {
//                 let type = typeof (x)
//                 if (!array_of_type.includes(type)) {
//                     array_of_type.push(type)
//                 }
//             })
//             if (array_of_type.length > 1 || array_of_type[0] === 'object') {
//                 ele = []
//                 i.forEach((x) => { ele.push(testingpatterns(x)) })
//             } else {
//                 ele = `Array<${array_of_type[0]}>`

//             }
//             return ele;
//         } else {
//             ele = {};
//             for (let keys in i) {
//                 ele[keys] = testingpatterns(i[keys])
//             }
//             return ele;
//         }
//     } else {
//         return typeof (i)
//     }
// }

// i.forEach(x => {
//     let test = testingpatterns(x);
//     if (test === 'number' | test === 'string' | test === 'boolean' | test === 'date' | test === 'Symbol') {
//         if (test != text) {
//             text += test
//             ele = `Array<${text}>`
//         } 
//     } else {
//         array.push(test);
//         ele += array
//     }
// }) 
// function testingpatterns(i) {
//     let ele;
//     let name = i.constructor.name
//     if (typeof (i) === 'object') {
//         if (Array.isArray(i)) {
//             let type = []
//             ele = '';
//             i.forEach((x) => {
//                 let pattern = testingpatterns(x)
//                 if (type.includes(pattern)) {
//                 } else {
//                     type.push(pattern)
//                     if (type.length > 1) {
//                         ele += '|' + pattern;
//                     } else {
//                         ele += pattern
//                     }
//                 }
//             });
//             ele = `Array<${ele}>`;
//         } else {
//             if (name === 'Object') {
//                 ele = '{';
//                 for (let keys in i) {
//                     ele += keys + ':' + testingpatterns(i[keys]) + ';'
//                 }
//                 ele += '}'
//                 if (name !== 'Object') {
//                     ele = `${name}<${ele}>`
//                 }
//             } else if (name === 'Promise') {
//                 i.then(async (res) => ele = await testingpatterns(res))
//             } else if (name === 'Date') {
//                 ele = 'Date'
//             }
//         }
//     } else {
//         ele = typeof (i)
//     }
//     return ele
// }


// async function testingpatterns(i) {
//     let ele;
//     let name = i.constructor.name
//     if (typeof (i) === 'object') {
//         if (Array.isArray(i)) {
//             let type = []    
//             ele = '';
//             i.forEach((x) => {
//                 console.log(x)
//                 testingpatterns(x).then((res) => {
//                     console.log(res)
//                     if (type.includes(res)) {
//                     } else {
//                         type.push(res)
//                         if (type.length > 1) {
//                             ele += '|' + res;
//                         } else {
//                             ele += res
//                         }
//                     }
//                 });

//             })
//             ele = `Array<${ele}>`;
//         } else {
//             if (name === 'Object') {
//                 ele = '{';
//                 for (let keys in i) {
//                     await testingpatterns(i[keys]).then((res) => {
//                         ele += keys + ':' + res + ';'
//                     })
//                 }
//                 ele += '}'
//                 if (name !== 'Object') {
//                     ele = `${name}<${ele}>`
//                 }
//             } else if (name === 'Promise') {
//                 i.then(async (res) => ele = await testingpatterns(res))
//             } else if (name === 'Date') {
//                 ele = 'Date'
//             }
//         }
//     } else {
//         ele = typeof (i)
//     }
//     return ele
// } 
// function testing(i) {
//     let ele;
//     if (typeof (i) === 'object') {
//         if (Array.isArray(i)) {
//             let type = []
//             ele = '';
//             if (i.length !== 0) {
//                 i.forEach((x) => {
//                     let pattern = testing(x)
//                     if (type.includes(pattern)) {
//                     } else {
//                         type.push(pattern)
//                         if (type.length > 1) {
//                             ele += '|' + pattern;
//                         } else {
//                             ele += pattern
//                         }
//                     }
//                 });
//             } else {
//                 ele = 'any'
//             }
//             ele = `Array<${ele}>`;
//         } else {
//             let name = i.constructor.name
//             if (name !== 'Promise' && name !== 'Date') {
//                 ele = '{';
//                 for (let keys in i) {
//                     ele += keys + ':' + testing(i[keys]) + ';'
//                 }
//                 ele += '}'
//                 if (name !== 'Object') {
//                     ele = `${name}<${ele}>`
//                 }
//             } else if (name === 'Promise') {
//                 ele = i.then(testing).then(res => res)
//             } else if (name === 'Date') {
//                 ele = 'Date'
//             }
//         }
//     } else {
//         ele = typeof (i)
//     }
//     return ele
// }
// function testing(i) {
//     let ele;
//     let div;
//     if (typeof i === 'object') {
//         if (Array.isArray(i)) {
//             let span = document.createElement('div')
//             span.classList.add('arrayspan')
//             let type = [];
//             let text;
//             if (i.length !== 0) {
//                 i.forEach((x) => {
//                     let pattern = testing(x);
//                     text = pattern.innerText                            
//                     if (!type.includes(text)) {
//                         type.push(text);
//                         if (type.length > 1) {
//                             span.insertAdjacentText('beforeend', '|')
//                         }

//                         // if (typeof pattern !== 'object') {                                    
//                         //     span.insertAdjacentElement('afterbegin', text)
//                         // } else {                                                           
//                         //     span.appendChild(pattern)
//                         // }
//                         span.appendChild(pattern)
//                     }                            
//                 });
//             } else {
//                 span.innerText = 'any';
//             }                    
//             if (type.length > 1) {
//                 span.insertAdjacentText('afterbegin', '(')
//                 span.insertAdjacentText('beforeend', ')')
//             }
//             span.innerHTML+='[]'
//             ele = span;
//         } else {
//             let name = i.constructor.name;
//             if (name !== 'Promise' && name !== 'Date') {
//                 div = document.createElement('div')
//                 div.classList.add('container')
//                 div.innerHTML = '{'
//                 for (let keys in i) {
//                     let span = document.createElement('span')
//                     span.classList.add('objectspan')
//                     let res = testing(i[keys])
//                     if (typeof res === 'object') {
//                         span.innerHTML = `${keys}:`;
//                         span.appendChild(res)
//                     } else {
//                         span.innerHTML = `${keys}:${res}`;
//                     }
//                     div.appendChild(span)
//                 }
//                 div.innerHTML += '}'
//                 ele = div
//                 if (name !== 'Object') {
//                     ele = `${name}`;
//                 }
//             } else if (name === 'Promise') {
//                 ele = i.then(testing).then((res) => res);
//             } else if (name === 'Date') {
//                 ele = 'Date';
//             }
//         }
//     } else {
//         let type = typeof i;
//         ele=document.createTextNode(type)
//     }
//     return ele
// }
// function testingpatterns(i) {
//     let container = document.querySelector('.overall')
//     container.innerHTML = '';
//     let ele = testing(i)            
//     container.appendChild(ele)
// }

// .container {
//     width: max-content;
//     border-left: 1px dotted;
//     display: flex;
//     flex-direction: column;
//     border-radius: 10px;
// }

// .objectspan {
//     display: flex;
//     padding-left: 9px;
// }

// .arrayspan {
//     display: flex;
//     flex-direction: column;
// }

// .element {
//     width: 200px;
//     height: 100px;
//     padding: 21px 4px 8px 18px;
//     text-align: center;
//     background-color: #b9c9cb;
// }

// .divele {
//     display: flex;

// }



// <!-- <script>
//         function creatingobject(name, object) {
//             let interface = creatingInterfaceElement(name)
//             for (let key in object) {
//                 let type = typeof object[key]
//                 if (type !== 'object') {
//                     keysparent(key + ':', typeof object[key] + ';')
//                 } else {
//                     let value;
//                     if (Array.isArray(object[key])) {
//                         value = creatingarray(key, object[key])
//                         keysparent(key + ':', value + ';')
//                     } else {
//                         value = key[0].toUpperCase() + key.slice(1)
//                         keysparent(key + ':', value + ';')
//                         setTimeout(() => {
//                             creatingobject(value, object[key])
//                         }, 100);
//                     }
//                 }
//             }
//             creatingcurlyparent()
//         }
//         function creatingarray(name, data) {
//             let ele = ''
//             if (typeof data === 'object') {
//                 if (Array.isArray(data)) {
//                     let obj = {};
//                     let has_object = false;
//                     let type = []
//                     if (data.length !== 0) {
//                         data.forEach((x) => {
//                             if (typeof x === 'object' && !Array.isArray(x)) {
//                                 has_object = true;
//                                 for (let key in x) {
//                                     if(obj.hasOwnProperty(key)){
//                                         let type_objkey=obj[key].constructor.name
//                                         let type_xkey=x[key].constructor.name                                        
//                                         if(type_objkey===type_xkey){                                           
//                                             obj[key]=creatingarray(key,x[key])
//                                         }else{
//                                             if (typeof x[key] === 'object') {
//                                                 if (!Array.isArray(x[key])) {
//                                                     creatingobject(key, x[key])
//                                                 } else {
//                                                     obj[key] = creatingarray(key, x[key])
//                                                 }
//                                             } else {
//                                                 obj[key] = creatingarray(key, x[key])
//                                             }
//                                         }
//                                     }else{
//                                         if (typeof x[key] === 'object') {
//                                                 if (!Array.isArray(x[key])) {
//                                                     creatingobject(key, x[key])
//                                                 } else {
//                                                     obj[key] = creatingarray(key, x[key])
//                                                 }
//                                             } else {
//                                                 obj[key] = creatingarray(key, x[key])
//                                             }
//                                     }
//                                 }
//                             } else {
//                                 let pattern = creatingarray(name, x)
//                                 if (type.includes(pattern)) {
//                                 } else {
//                                     type.push(pattern)
//                                     if (type.length > 1) {
//                                         ele += '|' + pattern;
//                                     } else {
//                                         ele += pattern
//                                     }
//                                 }
//                             }
//                         });
//                     } else {
//                         ele = 'any'
//                     }
//                     if (has_object) {
//                         console.log(obj)
//                         ele = `${ele}|${name}class`
//                         creatingobject(name + 'class', obj)
//                         // setTimeout(() => {

//                         // }, 100);
//                     }
//                     ele = `Array<${ele}>`;
//                 }else{
//                     return name
//                 }
//             } else {
//                 ele = typeof (data)
//             }
//             return ele
//         }       
//         function creatingInterfaceElement(obj_name) {
//             let div = document.createElement('div')
//             div.classList.add('interfaceEle')
//             let interfacespan = creatingSpanElement(div, 'interfacespan', 'interface')
//             let objectname = creatingSpanElement(div, 'objectname', obj_name)
//             let curly_right = creatingSpanElement(div, 'curlyright', '{')
//             document.querySelector('.overall').appendChild(div)
//         }
//         function keysparent(key, value) {
//             let parent = document.createElement('div')
//             parent.classList.add('keysparent')
//             let keyspan = creatingSpanElement(parent, 'key', key)
//             let keyvaluespan = creatingSpanElement(parent, 'keyvalue', value)
//             document.querySelector('.overall').appendChild(parent)

//         }
//         function creatingSpanElement(parent, classname, value) {
//             let span = document.createElement('span')
//             span.classList.add(classname)
//             span.innerText = value;
//             parent.appendChild(span)
//         }
//         function creatingcurlyparent() {
//             let span = document.createElement('div')
//             span.classList.add('leftcurly')
//             span.innerText = '}';
//             document.querySelector('.overall').appendChild(span)
//         }   
//     </script> -->






if (!Array.isArray(value)) {
    let res = ProcessingObject(value)
    let js_ob = JSON.stringify(res)
    if (!obj_array.includes(js_ob)) {
        obj_array.push(js_ob)
        CreatingData(name, res)
    }
    obj[key] = TypeInference(name, value)
}




let names=['','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
function TakingNames(name){
    let ele;    
    if(interfaceNames.names[name]){   
        let count=interfaceNames.names[name]       
        ele=names[count]
        interfaceNames.names[name]+=1
    }else{
        interfaceNames.names[name]=1
        ele=name; 
    }
    return ele;
}
[
    {
    "name": "Venkatesh",
    "age": 22,
    "friends": [
        {
            "name": "ganesh",
            "age": 18,
            "friends": [
                {
                    "name": "xyz",
                    "age": 90,
                    "hobby": "x",
                    "friends": []
                },
                {
                    "name": "xyz",
                    "friends": {}
                }
            ]
        },
        {
            "name": "xyz",
            "hobby": "x",
            "friends": {}
        }
    ],
    "hobby": "h"
},
{
    "name": "bnm",
    "age": 42,
    "friends": {}
}
]


for (let key in x) {
    let value = TypeInference(key, x[key], set)
    if (typeof x[key] === 'object' && !Array.isArray(x)) {
        value = value[0].toUpperCase() + value.slice(1)
    }
    if (obj.hasOwnProperty(key)) {
        if (obj[key] === value) {
            obj[key] = value
        } else {                                                                      
            if (!obj[key].includes(value)) {
                obj[key] += '|' + value
            }
        }
    } else {
        if (typeof x[key] === 'object' && !Array.isArray(x[key])) {
            let res = ProcessingObject(x[key], set)
            console.log(res)
            let js_ob = JSON.stringify(res)
            obj[key] = checkingInterface(key, js_ob, res, set)
        } else {
            obj[key] = value
        }
    }
}


function TypeInference(name, data, set) {
    let type = typeof data
    let response = '';
    let has_object = false;
    if (type === 'object') {
        if (Array.isArray(data)) {
            let type_array = [];
            let obj = {}
            if (data.length !== 0) {
                data.forEach((x) => {                   
                    if (typeof x === 'object' && !Array.isArray(x)) {
                        has_object = true
                        for(let key in x){ 
                            if(obj.hasOwnProperty(key)){

                            }else{
                                
                            }                         
                        }
                    } else {                       
                        let pattern = TypeInference(name, x, set)
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
                let js_ob = JSON.stringify(obj)               
                name = checkingInterface(name + 'class', js_ob, obj, set)               
                if (type_array.length > 1) {
                    response = `${response}|${name}`
                } else {
                    response = `${response}${name}`
                }
            }
            response = `Array<${response}>`
        } else {
            response = name
        }
    } else {
        response = type
    }
    return response
}
function checkingInterface(key, jsson, object, set) {
    let res = ''
    if (!set.includes(jsson)) {
        CreatingData(key, object)
        set.push(jsson)
        res = key[0].toUpperCase() + key.slice(1)
        set.push(res)
    } else {
        let index = set.indexOf(jsson)
        res = set[index + 1]
    }
    return res
}
let interfaceNames={
    names:{

    }
}
let names=['','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
function TakingNames(name){
    let ele;    
    if(interfaceNames.names[name]){   
        let count=interfaceNames.names[name]       
        ele=names[count]+name   
        interfaceNames.names[name]+=1
    }else{
        interfaceNames.names[name]=1
        ele=name; 
    }
    return ele;
}
function ProcessingObject(object, set) {
    let obj = {}
    for (let key in object) {
        let type = typeof object[key]
        let value = object[key]
        if (type === 'object' && !Array.isArray(value)) {
            let res = ProcessingObject(value, set)
            let js_ob = JSON.stringify(res)            
            obj[key] = checkingInterface(key, js_ob, res, set)           
        } else {
            obj[key] = TypeInference(key, value, set)
        }
    }
    return obj
}
let response = '';
    let has_object = false;
    let array_obj = {}
    let type_array = []
    let name = x.constructor.name
    if(Array.isArray(data)){
        if (!data.length !== 0) {
            data.forEach((x) => {               
                if (name !== 'Object' && name !== 'Array') {
                    if (type_array.includes(name)) {
                    } else {
                        type_array.push(name)
                        if (type_array.length > 1) {
                            response += '|' + name;
                        } else {
                            response += name
                        }
                    }
                } else if (name === 'Array') {
                    response = AccesingArray(key, x, set);
                } else {
                    has_object = true;               
                    array_obj= LoopingObject(array_obj,x,set)
                }
            })
        } else {
            response = 'any'
        }        
        if (has_object) {
            key = CheckingInterface(key+'class', array_obj, set)
            if (type_array.length > 1) {
                response += '|' + key;
            } else {
                response += key
            }
        }
        response=`Array<${response}>`
    }else{
        response=name
    }    
    return  response


    x={
        title:'a',
        children:[
            {
                title:'b',
                children:[
                    {
                        title:'c'
                    }
                ]
            },{
                title:'d'
            }
        ]
    }