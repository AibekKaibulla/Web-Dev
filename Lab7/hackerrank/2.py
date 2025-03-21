# The minion game: medium

vowels = {'A', 'E', 'I', 'O', 'U'}
# consonants = {'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 
# 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'}

def minion_game(string):
    n = len(string) - 1
    
    vowels_idx = []
    consonants_idx = []
    # res_idx = []
    
    for i in range(n + 1):
        if string[i] in vowels:
            vowels_idx.append(i)
        else:
            consonants_idx.append(i)
            
    kevin, stuart = 0, 0
    
    for num in vowels_idx:
        kevin += (n - num + 1)
    
    for num in consonants_idx:
        stuart += (n - num + 1)
        
    if kevin > stuart:
        print("Kevin", kevin)
    elif kevin < stuart:
        print("Stuart", stuart)
    else:
        print("Draw")
    
    # your code goes here

if __name__ == '__main__':
    s = input()
    minion_game(s)