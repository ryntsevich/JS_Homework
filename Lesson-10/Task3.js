function compareObj(obj1, obj2) {
    var result = true;
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
        result = false;
    } else {
        for (var key in obj1) {
            if (obj2.hasOwnProperty(key)) {
                if ((typeof obj1[key] != 'object' && typeof obj1[key] != 'function') || (obj2[key] == null)) {
                    if (!(obj1[key] === obj2[key])) {
                        result = false;
                        break;
                    }
                } else if ((Array.isArray(obj1[key]) && Array.isArray(obj2[key])) && (!compareArray(obj1[key], obj2[key]))) {
                    result = false;
                    break;
                } else if ((typeof obj1[key] === 'function') && (typeof obj2[key] === 'function') && (obj1[key].toString() != obj2[key].toString())) {
                    result = false;
                    break;
                } else {
                    if (!compareObj(obj1[key], obj2[key])) {
                        result = false;
                        break;
                    }
                }
            } else {
                result = false;
                break;
            }
        }
    }
    return result;
}


function compareArray(arr1, arr2) {
    var result = true;
    if (arr1.length != arr2.length) {
        result = false;
    } else {
        for (var i = 0; i < arr1.length; i++) {
            if ((typeof arr1[i] != 'object') || (arr1[i] === null)) {
                if (arr1[i] != arr2[i]) {
                    result = false;
                    break;
                }
            } else if (Array.isArray(arr1[i]) && Array.isArray(arr2[i]) && (!compareArray(arr1[i], arr2[i]))) {
                result = false;
                break;

            }
        }
    }
    return result;
}

var obj1 = {
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

var obj2 = {
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


console.log(compareObj(obj1, obj2));