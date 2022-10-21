#include<stdio.h>
#include<stdlib.h>

int main(void){
   int nun1, nun2, nun3, valor1, valor2;
   printf("Digite o numero 1: ");
   scanf("%d", &nun1);
   printf("Digite o numero 2: ");
   scanf("%d", &nun2);
   printf("Digite o numero 3: ");
   scanf("%d", &nun3);

   if (nun1>nun2 && nun1>nun3)
   {
      valor1 = nun1;
   }
   else if (nun2>nun1 && nun2>nun3)
   {
      valor1 = nun2;
   }
   else
   {
      valor1 = nun3;
   }
   if (nun1<nun2 && nun1<nun3)
   {
      valor2 = nun1;
   }
   else if (nun2<nun1 && nun2<nun3)
   {
      valor2 = nun2;
   }
   else
   {
      valor2 = nun3;
   }

    printf("Maior valor e: %d\n",valor1);
    printf("Menor valor e: %d\n",valor2);
    
   system("PAUSE");
   return 0;
}