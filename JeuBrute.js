////// JEU === Pierre Feuille Ciseaux ////// 

            /* la constante BOUTONS contient les 3 boutons avec la class="boutonChoix" */
            const BOUTONS = document.querySelectorAll("button.boutonChoix");
            console.log(BOUTONS);

            let pointsDuJoueur = 0;
            let pointsDeIA = 0;

            /* ( déclaration du compteur de boutons ; compteur plus petit que le nombre de boutons ; compteur augmente */
                for(let i = 0; i < BOUTONS.length; i++)
            {
                /* pour chaque bouton du compteur, on écoute l'Event "click", auquel on attache une fonction */
                BOUTONS[i].addEventListener("click", function() 
                {   
                    /* initialisation des constantes JOUEUR et IA */
                    const JOUEUR = BOUTONS[i].innerHTML;
                    const IA = BOUTONS[Math.floor(Math.random() * BOUTONS.length)].innerHTML;

                    /* Affichage des actions du Joueur et de l'IA */
                    actionJOUEUR.innerHTML = "- Action du Joueur :" + JOUEUR;
                    actionIA.innerHTML = "- Action de l' I.A : " + IA;

                    /* variable qui va remplacer le HTML de id="zoneResultat" */
                    //let resultat = "";

                    /* conditions de victoire, égalité ou défaite */ 
                    /* attention aux espace dans les boutons HTML pour l'égalité stricte ("Ciseaux" != " Ciseaux ")*/
                    if ((JOUEUR == " Pierre " && IA == " Ciseaux ") || 
                        (JOUEUR == " Feuille " && IA == " Pierre ") ||
                        (JOUEUR == " Ciseaux " && IA == " Feuille "))
                    {
                        resultat = " Gagné ! ";
                    }
                    else if (JOUEUR === IA )
                    {
                        resultat = " Égalité... ";
                    }
                    else
                    {
                        resultat = " Perdu ! ";
                    }
                    
                    /* remplacement du HTML de id="zoneResultat" */
                    document.getElementById("zoneResultat").innerHTML = resultat;
                    /* ne fonctionne pas */
                    // zoneResultat.innerHTML = resultat;

                    console.log(`Joueur : ${JOUEUR} VS Intelligence Artificielle : ${IA}`);
                    console.log(resultat);

                });

            }