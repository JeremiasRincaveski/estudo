#include <stdio.h>
int main()
{
    int matriz[3][4] = {{2, 9, 7, 3},{ 8, 11, 3, 4},{5, 4, 3, 1}};
    auto soma = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int x = 0; x < 4; x++)
        {
            (matriz[i][x] % 2 == 0) ? printf("%d eh par\n", matriz[i][x]) : printf("%d eh impar\n", matriz[i][x]);
        }
    }
}