#include <stdio.h>
int main()
{

    int vetor1[50];
    int vetor2[10];

    for (int i = 0; i < 50; i++)
    {
        vetor1[i] = i + 1;
    }
    for (int i = 0; i < 10; i++)
    {
        printf("digite um valor: ");
        scanf("%d", &vetor2[i]);
    }
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 50; j++)
        {
            if (vetor2[i] == vetor1[j])
            {
                printf("%d\n", vetor2[i]);
            }
        }
    }

    return 0;
}