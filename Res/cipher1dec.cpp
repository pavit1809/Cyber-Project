#include<bits/stdc++.h>
using namespace std;
int search(int *A,int n,int flag)
{
	for(int i=0;i<n;i++)
	{
		if (A[i]==flag)
			return i;
	}
	return -1;
}
int main()
{
	//key table
	/****************************/
	int alpha[26]={4,7,13,10,9,23,0,8,22,18,17,19,21,16,6,12,5,3,25,24,15,1,20,11,14,2};
	int nums[10]={9,4,3,0,7,6,1,8,2,5};
	/***************************/		
	string message;
	cout<<"Enter the message you want to get decrypted:";
	getline(cin,message);
	string proper_message="";
	for(int i=0;i<message.size();i++)
	{
		if ((int)message[i]>=65 && (int)message[i]<=90)//for uppercase alphabet
		{
			int pos=message[i]-'A';
			int act=search(alpha,26,pos);
			char nch=(char)(65+act);	
			proper_message+=nch;
		}
		else if ((int)message[i]>=97 && (int)message[i]<=122)//for lowercase alphabet
		{
			int pos=message[i]-'a';
			int act=search(alpha,26,pos);
			char nch=(char)(97+act);
			proper_message+=nch;	
		}
		else if ((int)message[i]>=48 && (int)message[i]<=57)//for number
		{
			int pos=message[i]-'0';
			int act=search(nums,10,pos);
			char nch=(char)(48+act);
			proper_message+=nch;	
		}
		else if (message[i]=='#')//for space
		{
			proper_message+=' ';
		}
	}
	cout<<"Decrpted messgae is :"<<proper_message;
}
