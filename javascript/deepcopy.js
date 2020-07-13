// 深拷贝(递归复制，复制所有层级，独立副本，一个完全和原来对象属性无关的副本)

function deepCopy(data){
    let memory = null;
    const type = Object.prototype.toString.call(data);
    if (type === "[object Array]"){
        memory = []
        for (let i=0 ;i<data.length;i++){
            memory.push(deepCopy(data[i]))
        }
    }else if (type === "[object Object]"){
        memory = {}
        Object.keys[data].forEach((key)=>{
            memory[key] = data[key]
        })
    }else{
        return data;
    }
    return memory;
}

function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    let result
    if(obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }

    return result
}


// 浅拷贝（单次复制，复制最高层级，引用副本，一个基于对原对象属性引用的副本）
var copiedObject = Object.assign({},originalObject)
function shallowCopyObj(original){
    let copy = {}
    Object.keys(original).forEach(key=>{
        copy[key] = original[key]
    })
    return copy
}
