#include <stdio.h>
int main()
{
    int matriz[4][4];
    int soma = 0;
    for (int i = 0; i < 4; i++)
    {
        for (int x = 0; x < 4; x++)
        {
            if (i == x)
            {
                matriz[i][x] = 0;
                soma++;
            }
            else
            {
                matriz[i][x] = soma;
                soma++;
            }
            printf("%d   ", matriz[i][x]);
        }
        printf("\n");
    }
}