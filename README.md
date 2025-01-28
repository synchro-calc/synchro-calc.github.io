# Synchro Calculator

## Author

Made by Goz (Discord: "\_\_goz\_\_" <@272394963642220545>), started 2023/01/04

---

## <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/FR-flag.jpeg" height="10px"> Français

[Jump to English Section](https://github.com/synchro-calc/synchro-calc.github.io?tab=readme-ov-file#-english)

## Usage

Cette page web permet de calculer les dégâts de la Synchro en fonction des résistances et effets adverses, et de suivre les sorts utilisés pour la boost.

Le calcul des dégâts totaux en fonction des dégâts de base est normalement précisément correct (0 do d'écart en jeu), mais le calcul des dégâst de base en fonction du niveau du Xélor est une approximation, que vous pouvez m'aider à améliorer !

## Features

Le calculateur permet d'ajuster :

-   les résistances de la cible (_%air_ / _ré fixes_ / _%res distance/mélée_)
-   les effets sur la cible (_réductions fixes_ / _réductions en %do_)
-   le passif (broken) de la classe préférée de Crocus
-   les boosts externes sur la Synchro (_+Puissance_ / _+Dommages_)

Le calculateur est disponible dans 2 langues :

-   <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/FR-flag.jpeg" height="10px"> Français
-   <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/EN-flag.png" height="12px"> Anglais

### Boutons

Le calculateur supporte 2 modes de fonctionnement :

-   le mode "suivi", par défaut, où l'utilisateur clique sur les sorts pour booster la Synchro
-   le mode "manuel", qui permet de saisir directement le %age de dégâts finaux affichés par la Synchro via un slider ou une saisie manuelle

Le changement entre les deux modes se fait en utilisant les boutons <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/Pause.png" width="16px"> et <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/Play.png" width="16px" >.

Le bouton <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/Reset.png" width="16px"> permet de remettre à zéro la liste des sorts ayant boosté la Synchro.<br>
Une confirmation est demandée pour valider le reset (les sorts concernés sont mis en surbrillance).

## Remerciements

Merci à Alexandre Rancati-Palmer ([Github](https://github.com/alrapal) / Discord : "paralex89" <@184321375433916416>) d'avoir créé la toute première version du Synchro Calculator en 2021 qui a inspiré celle-ci.

Merci à 42scientist (Discord : "42scientist" <@309327303920320513>) qui a été le premier à chercher une formule pour calculer les dégâts de la Synchro en fonction du niveau depuis qu'ils varient, et qui m'aide encore à améliorer ma formule.

## Contribuer

Vous pouvez aider ce projet en :

-   rapportant les bugs/mauvaises traductions/fautes d'orthographe [ici](https://github.com/synchro-calc/synchro-calc.github.io/issues)
-   me fournissant des données (niveau, dégâts de la Synchro 1 boost sur poutch) pour améliorer la formule de conversion niveau->dégâts de base
-   me suggérant des modifications ou améliorations
-   contribuant du code au projet via une merge request

---

## <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/EN-flag.png" height="12px"> English

[Sauter vers la section Française](https://github.com/synchro-calc/synchro-calc.github.io?tab=readme-ov-file#-fran%C3%A7ais)

## Usage

This web page will allow you to estimate your Synchro's damage depending on you opponents' resistances & effects, and also allow you to keep track of what spells you used to boost you Synchro.

The damage calculation from the base damage to final damage should be extremely accurate, but the calculation of base damage from the level of the Xelor is an approximation (& you can help me make it better !).

## Features

This calculator allows you to adjust :

-   the target's resistances (_%air_ / _fixed res_ / _%res distance/melee_)
-   effect on the target (_fixed reductions_ / _%damage reductions_)
-   the level of Sacrier's passive
-   external boosts given to the Synchro (_+Power_ / _+Damages_)

The calculator is available in 2 languages :

-   <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/FR-flag.jpeg" height="10px"> French
-   <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/EN-flag.png" height="12px"> English

### Buttons

The calculator has 2 modes :

-   the default "tracking" mode, where the user can click on spells to boost the Synchro
-   the "manual" mode, that allows for manual input of the %damage displayed by the synchro in-game via a slider or an input

Swapping between modes is done by using the <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/Pause.png" width="16px"> and <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/Play.png" width="16px"> buttons.

The <img src="https://raw.githubusercontent.com/synchro-calc/synchro-calc.github.io/refs/heads/master/images/Reset.png" width="16px" > button resets the Synchro's boosts.<br>
A confirmation is required for the reset (affected spells will be highlighted).

## Thanks

Alexandre Rancati-Palmer ([Github](https://github.com/alrapal) / Discord: "paralex89" <@184321375433916416>) created the very first Synchro Calculator, and inspired me to make my own version.

42scientist (Discord: "42scientist" <@309327303920320513>) was the first person to establish an approximation for the level->base damage relation, and helps me refine my approximation to this day.

## Contribute

You can help this project by:

-   reporting bugs/typos/mistranslations [here](https://github.com/synchro-calc/synchro-calc.github.io/issues)
-   feeding me data points (level, Synchro base damage on a Poutch) to refine the the level->base damage conversion formula
-   suggesting enchancements or modifications
-   contributing to the code directly via a merge request
