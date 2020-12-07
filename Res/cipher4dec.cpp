#include<bits/stdc++.h>
using namespace std;
char getchar(int coor)
{
	if (coor==62)
		return '_';
	if (coor>=0 && coor<26)
		return (char)(65+coor);
	if (coor>=26 && coor<52)
		return (char)(97+(coor-26));
	if (coor>=52 && coor<62)
		return (char)(48+(coor-52));
	return '!';
}
int search(int *A,int n,int flag)
{
	for(int i=0;i<n;i++)
	{
		if (A[i]==flag)
			return i;
	}
	return -1;
}
int pos(char ch)
{
	if (ch=='_')
		return 62;
	if ((int)ch>=97)
		return 26+(ch-'a');
	if ((int)ch>=48 && (int)ch<=57)
		return 52+(ch-'0');
	return (ch-'A');
}
int main()
{
	int data[63]={60,6,50,5,20,56,27,49,59,47,2,30,18,61,38,26,33,23,25,11,62,42,53,29,58,1,8,7,15,41,16,55,54,17,14,34,21,52,9,48,39,31,57,40,45,32,35,24,12,44,36,46,37,19,43,51,13,22,0,4,3,28,10};
	string input;
	cout<<"Enter the string you want to get decrypted :";
	cin>>input;
	double n=input.size();
	int noofshifts=ceil(sqrt((double)n));
	//In decryption right shift	
	string finalinput="";
	for(int i=n-noofshifts;i<n;i++)
		finalinput+=input[i];
	for(int i=0;i<=n-noofshifts-1;i++)
		finalinput+=input[i];	
	string output="";
	for(int i=0;i<n;i++)
	{
		int cpos=pos(finalinput[i]);
		int currpos=search(data,63,cpos);
		output+=getchar(currpos);
	}
	cout<<"Your decrypted string is :"<<output;
}