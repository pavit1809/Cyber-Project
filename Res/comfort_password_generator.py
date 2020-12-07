#Password generator
import random
S_numbers,S_lower,S_upper,S_special="1234567890","abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","""~`!@#$%^&*()_+=-\][|}"':;?/>.<,{"""
L_numbers,L_lower,L_upper,L_special=list(S_numbers),list(S_lower),list(S_upper),list(S_special)
L_final=L_numbers+L_lower+L_upper+L_special
N_length=int(input("Enter the length of the password:"))
if N_length==0:
    print("Invalid inputs")
else:
    N,n=int(input("Enter the number of password you want to be generated:")),0
    while n<N:
        random.shuffle(L_final)
        L_password = []
        for i in range(N_length):
            L_password.append(random.choice(L_final))
        random.shuffle(L_password)
        S_password=''.join(L_password)
        print(S_password)
        n+=1





