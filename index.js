function findMinAndRemoveSorted(array){
    return array.shift()
}

function merge(array1, array2){
    if(array1.length == 0){
        return array2;
    }else if(array2.length == 0){
        return array1;
    }

    let merged = [];

    while(array1.length != 0 && array2.length != 0){
        if(array1[0] < array2[0]){
            merged.push(findMinAndRemoveSorted(array1));
        }else{
            merged.push(findMinAndRemoveSorted(array2));
        }
    }

    return [...merged, ...array1, ...array2];
}

function mergeSort(array){
    if(array.length <= 1){
        return array;
    }else{
        let firstHalf = array.slice(0, array.length/2);
        let secondHalf = array.slice(array.length/2);
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}