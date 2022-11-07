#include<stdio.h>
#include<stdlib.h>

int main() {
    int num,maior,ind;
    maior = 0;
    printf ("ola");
    for (ind= 1; ind <=7; ind=ind+1) {
        scanf ("%d",&num);
        if (num > maior) {
            maior=num;
        }
    }
    printf ("O maior dos números lidos e: \n %d", maior);
    return (0);
}