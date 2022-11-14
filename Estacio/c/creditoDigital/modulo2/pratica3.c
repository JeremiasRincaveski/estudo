#include <stdio.h>
int main()
{
    int matriz1[4][4];
    int matriz2[4][4];
    int soma = 1;
    for (int i = 0; i < 4; i++)
    {
        for (int x = 0; x < 4; x++)
        {
            matriz1[i][x] = soma;
            soma++;
            printf("%d   ", matriz1[i][x]);
        }
        printf("\n");
    }
    for (int i = 0; i < 4; i++)
    {
        for (int x = 0; x < 4; x++)
        {
            matriz2[i][x] = matriz1[x][i];
            printf("%d   ", matriz2[i][x]);
        }
        printf("\n");
    }
}