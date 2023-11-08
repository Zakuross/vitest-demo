**Fonctions** :

1 - nom : "addElem" qui permet d'ajouter un élément à la liste

2 - nom : "modifyElem" permet de modifier un élément à la liste

3 - nom : "deleteElem" permet de supprimer un élément à la liste

4 - nom : "indexElem" permet de modifier/supprimer l'index d'un élément à liste

5 - nom : "doneElem" permet de changer le status d'un élément à la liste 


Tests :

````
Nom du test : 

ID : 

Objectif : 

Conditions préalables : 

Étapes de test :

1 : 
2 : 
3 : 

Résultat attendu : 
````

````
NOM : Ajout d'un élément à ma liste          
ID : 0

Objectif : test permettant de valider l'ajout d'un élément

Etapes de test :
1 - créer un élément possédant un label et un status done valant : false
2 - ajouter cet élément au tableau (liste)

Résultat : un élément supplémentaire apparait dans ma liste
````
````
NOM : Modifier un élément          
ID : 1

Objectif : valider la modification d'un élément

Etapes de test :
1 - sélectionner un élément de mon tableau
2 - donner de nouvelles valeurs à son label et/ou changer la valeur de son status

Résultat : un élément de liste est modifié
````
````
NOM : Supprimer un élément
ID : 2

Objectif : valider la suppresion d'un élément 

Etapes de test :
1 - sélectionner un élément de mon tableau
2 - 

Résultat : un élément est supprimé
````
````
NOM : Indiquer qu'un élément a été réalisé 
ID : 3

Objectif : valider le status "done" d'un élément 

Etapes de test :
1 - accéder au status d'un élément
2 - modifier son état initial de "false" à "true"

Résultat : un élément possède le status done
````
````
NOM : Sélectionner un élément  à la liste
ID : 4

Objectif : valider la sélection d'un élément

Etapes de test :
1 - sélectionner un élément de mon tableau
2 -

Résultat : un élément est supprimé
````
````
NOM : changer le status d'un élément à la liste
ID : 5

Objectif : valider le changement de status d'un élément

Etapes de test :
1 - sélectionner un élément de mon tableau
2 -

Résultat : un élément est supprimé
````
````
Nom du test : Modifier une tâche existante grace a son index dans le tableau.

ID : 6

Objectif : Vérifier le bon fonctionnement de la modification d'une tâche.

Conditions préalables : Posséder un tableau vide ou rempli.

Étapes de test :

1 : Renseigner l'index visé.
2 : Rentrer les modification souhaité dans le label.
3 : Constater le changement de la tâche dans le tableau.

Résultat attendu : La tâche a bien étée modifié dans le tableau.
````
````
Nom du test : Modifier une tâche inexistante grace a son index dans le tableau.

ID : 7

Objectif : Vérifier le bon fonctionnement de la modification d'une tâche.

Conditions préalables : Posséder un tableau vide ou rempli.

Étapes de test :

1 : Renseigner l'index visé.
2 : Rentrer les modification souhaité dans le label.
3 : Constater le changement de la tâche dans le tableau.

Résultat attendu : La tâche n'a  pas bien été modifié dans le tableau.