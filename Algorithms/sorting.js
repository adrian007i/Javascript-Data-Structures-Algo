// THE SORTING ALGOS
//  BUBBLE SORT (ELEMENTY SORTING BASIC) O(N)
//  WE BUBBLE UP THE HIGHEST NUMBER

function bubble_sort(arr) {

    if (arr.length === 0 || arr.length === 1)
        return arr;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp_next = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp_next;
            }

        }
    }
    return arr;
}
// console.log( bubble_sort([,100, 5,1,3,2,1 ,100]));

// SELECTION SORT (ELEMENTY SORTING BASIC) O(N)
// FIND SMALLEST ITEM - SWAP SMALLEST WITH FIRST

function selection_sort(arr) {
    if (arr.length === 0 || arr.length === 1)
        return arr;

    for (let i = 0; i < arr.length - 1; i++) {
        let smallest = [arr[i], i];

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < smallest[0]) {
                smallest = [arr[j], j];
            }
        }
        arr[smallest[1]] = arr[i];
        arr[i] = smallest[0];
    }
    return arr;
}
// console.log( selection_sort([100, 5,1,3,2,1 ,100]));

// INSERTION SORT (ELEMENTY SORTING BASIC) O(N)
// FAST WHEN THE LIST IS ALMOST SORTED
// SHIFT INDEXES AND INSERT IN RESPECTIVE PLACES

function insertion_sort(arr) {

    if (arr.length === 0 || arr.length === 1)
        return arr;

    for (let i = 1; i < arr.length; i++) {

        // check if item is is smaller than first element
        if (arr[i] <= arr[0]) {
            arr.unshift(arr.splice(i, 1)[0]);
        } else {
            // only look for position between 2 indexes
            if (arr[i - 1] > arr[i]) {
                for (let j = i; j >= 1; j--) {

                    if (arr[i] >= arr[j - 1] && arr[i] <= arr[j])
                        arr.splice(j, 0, arr.splice(i, 1)[0])

                }
            }
        }
    }
    return arr;
}
// console.log( selection_sort([100, 5,1,3,2,1 ,100]));


// MERGE SORT O(N LOG N)
// DIVIDE AND CONQUER

function merge_sort(array) {
    if (array.length === 1) {
        return array;
    }

    var half_length = Math.ceil(array.length / 2);
    return merge(merge_sort(array.splice(0, half_length)), merge_sort(array.splice(-half_length)));
}

function merge(left, right) {
    let merged = [];
    while (left.length+right.length != 0) { 
        if (left.length == 0) { 
            merged =merged.concat(right);
            right=[];
            break;
            
        }
        else if (right.length == 0) {  
            merged = merged.concat(left);
            left=[];
            break;
        } else {
            if (left[0] < right[0])
                merged.push(left.shift())
            else
                merged.push(right.shift())
        }
    } 
    return merged;

}
// console.log(merge_sort([4,3,2,1]));
  
function quickSort(array){

    // nothing to pivot
    if(array.length <= 1 )
        return array;
     
    const pivot_result = pivot(array); 

           //left                                      //pivot point                           //right 
    return quickSort(array.slice(0, pivot_result[1])).concat([array[pivot_result[1]]]).concat(quickSort(array.slice(pivot_result[1] + 1)));  
}

function pivot(arr){ 
    let pivot = arr.length-1;

    for (let i = 0; i < pivot; i++) { 

        if(arr[pivot] < arr[i]){
            const pivot_val = arr[pivot];
            arr[pivot] = arr[i];
            arr[i] =arr[pivot -1];
            arr[pivot -1 ]=pivot_val;
            i=-1;
            pivot--;
        } 
    }
    return [arr,pivot];
}
 
// console.log(quickSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));