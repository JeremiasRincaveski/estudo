#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(void)
{
    int fator, s = 0;
    printf("insira o numero a ser fatorado: ");
    scanf("%d", &fator);
    s = fator;
    printf("N! = %d * ", fator);
    for (int i = fator; i > 2; i--)
    {
        fator--;
        printf("%d * ", fator);
        s = s * fator;
    }
    printf("1 : %d\n", s);

    system("PAUSE");
    return 0;
}