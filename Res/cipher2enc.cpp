#include<bits/stdc++.h>
using namespace std;
int get(char ch)
{
	return (int)ch;
}
bool checkc(char ch)
{
	return (get(ch)>=65 && get(ch)<=90);	
}
bool checks(char ch)
{
	return (get(ch)>=97 && get(ch)<=122);
}
bool checkn(char ch)
{
	return (get(ch)>=48 && get(ch)<=57);
}
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
int main()
{
	cout<<endl;
	int A[63]={5,42,59,61,21,18,44,10,31,35,32,23,30,19,43,22,40,48,47,9,58,26,25,2,24,37,53,13,15,6,12,39,8,3,1,38,52,34,41,57,28,50,4,14,11,46,55,54,20,27,56,62,29,17,7,51,0,60,49,45,16,33,36};
	int B[63]={11,12,4,27,10,61,21,38,34,25,35,29,22,9,0,56,44,39,32,52,23,55,49,54,13,5,3,41,42,2,51,50,40,48,14,33,20,19,15,60,16,26,47,7,31,28,36,43,58,62,6,17,53,46,45,1,30,24,37,8,57,59,18};
	//to handle odd length messages
	int alpha[26]={4,7,13,10,9,23,0,8,22,18,17,19,21,16,6,12,5,3,25,24,15,1,20,11,14,2};
	int nums[10]={9,4,3,0,7,6,1,8,2,5};
	//**************
	int data[63][63][2];
	for(int i=0;i<63;i++)
	{
		for(int j=0;j<63;j++)
		{
			data[i][j][0]=A[i];// specifies the row
			data[i][j][1]=B[j];// specifies the col
		}
	}
	string input;
	cout<<"Please enter space as underscore(_) sign for convienience of decryption:";
	cin>>input;
	int n=input.size();
	if (n==1)
	{
		if ((int)input[0]>=65 && (int)input[0]<=90)//for uppercase alphabet
		{
			int pos=input[0]-'A';
			char nch=(char)(65+alpha[pos]);
			cout<<"Your encrypted string is :"<<nch;
		}
		else if ((int)input[0]>=97 && (int)input[0]<=122)//for lowercase alphabet
		{
			int pos=input[0]-'a';
			char nch=(char)(97+alpha[pos]);
			cout<<"Your encrypted string is :"<<nch;	
		}
		else if ((int)input[0]>=48 && (int)input[0]<=57)//for number
		{
			int pos=input[0]-'0';
			char nch=(char)(48+nums[pos]);
			cout<<"Your encrypted string is :"<<nch;	
		}
		else if (input[0]=='_')//for space
		{
			cout<<"Your encrypted string is :"<<'#';
		}
		return 0;
	}
	string answer="";
	for(int i=0;i<n-(n%2);i+=2)
	{
		if (checkc(input[i]) && checkc(input[i+1]))
		{
			int row=input[i]-'A';
			int col=input[i+1]-'A';
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checkc(input[i]) && checks(input[i+1]))
		{
			int row=input[i]-'A';
			int col=26+(input[i+1]-'a');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checkc(input[i]) && checkn(input[i+1]))
		{
			int row=input[i]-'A';
			int col=52+(input[i+1]-'0');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checkc(input[i]) && (input[i+1]=='_'))
		{
			int row=input[i]-'A';
			int col=62;
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checks(input[i]) && checks(input[i+1]))
		{
			int row=26+(input[i]-'a');
			int col=26+(input[i+1]-'a');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checks(input[i]) && checkc(input[i+1]))
		{
			int row=26+(input[i]-'a');
			int col=(input[i+1]-'A');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checks(input[i]) && checkn(input[i+1]))
		{
			int row=26+(input[i]-'a');
			int col=52+(input[i+1]-'0');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checks(input[i]) && (input[i+1]=='_'))
		{
			int row=26+(input[i]-'a');
			int col=62;
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checkn(input[i]) && checkn(input[i+1]))
		{
			int row=52+(input[i]-'0');
			int col=52+(input[i+1]-'0');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checkn(input[i]) && checkc(input[i+1]))
		{
			int row=52+(input[i]-'0');
			int col=(input[i+1]-'A');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checkn(input[i]) && checks(input[i+1]))
		{
			int row=52+(input[i]-'0');
			int col=26+(input[i+1]-'a');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if (checkn(input[i]) && (input[i+1]=='_'))
		{
			int row=52+(input[i]-'0');
			int col=62;
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if ((input[i]=='_') && checkc(input[i+1]))
		{
			int row=62;
			int col=(input[i+1]-'A');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if ((input[i]=='_') && checks(input[i+1]))
		{
			int row=62;
			int col=26+(input[i+1]-'a');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
		else if ((input[i]=='_') && checkn(input[i+1]))
		{
			int row=62;
			int col=52+(input[i+1]-'0');
			int nrow=data[row][col][0];
			int ncol=data[row][col][1];
			answer+=getchar(nrow);
			answer+=getchar(ncol);
		}
	}
	if (n%2!=0)
	{
		if ((int)input[n-1]>=65 && (int)input[n-1]<=90)//for uppercase alphabet
		{
			int pos=input[n-1]-'A';
			char nch=(char)(65+alpha[pos]);
			answer+=nch;
		}
		else if ((int)input[n-1]>=97 && (int)input[n-1]<=122)//for lowercase alphabet
		{
			int pos=input[n-1]-'a';
			char nch=(char)(97+alpha[pos]);
			answer+=nch;	
		}
		else if ((int)input[n-1]>=48 && (int)input[n-1]<=57)//for number
		{
			int pos=input[n-1]-'0';
			char nch=(char)(48+nums[pos]);
			answer+=nch;	
		}
		else if (input[n-1]=='_')//for space
		{
			char nch='#';
			answer+=nch;
		}
	}
	cout<<"Your encrypted string is :"<<answer;
	cout<<endl;
}