#include <stdio.h>
#include<stdlib.h>

int main()
{
    char sexo;
    int idade;
    printf("digite o seu sexo: ");
    scanf("%c", &sexo);

    printf("digite a sua ideda: ");
    scanf("%d", &idade);
    if (idade > 60)
    {
        printf("sexo: %c, maior de 60 anos", sexo);
        printf("\n");
    }
    else
    {
        printf("sexo: %c, menor de 60 anos", sexo);
        printf("\n");
    }
    system("PAUSE");
    return (0);
}