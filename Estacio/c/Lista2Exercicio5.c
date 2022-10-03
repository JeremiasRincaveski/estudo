#include<stdio.h>
#include<stdlib.h>

int main(void){
   int nota1, nota2;
   float media;
   printf("Digite a nota 1: ");
   scanf("%d", &nota1);
   printf("Digite a nota 2: ");
   scanf("%d", &nota2);

    media = (nota1 + nota2) / 2;

   if (media == 10)
   {
      printf("APROVADO COM DISTINCAO\n");
   }
   else if (media >= 7)
   {
      printf("ALUNO APROVADO\n");
   }
   else
   {
      printf("REPROVADO\n");
   }
   system("PAUSE");
   return 0;
}