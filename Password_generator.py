#Password generator
import random
S_numbers,S_lower,S_upper,S_special="1234567890","abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","""~`!@#$%^&*()_+=-\][|}"':;?/>.<,{"""
L_numbers,L_lower,L_upper,L_special=list(S_numbers),list(S_lower),list(S_upper),list(S_special)
N,n=int(input("Enter the number of password you want to be generated:")),0
N_length=int(input("Enter the length of password(>0):"))
N_upper, N_lower, N_special, N_numbers = int ( input ( "Enter the number of uppercase letters:" ) ), int (
    input ( "Enter the number of lowercase letters:" ) ), int (
    input ( "Enter the number of special characters:" ) ), int ( input ( "Enter the number of numeric characters:" ) )

if N_length==0 and N_upper+N_lower+N_special+N_numbers!=N_length:
    print("Invalid inputs")
else:
    while n<N:
        L_password = []
        for i in range ( N_upper ) :
            L_password.append ( random.choice ( L_upper ) )
        for i in range ( N_lower ) :
            L_password.append ( random.choice ( L_lower ) )
        for i in range ( N_special ) :
            L_password.append ( random.choice ( L_special ) )
        for i in range ( N_numbers ) :
            L_password.append ( random.choice ( L_numbers ) )
        random.shuffle(L_password)
        S_password=''.join(L_password)
        print(S_password)
        n+=1





