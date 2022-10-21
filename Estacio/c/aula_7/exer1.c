#include <stdio.h>
#include <stdlib.h>

int main(void)
{

    int valorConta = 0;
    printf("digite o valor da conta ");
    scanf("%d", &valorConta);

    if (valorConta > 150)
    {
        printf("voce esta gastando muito\n");
    }
    
    system("PAUSE");
    return 0;

}