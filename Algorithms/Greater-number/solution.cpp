/*
Given a number n, find the smallest number that has same set of digits as n and is greater than n. If x is the greatest possible number with its set of digits, then print “not possible”.
ex:
Input: n = "1234"
Output: "1243"

Input: n = "4321"
Output: "Not Possible"
*/


#include <bits/stdc++.h>
using namespace std;
 

void swap(char *a, char *b)
{
    char temp = *a;
    *a = *b;
    *b = temp;
}

void findNext(string number)
{
    int n = number.size();
    int i, j;
    for (i = n-1; i > 0; i--)
        if (number[i] > number[i-1])
           break;

    if (i==0)
    {
        cout << "not possible";
        return;
    }

    int x = number[i-1], smallest = i;
    for (j = i+1; j < n; j++)
        if (number[j] > x && number[j] < number[smallest])
            smallest = j;
 
    swap(&number[smallest], &number[i-1]);

    sort(number.begin() + i, number.begin() + n);
 
    cout << number;
 
    return;
}
 
int main()
{
    string number;
    cin>>number;
    findNext(number);
    return 0;
}

// Time Complexity: O(N*logN) 
// Space Complexity: O(1)