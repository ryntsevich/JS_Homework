function deepClone(originObject) {
    var cloneObject = {};
    for (var key in originObject) {
        if ((typeof originObject[key] != 'object') || (originObject[key] == null)) {
            cloneObject[key] = originObject[key];
        } else if (Array.isArray(originObject[key])) {
            cloneObject[key] = cloneArray(originObject[key]);
        } else {
            cloneObject[key] = deepClone(originObject[key]);
        }
    }
    return cloneObject;
}

function cloneArray(originArray) {
    var clonedArray = [];
    for (var i = 0; i < originArray.length; i++) {
        if ((typeof originArray[i] != 'object') || (originArray[i] == null)) {
            clonedArray[i] = originArray[i];
        } else if (Array.isArray(originArray[i])) {
            clonedArray[i] = cloneArray(originArray[i]);
        } else {
            clonedArray[i] = deepClone(originArray[i]);
        }
    }
    return clonedArray;
}


var obj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};


var clone = deepClone(obj);

clone.object.object2.array2[1].name = 'Vasya';
clone.array.push(2);

console.log(obj);
console.log(clone);
