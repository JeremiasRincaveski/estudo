#include <stdio.h>
int main()
{
    int matriz[5][5];
    for (int i = 0; i < 5; i++)
    {
        for (int x = 0; x < 5; x++)
        {
            if (i == x)
            {
                matriz[i][x] = 0;
            }
            else
            {
                matriz[i][x] = 1;
            }
            printf("%d", matriz[i][x]);
        }
        printf("\n");
    }
}
