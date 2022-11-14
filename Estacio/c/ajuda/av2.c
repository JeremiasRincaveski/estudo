#include<stdio.h>
int main(){
    int n, s = 0;
    printf("digite um numero inteiro = ");
    scanf("%d", &n);
    printf("%d\n", n);
    while (n > 0)
    {
        s = s + (n--);
    }
    printf("numero digitado = %d\nsoma = %d", n,s);
}