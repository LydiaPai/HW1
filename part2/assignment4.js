function twoSum(nums, target){
    let ans_list = [];
    for ( let i = 0 ; i < nums.length ; i++) {
        number=target-nums[i];
        if(nums.includes(number)){
            let j = nums.indexOf(number) ;
            ans_list = [i,j];
        }  
    }
    return ans_list;
}
console.log(twoSum([2,7,11,15], 9));