
// first need a function to sort by start interval
// second need to iterate and compare end time of i with start time of i+1
// https://leetcode.com/problems/meeting-rooms/

function solution(array){
    const sortedData = array.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < array.length - 1; i++) { 

        if( array[i][1] > array[i+1][0]){
            return false;
        }
        
    }
    return true;
}

const data = [[0,3],[5,10],[15,20]] 
console.log(solution(data))