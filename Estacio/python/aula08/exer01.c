#include <stdio.h>
#include <stdlib.h>

int main()
{
    typedef struct reg celula;
    struct reg
    {
        int conteudo;
        celula *prox;
    };

    celula *criar_celula()
    {
        celula *novo = (celula *)malloc(sizeof(celula));
        return novo;
    }

    celula *inserir_celula_inicio(celula * lista, int dado)
    {
        celula *nova_celula = criar_celula()
        nova_celula->conteudo = dado;
        if (lista == NULL)
        {
            lista = nova_celula;
            nova_celula->prox = NULL;
        }
        else
        {
            nova_celula->prox = lista;
            lista = nova_celula;
        }
        return lista;
    }

    void imprimir_lista(celula * lista)
    {
        celula *aux = lista;
        while (aux != NULL)
        {
            printf("%d", aux->conteudo);
            printf("\n");
            aux = aux->prox;
        }
    }

    celula *lista = NULL
    lista = inserir_celula_inicio(lista, 10);
    lista = inserir_celula_inicio(lista, 20);
    lista = inserir_celula_inicio(lista, 30);
    lista = inserir_celula_inicio(lista, 40);
    imprimir_lista(lista);
    return 0;
}