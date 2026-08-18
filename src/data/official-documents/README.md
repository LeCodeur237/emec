# Controle des documents officiels

Ces fichiers JSON proviennent de l'extraction des trois PDF officiels de l'EMEC.

## Sources

- `statuts.json` : Statuts, juillet 2021
- `reglement-interieur.json` : Reglement Interieur, juillet 2021
- `regime-financier.json` : Regime Financier revise en 2023

## Verification effectuee

- Controle du nombre de pages extrait.
- Controle de la continuite des articles.
- Controle des marqueurs d'articles dupliques dans un meme bloc.
- Controle des caracteres de remplacement Unicode.

## Corrections appliquees

- `reglement-interieur.json` : l'article 56 etait fusionne dans l'article 55 apres extraction PDF. Il a ete separe.
- `reglement-interieur.json` : l'article 101 etait extrait sous la forme `Article 1O1` dans l'article 100. Il a ete normalise et separe.
- `regime-financier.json` : une repetition technique de l'article 13 avait ete retiree lors de la structuration.

## Etat actuel

- Statuts : 59 articles continus.
- Reglement Interieur : 173 articles continus.
- Regime Financier : 134 articles continus.

Les textes restent issus d'une extraction PDF. Une relecture humaine finale est recommandee avant toute utilisation juridique ou administrative stricte.
