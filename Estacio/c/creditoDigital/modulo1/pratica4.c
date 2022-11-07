#include <stdio.h>
int main()
{

    int vetor1[50];
    int vetor2[50];

    for (int i = 0; i < 50; i++)
    {
        vetor1[i] = i + 1;
    }
    for (int i = 0; i < 50; i++)
    {
        if ((vetor1[i] % 2) == 0)
        {
            vetor2[i] = vetor1[i + 1];
        }
        else
        {
            vetor2[i] = vetor1[i - 1];
        }
        printf(" vetor 1 = %d\n", vetor1[i]);
    }
    for (int i = 0; i < 50; i++)
    {
        printf("vetor 2 = %d\n", vetor2[i]);
    }

    return 0;
}