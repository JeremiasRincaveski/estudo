#include <stdio.h>

int main(void)
{
    int v[10];
    int i;
    for (i = 0; i < 10; ++i)
    {
        v[i] = 9 - i;
        //printf("v[%d] = %d\n", i,v[i]);
    }
    printf("\n");
    for (i = 0; i < 10; ++i)
    {
        //v[0] = v[v[0]] == 
        v[i] = v[v[i]];
        printf("v[%d] = %d\n", i,v[v[i]]);
    }
}