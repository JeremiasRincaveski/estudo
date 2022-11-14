#include <stdio.h>
#include <stdlib.h>
int main()
{
    int vet[8] = {5, 1, 4, 2, 7, 8, 3, 6};
    int ind, aux;
    for (ind = 7; ind >= 0; ind--)
    {
        aux = vet[7 - ind];
        // aux = vet[7 - ind] = 0  aux == 5
        vet[7 - ind] = vet[ind];
        //vet[0] = vet[7] vet[0] == 6
        vet[ind] = aux;
        //vet[7] = vet[0] vet[7] == 5
        printf("%d", vet[ind]);
    }
    return 0;
}
