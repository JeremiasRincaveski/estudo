#include <stdio.h>
#include <stdlib.h>
int main()
{
typedef struct reg celula;
struct reg {
int conteudo;
celula *prox; };
celula *lista=NULL;
celula *novo=(celula*)malloc(sizeof(celula));
celula *nova_celula=novo;
nova_celula->conteudo=10;
if (lista== NULL){
lista=nova_celula;
nova_celula->prox=NULL; }
else {
nova_celula->prox=lista;
lista=nova_celula; }
celula *novo1=(celula*)malloc(sizeof(celula));
celula *nova_celula1=novo1;
nova_celula1->conteudo=20;
if (lista== NULL){
lista=nova_celula1;
nova_celula1->prox=NULL; }
else{
nova_celula1->prox=lista;
lista=nova_celula1; }
celula *novo2=(celula*)malloc(sizeof(celula));
celula *nova_celula2=novo2;
nova_celula2->conteudo=30;
if (lista== NULL){
lista=nova_celula2;
nova_celula2->prox=NULL; }
else{
nova_celula2->prox=lista;
lista=nova_celula2; }
celula *novo3=(celula*)malloc(sizeof(celula));
celula *nova_celula3=novo3;
nova_celula3->conteudo=40;
if (lista== NULL){
lista=nova_celula3;
nova_celula3->prox=NULL; }
else{
nova_celula3->prox=lista;
lista=nova_celula3; }
celula *aux=lista;
while (aux!=NULL) {
printf("%d",aux->conteudo);
printf ("\n");
aux=aux->prox;
}
return 0;
}
