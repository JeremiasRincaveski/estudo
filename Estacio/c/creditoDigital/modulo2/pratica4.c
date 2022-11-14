#include <stdio.h>
int main()
{
    int matriz1[3][3];
    int maiorValor = 0;
    int validaValor = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int x = 0; x < 3; x++)
        {
            scanf("%d", &matriz1[i][x]);
            printf("matriz[%d][%d] = %d\n", i, x, matriz1[i][x]);
            if (matriz1[i][x] > maiorValor)
            {
                maiorValor = matriz1[i][x];
            }
        }
        printf("\n");
    }
    for (int i = 0; i < 3; i++)
    {
        for (int x = 0; x < 3; x++)
        {
            printf("%d    ", matriz1[i][x]);
            if (matriz1[i][x] == maiorValor)
            {
                validaValor++;
            }
        }
        printf("\n");
    }
    printf("\n Maior: %d ",maiorValor);
    printf("\n Ocorrenias do maior: %d ",validaValor);
}