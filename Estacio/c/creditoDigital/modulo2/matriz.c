#include <stdio.h>
int main()
{
    /*
    int prova[3][5] = {{0, 1, 2, 3, 4}, {5, 6, 7, 8, 9}, {10, 11, 12, 13, 14}};

    // como percorer a matriz
    for (int i = 0; i < 3; i++)
    {
        printf("linha %d\n", i);
        for (int x = 0; x < 5; x++)
        {
            printf("%d\n", prova[i][x]);
        }
    }
    */

    // se colocar um elemento fora da matriz ela até funciona mas em geral acontece um bug
    /*
    printf("%d\n", prova[4][6]);
    prova[4][6] = 901;
    printf("%d\n", prova[4][6]);
    scanf("%d", &prova[99][6]);
    printf("%d\n", prova[99][6]);
    */

    int mat[3][100];
    int linha;
    int coluna;

    for (linha = 0; linha < 3; linha++)
    {
        printf("\n dados da linha = %d\n", linha);
        for (coluna = 0; coluna < 100; coluna++)
        {
            mat[linha][coluna] = 0;
            printf("%d", mat[linha][coluna]);
        }
    }
}