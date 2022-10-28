nome = 'fulano'

s = ''

nome2 = ''
h = ''

nome2 = nome

for letra in nome:
    s+letra

for i in range (len (nome)):
    h = s[0:8-i]
    print(h)