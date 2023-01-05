Full stack MERN app done as a project for Matrice.io RNCP6 tuition.

PS: it's not really MERN as M stands for MySQL here


------------------------------------------------------------------


🪞 Santa-Magical-World MERN 

Vous allez ajouter une partie Client en ReactJS à votre serveur (projet Santa Magical World avec MongoDB)

LES GRANDES ÉTAPES

BACK : récupérez l’API express que vous aviez créée ! 

FRONT : avec React et MUI, afficher :
- Sur une page Home (composant Home), récupérez les datas de votre API grâce à fetch ou axios et afficher les toys dans un tableau (utiliser les composants MUI)
- Sur la page Home, au click d'un toy, on est redirigé vers une page détail qui affiche le détail du toy concerné grâce à son id (name, description et price) - utilisez useParams de react-router-dom
- Rajouter un Header qui contient la page Home (au click, on revient sur la page Home) et la page Ajouter un toy
- Dans la page Ajouter un toy, faire un formulaire qui contient le nom, la description, la catégorie (dans un select, on ne peut sélectionner que les catégories existantes) et le prix. Un bouton "envoyer" permet d'enregistrer le toy en base de donnée. 


Il faut lancer le back et le front sur deux ports distincts. 
La gestion des pages se fait avec react-router-dom


Bonus : 
- Dans la page Ajouter un toy, lorsque que le toy est enregistré, on revient sur la page Home
- Rajouter une icône supprimer sur la page Home pour supprimer un toy 
- Sur la page Home, rajouter une image pour illustrer chaque toy 