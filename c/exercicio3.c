#include <stdio.h>
#include <stdlib.h>
#include<stdbool.h>

int main(void)
{
    float velocidade = 100, tempo = 30, distancia, gasolina;
    tempo = tempo / 60;
    distancia = velocidade * tempo;
    printf("distancia percorida: %2.f km\n", distancia);
    gasolina = (tempo * velocidade) * 10;
    printf("Gasolina gasta = %1.f\n", gasolina);

    system("PAUSE");
    return 0;
}