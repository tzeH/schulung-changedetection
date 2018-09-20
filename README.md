# Schulung Change Detection (CD)

### Aufgabe 1
Betrachte die Webseite. Es gibt mehrere "Counter", die hochzählen wenn Change-Detection stattfindet.
Verfolgt den Weg der Change-Detection durch die Komponenten und erklärt, warum welcher Counter welchen Wert hat. Ihr braucht nur den grauen Wert (DoCheck) zu betrachten.

 * A) Warum ist der Wert des globalen Zählers (ganz oben rechts in der Ecke) größer als die anderen?
 * B) Warum werden alle Zähler der Wertpapiere gemeinsam hochgezählt?

Tipp: Der Tooltip an den Countern führt zu einem Change-Detection Zyklus.

### Aufgabe 2
Vereinfacht die Change-Detection mit der OnPush-Strategie.

### Aufgabe 3
In "preis-eintrag.component.html" findet ihr drei Code-Varianten.
Welche davon funktionieren mit der OnPush-Strategie und welche nicht (und warum)?

### Aufgabe 4
In "cd-counter.component.html" ist etwas auskommentiert. Wenn man das einkommentiert bekommt man "ExpressionChangedAfterItHasBeenCheckedError"s.

 * A) Wieso ist das so?
 * B) Warum ist der angezeigte Wert in der roten Badge immer einen niedriger als die anderen?
 * c) Was könnte man tun, um den Fehler loszuwerden?

