# Szkliwo — pracownia ceramiki (strona demonstracyjna)

Trzeci przykład realizacji do portfolio. Miejsce, ceny i osoby są zmyślone.

## Założenie

Strona **sprzedaje warsztaty, nie przedmioty**. Rękodzieło to towar
jednostkowy — sprzedana miska musi zniknąć ze strony w ciągu godziny,
a strona statyczna tego nie obsłuży bez sklepu. Warsztat to usługa
terminowa: wystarczy data, cena i liczba miejsc, aktualizowane raz
w miesiącu.

Ceramika jest więc na stronie jako dowód umiejętności i jako informacja,
że można ją kupić na miejscu albo na jarmarku — bez koszyka i wysyłki.

## Czym różni się od dwóch poprzednich

- Pasek u góry z przyciskiem zapisów po prawej (Stary Sad: szeroki pasek,
  Karczma: boczna kolumna).
- Niski pas otwierający, nie zdjęcie na cały ekran.
- Oferta w kartach, cennik w jednej wąskiej kolumnie.
- Kolorystyka ciepła: krem, glina, musztarda, morska zieleń.
- Kroje Syne + Work Sans.

## Elementy charakterystyczne

**Cennik w jednej kolumnie**, trzy grupy: dzieci, dorośli, grupowo.
Wszystko widoczne naraz, bez skakania wzrokiem na boki.

**Terminarz** z liczbą wolnych miejsc — zbity, pięć terminów mieści się
na ekranie.

**Lista jarmarków** — gdzie pracownię można spotkać poza pracownią.

## Pliki

```
index.html      cała strona
styl.css        arkusz stylów
skrypt.js       zastępniki brakujących zdjęć
img/            zdjęcia
BRIEF-ZDJEC.md  lista brakujących grafik
```

Brakuje siedmiu zdjęć — lista w BRIEF-ZDJEC.md. Dopóki ich nie ma,
w ich miejscu pokazuje się zastępnik z opisem.

## Publikacja na GitHub Pages

Nowe repozytorium, wgraj zawartość tego folderu, Settings → Pages,
gałąź `main`, folder `/ (root)`. Po publikacji odkomentuj w `index.html`
linijki z `og:image` i `og:url` i wstaw prawdziwy adres.
