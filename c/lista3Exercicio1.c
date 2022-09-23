#include <stdio.h>
#include <stdlib.h>

int main(void)
{


     int nota;
     printf("%d\n", nota);
     
     while (nota >= 10){
          printf("Digite uma nota entre 0 e 10: ");
          scanf("%d", &nota);
     }

     system("PAUSE");
     return 0;
}