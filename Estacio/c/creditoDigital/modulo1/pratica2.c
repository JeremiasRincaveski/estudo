#include <stdio.h>
#include <stdlib.h>

int main()
{

    float notas[20] = {5.0, 5.0, 4.2, 6.7, 8.5, 9.0, 5.5, 6.0, 10.0, 5.2, 6.2, 7.2, 8.4, 4.5, 5.5, 6.5, 3.0, 5.1, 7.5, 8.0};
    float media = 0;
    for (int i = 0; i < 20; i++)
    {
        media += notas[i];
    }
    media = media / 20;
    for (int i = 0; i < 20; i++)
    {
        if (notas[i] >= media)
        {
            printf("%0.1f \n", notas[i]);
        }
    }
    system("PAUSE");
    return (0);
}