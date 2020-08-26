/**
 * 普通数组快速排序
 *
 * @param arr Array 数字数组
 * @param dir asc升序、desc降序
 *
 * @example:
 * sort([1,4,2,5])
 * sort([1,4,2,5],'asc')
 * sort([1,4,2,5],'desc')
 */
export function sort(arr,dir){
    dir=dir||'asc';
    if (arr.length == 0) return [];

    var left = new Array();
    var right = new Array();
    var pivot = arr[0];

    if(dir==='asc'){//升序
        for (var i = 1; i < arr.length; i++) {
            arr[i] < pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }else{//降序
        for (var i = 1; i < arr.length; i++) {
            arr[i] > pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }
    return _this.sort(left,dir).concat(pivot, _this.sort(right,dir));
}

/**
 * 对象数组快速排序
 *
 * @param arr Array 对象数组
 * @param key string 用于排序的属性
 * @param dir asc升序、desc降序
 *
 * @example:
 * sort([{name:'b',id:12},{name:'c',id:21},{name:'a',id:2}],'id')
 * sort([{name:'b',id:12},{name:'c',id:21},{name:'a',id:2}],'id','asc')
 * sort([{name:'b',id:12},{name:'c',id:21},{name:'a',id:2}],'id','desc')
 */
export function sortObj(arr,key,dir){
    key=key||'id';
    dir=dir||'asc';
    if (arr.length == 0) return [];

    var left = new Array();
    var right = new Array();
    var pivot = arr[0][key];
    var pivotObj = arr[0];

    if(dir==='asc'){//升序
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] < pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }else{//降序
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] > pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }
    return _this.sortObj(left,key,dir).concat(pivotObj, _this.sortObj(right,key,dir));
}

 
/**
 * 普通数组插入排序
 *
 * @param arr Array 数字数组
 * @param dir asc升序、desc降序
 *
 * @example:
 * sort([1,4,2,5])
 * sort([1,4,2,5],'asc')
 * sort([1,4,2,5],'desc')
 */
export function sort2  (arr, dir) {
    dir = dir || 'asc';
    if (arr.length == 0) return [];

    var i, j , x = 0;
    for (i = 1; i < arr.length; i++) {
        for (j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                x = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = x;
            }
        }
    }
    return dir=="desc"?arr.reverse():arr;
}
