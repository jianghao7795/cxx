var obj = {}, value = null;
Object.defineProperty(obj, "num", {
    get: function(){
        console.log('执行了 get 操作')
        return value;
    },
    set: function(newValue) {
        console.log('执行了 set 操作')
        value = newValue;
    }
})

obj.num = 1 // 执行了 set 操作

console.log(obj.num); // 执行了 get 操作 // 1


function Archiver() {
    var value = null;
    // archive n. 档案
    var archive = [];

    Object.defineProperty(this, 'num', { // this 指向Archiver的实例化
        get: function() {
            console.log('执行了 get 操作')
            return value;
        },
        set: function(value) {
            console.log('执行了 set 操作')
            value = value;
            archive.push({ val: value });
        }
    });

    this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.num; // 执行了 get 操作 // this 指向 arc
arc.num = 11; // 执行了 set 操作
arc.num = 13; // 执行了 set 操作
console.log(arc.getArchive()); // [{ val: 11 }, { val: 13 }]


(function(){
    var root = this;
    function watch(obj, name, func){
        var value = obj[name];

        Object.defineProperty(obj, name, {
            get: function() {
                return value;
            },
            set: function(newValue) {
                value = newValue;
                func(value)
            }
        });

        if (value) obj[name] = value
    }

    this.watch = watch;
})()

var obj = {
    value: 1
}

watch(obj, "value", function(newvalue){
    document.getElementById('container').innerHTML = newvalue;
})

document.getElementById('button').addEventListener("click", function(){
    obj.value += 1
});
