#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int av1;
    int av2;

    printf("digite a primeira nota: ");
    scanf("%d", &av1);

    printf("digite a segunda nota: ");
    scanf("%d", &av2);

    if (((av1 + av2) / 2) < 7)
    {
        printf("precisa fazer a AV3\n");
    }
    
    system("PAUSE");
    return 0;
}