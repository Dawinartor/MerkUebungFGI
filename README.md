# Nummernschilder Generator für den Bullen
Ein Generator für FGI damit er seine Merkfähigkeit verbessern kann und generell meine Wenigkeit mehr huldigt!

# Wie gehe ich vor?
1. Notizen: Wie soll das Produkt aussehen?
    -> Am besten wie ein echtes Nummernschild mit:
     Stadtkennzeichnung/Groß Buchstaben (Max. 2)/Ziffern (Max. 4)
    -> Informieren wie ein echtes Nummernschild aussehen kann und welche Abweichungen es gibt.
     Bilder als Beispiel heruntergeladen.
    -> Skizze anfertigen => In GitHub hochladen.
2. Notizen: Welche Funktionen sollen implementiert werden?
    -> Die Schilder sollen automatisch generiert werden so, dass alle
    5 Sekunden ein neues Schild erstellt wir.
    -> Diese Schilder sollen untereinander generiert werden (Von oben nach unten in drei spalten).
    3 Pixel Abstand zu jedem Schild.
    -> Alles in einer Klasse jedes Teil, des Nummernschildes wird nach und nach generiert und auf das Schild gelegt.
3. Notizen: Was habe ich bereits im Kopf?
    -> Ein Schild soll die Maße 600x180 Pixel
    -> Es besteht aus mehreren Div Containern:
        1. Schwarz|Rundeecken|600x180 Pixel
        2. DunkelBlau|Rundeecken|590x170 Pixel|
        3. Gelbe Sterne(Europa)|Landzeichen(Deutschland/Polen/Belgien/NiederLand) 
         3.1 Div mit Paragraph/h1-6 für StadtKennung mit mindestens 2 Maximal 3 Buchstaben
         3.2 Div mit zwei Bildern Hu/Au
         3.3 Div mit Paragraph/h1-6 für zwei Buchstaben mit 2 Buchstaben
         3.4 Div mit Paragraph/h1-6 für Zahlen wischen 1 bis 9999 
    -> Irgendwelche Ansätze?
    Gaaaaaaaaaaaaaanz viele Generatoren!
    mit Modulen arbeiten!

