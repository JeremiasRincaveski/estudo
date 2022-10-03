#include <stdio.h>
#include <stdlib.h>
#include<stdbool.h>

int main(void)
{
    float gasolina,kmL = 12, t, v;
    printf("escreva o tempo em min: ");
    scanf("%f",&t);
    printf("escreva a velocidade em km/h: ");
    scanf("%f", &v);
    
    t = t/60;
    gasolina = (t * v) * kmL;
    printf("gasolina gasta: %1.f\n",gasolina);

    system("PAUSE");
    return 0;
}