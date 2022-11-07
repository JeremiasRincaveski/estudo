#include <stdio.h>
#include <stdlib.h>

int main()
{
    int x[10];
    int i = 0;
    for (i = 0; i < 10; i++)
    {
        x[i] = i;
        printf("%d \n", x[i]);
        printf("\n");
    }

    for (i = 9; i >= 0; i--)
    {
        printf("%d \n", x[i]);
    }
    

    system("PAUSE");
    return (0);
}