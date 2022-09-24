#include <stdio.h>
#include <stdlib.h>
#include<stdbool.h>

int main(void)
{
    int a = 1, b = 2, x;
    printf("valor de a: %d, valor de b: %d\n", a, b);
    x = a;
    a = b;
    b = x;
    printf("valor de a: %d, valor de b: %d\n", a, b);

    system("PAUSE");
    return 0;
}