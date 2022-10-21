#include <stdio.h>
#include <stdlib.h>
#include<stdbool.h>

int main(void)
{

    int a, b, c, d;
    bool bc, da, cdab, cd, aa;

    printf("Digite o valor 1: ");
    scanf("%d",&a);
    printf("Digite o valor 2: ");
    scanf("%d",&b);
    printf("Digite o valor 3: ");
    scanf("%d",&c);
    printf("Digite o valor 4: ");
    scanf("%d",&d);

    if (b>c)
    {
        bc = true;
    }
    if (d>a)
    {
        da = true;
    }
    if ((c + d) > (a + b))
    {
        cdab = true;
    }
    if (c + d > 0)
    {
        cd = true;
    }
    if (a % 2 == 0)
    {
        aa = true;
    }
    
    if (bc &&da &&cdab &&cd &&aa)
    {
        printf("valores validos\n");
    }else{
        printf("valores invalidos\n");
    }
    

    system("PAUSE");
    return 0;
}