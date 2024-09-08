# Consignes

- Vous êtes développeur front-end : vous devez réaliser les consignes décrites dans le chapitre [Front-end](#Front-end)

- Vous êtes développeur back-end : vous devez réaliser les consignes décrites dans le chapitre [Back-end](#Back-end) (*)

- Vous êtes développeur full-stack : vous devez réaliser les consignes décrites dans le chapitre [Front-end](#Front-end) et le chapitre [Back-end](#Back-end) (*)

(*) Afin de tester votre API, veuillez proposer une stratégie de test appropriée.

## Front-end

Le site de e-commerce d'Alten a besoin de s'enrichir de nouvelles fonctionnalités.

### Partie 1 : Shop

- [x] #1 Afficher toutes les informations pertinentes d'un produit sur la liste
- [x] #2 Permettre d'ajouter un produit au panier depuis la liste 
- [x] #3 Permettre de supprimer un produit du panier
- [x] #4 Afficher un badge indiquant la quantité de produits dans le panier
- [x] #5 Permettre de visualiser la liste des produits qui composent le panier.

### Partie 2

- [ ] #6 Créer un nouveau point de menu dans la barre latérale ("Contact")
- [ ] #7 Créer une page "Contact" affichant un formulaire
- [ ] #8 Le formulaire doit permettre de saisir son email, un message et de cliquer sur "Envoyer"
- [ ] #9 Email et message doivent être obligatoirement remplis, message doit être inférieur à 300 caractères.
- [ ] #10 Quand le message a été envoyé, afficher un message à l'utilisateur : "Demande de contact envoyée avec succès".

### Bonus : 

- [ ] #11 Ajouter un système de pagination et/ou de filtrage sur la liste des produits
- [ ] #12 On doit pouvoir visualiser et ajuster la quantité des produits depuis la liste et depuis le panier 

## Back-end

Développer un back-end permettant la gestion de produits définis plus bas.
Vous pouvez utiliser la technologie de votre choix parmi la liste suivante :

- Node.js/Express
- Java/Spring Boot
- C#/.net Core
- PHP/Symphony


Le back-end doit gérer les API suivantes : 

| Resource           | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| ------------------ | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/products**      | Create a new product  | Retrieve all products          | X                                        | X   |     X            |
| **/products/:id**  | X                     | Retrieve details for product 1 | Update details of product 1 if it exists | X   | Remove product 1 |

Un produit a les caractéristiques suivantes : 

``` typescript
class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
  internalReference: string;
  shellId: number;
  inventoryStatus: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK";
  rating: number;
  createdAt: number;
  updatedAt: number;
}
```

Le back-end créé doit pouvoir gérer les produits dans une base de données SQL/NoSQL ou dans un fichier json.

- [ ] #13 /products GET
- [ ] #14 /products POST
- [ ] #15 /products PATCH
- [ ] #16 /products PUT
- [ ] #17 /products DELETE
- [ ] #18 /products/:id GET
- [ ] #19 /products/:id POST
- [ ] #20 /products/:id PATCH
- [ ] #21 /products/:id PUT
- [ ] #22 /products/:id DELETE

## Bonus

- [ ] #23 Vous pouvez ajouter des tests Postman ou Swagger pour valider votre API