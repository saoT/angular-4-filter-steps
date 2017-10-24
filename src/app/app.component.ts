import { Component } from '@angular/core';


// A / ARCHITECTURE
// STEP 1 -> Parent soit affiche dans mon app
// STEP 2 -> Child soit affiche dans parent

// B / CREER / RECUPERER la donnees @ child
// STEP 1 -> Créer le moule/typage
// STEP 2 -> Remplir le moule

// C / AFFICHER LA DONNE @ child
// STEP 1 -> faire un test d'affichage simple !!!!!!!!!!!!!!!!!!!!
// Toujours penser a se faire des petites etapes/milestones pour tester au fiur et a mesure
// STEP 2 -> Boucler dans mon tableau
// Continuer le test de boucle sur un element simple et unique

// Organiser les etapes par ordre de facilite @ child
// FILTRER LA DONNE
// STEP 1 -> le faire avec une valeur simple en dur
// STEP 2 -> le faire avec une valeur qu'on a bindé via le component

// D / PASSER CE FILTRE DU PARENT VERS L'ENFANT
// STEP 1 -> definir une valeur simple dans le parent
// STEP 2 -> lier selectedSize a filterSize

// E / Faire un menu de selection qui defini selectedSize
// STEP 1 Faire un menu de selection
// STEP 2 lier a selectedSize


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
