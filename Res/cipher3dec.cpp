#include<bits/stdc++.h>
using namespace std;
inline int modulo(int a,int b){return (b+(a%b))%b;} 
int modsub(int a,int b,int m){return modulo(modulo((modulo(a,m)-modulo(b,m)),m),m);}

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
	int data[63]={37,19,11,3,16,17,62,18,36,1,31,5,15,25,10,54,4,6,40,45,30,41,14,47,9,28,58,43,8,56,34,24,2,7,49,12,20,35,55,26,39,51,0,61,13,46,23,60,50,27,44,42,29,32,48,57,52,22,38,33,53,59,21};
	int shifter=3;//SPOILER: FIRST ARMSTRONG NUMBER
	string input;
	cout<<"Enter the message you want to get decrypted:";
	cin>>input;
	int n=input.size();
	string even="",odd="";
	for(int i=0;i<n;i++)
	{
		if ((i+1)%2==0)
			even+=input[i];
		else
			odd+=input[i];
	}
	for(int i=0;i<odd.size();i++)
	{
		int currpos=pos(odd[i]);
		int newpos=search(data,63,currpos);
		newpos=modsub(newpos,shifter,63);
		char newchar=getchar(newpos);
		odd[i]=newchar;
	}
	for(int i=0;i<even.size();i++)
	{
		int currpos=pos(even[i]);
		int newpos=search(data,63,currpos);
		newpos=(newpos+shifter)%63;
		char newchar=getchar(newpos);
		even[i]=newchar;	
	}
	string output="";
	int ko=0,ke=0;
	for(int i=0;i<n;i++)
	{
		if ((i+1)%2==0){
			output+=even[ke];
			ke++;		
		}
		else{
			output+=odd[ko];
			ko++;
		}
	}
	cout<<"The decrypted string is :"; 
	cout<<output;
}