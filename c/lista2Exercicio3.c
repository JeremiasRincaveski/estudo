#include<stdio.h>
#include<stdlib.h>

int main(void){
   char sexo ;
   printf("FALE O SEXO: ");
   scanf("%c", &sexo);

   if (sexo == 'm')
   {
      printf("sexo masculino\n");
   }
   else if (sexo == 'f')
   {
      printf("sexo feminino\n");
   }
   else
   {
      printf("sexo indefinido\n");
   }
   system("PAUSE");
   return 0;
   return 0;
}