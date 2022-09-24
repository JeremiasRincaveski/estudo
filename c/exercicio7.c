#include <stdio.h>
#include <stdlib.h>
#include<stdbool.h>

int main(void)
{
    int n, s = 0;
    printf("insira um valor: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {    
        printf("valor de s: %d\n",s);
        s = s + 1;
    }   
    printf("valor de s: %d\n",s);
    s = s + n;
    printf("valor de s: %d\n",s);

    system("PAUSE");
    return 0;
}