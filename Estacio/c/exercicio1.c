#include <stdio.h>
#include <stdlib.h>
#include<stdbool.h>

int main(void)
{
    float gasolina,kmL = 10,t = 30, v = 100;
    t = t/60;
    gasolina = (t * v) * kmL;
    printf("gasolina gasta: %2.f\n",gasolina);

    system("PAUSE");
    return 0;
}