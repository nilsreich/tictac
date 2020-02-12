# tictac

demo: https://tictactoe-psi.now.sh/
 
Ich glaube wir hatten im prinzip die selben ansätze, nur bei der umsetzung sind wir anders vorgegeangen

1. Was ich mich frage ist folgendes:
Du nutzt "count" offensichtlich als variable, mit der du den Spieler definierst und gibst ihr als wert eine zahl. Wieso nennst du die variable nicht "player" und gibst ihr jeweils den wert "kreuz" oder "kreis"?
Wäre das nicht einfacher zu lesen?

2. So wie ich das verstanden habe, nutzt du sumh, sum... als variable, in der festgestellt wird, ob diese reihen nur mit kreuz oder kreis gefüllt sind? Allerdings überprüfst du alle reihen in dem spielfeld bei jeder neuen ausgewählten Zelle. Wieso? Warum nicht einfach nur die Reihe, die die ausgewählt zelle auch beinhaltet?

3. wieso res^etest du nich einfach, in dem du neu lädst?