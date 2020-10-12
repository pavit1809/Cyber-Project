#include<bits/stdc++.h>
using namespace std;
int main()
{
	//key table
	/****************************/
	int alpha[26]={4,7,13,10,9,23,0,8,22,18,17,19,21,16,6,12,5,3,25,24,15,1,20,11,14,2};
	int nums[10]={9,4,3,0,7,6,1,8,2,5};
	/***************************/		
	string message;
	cout<<"Enter the message you want to get encrypted:";
	getline(cin,message);
	string cipheredmessage="";
	for(int i=0;i<message.size();i++)
	{
		if ((int)message[i]>=65 && (int)message[i]<=90)//for uppercase alphabet
		{
			int pos=message[i]-'A';
			char nch=(char)(65+alpha[pos]);
			cipheredmessage+=nch;
		}
		else if ((int)message[i]>=97 && (int)message[i]<=122)//for lowercase alphabet
		{
			int pos=message[i]-'a';
			char nch=(char)(97+alpha[pos]);
			cipheredmessage+=nch;	
		}
		else if ((int)message[i]>=48 && (int)message[i]<=57)//for number
		{
			int pos=message[i]-'0';
			char nch=(char)(48+nums[pos]);
			cipheredmessage+=nch;	
		}
		else if ((int)message[i]==32)//for space
		{
			cipheredmessage+='#';
		}
	}
	cout<<"Encrypted message is :"<<cipheredmessage;
}
