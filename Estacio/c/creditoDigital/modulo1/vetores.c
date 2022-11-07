#include <stdio.h>
#include <stdlib.h>
#include<string.h>

int main()
{

    // Linguagem C
    int vet[10];
    vet[0] = 5;
    vet[1] = 6;
    vet[3] = 8;
    vet[4] = 12;
    vet[5] = 18;
    vet[6] = 22;
    vet[7] = 34;
    vet[8] = 78;
    vet[9] = 45;

    for (int i = 0; i < 10; i++)
    {
        printf("%d \n", vet[i]);
    }

    printf("%d Posicao 1 do vetor:\n", vet[1]);
    printf("%d Posicao 10 do vetor:\n", vet[10]);
    vet[10] = 901;
    scanf("%d", &vet[10]);
    printf("%d \n", vet[10]);

    system("PAUSE");
    return (0);
}