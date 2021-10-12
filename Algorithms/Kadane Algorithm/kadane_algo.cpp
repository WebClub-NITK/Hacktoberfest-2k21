

What is kadane algorithm?
Kadane's algorithm is an iterative dynamic programming algorithm in which we search for a maximum sum contiguous subarray within a one-dimensional numeric array.

int maxSubArray(vector<int>& nums) {
    int max_sum_so_far = INT_MIN;
    int max_sum_ending_here = 0;
    for(int i=0;i<nums.size();i++){
        max_sum_ending_here = max_sum_ending_here+nums[i];
        if(max_sum_ending_here>max_sum_so_far){
            max_sum_so_far=max_sum_ending_here;
        }
        if(max_sum_ending_here<0)max_sum_ending_here=0;
    }
    return max_sum_so_far;
}

// TC - O(n)
// SC - O(1)
