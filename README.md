# Instrukcja do aplikacji przetwarzającej artykuły przy użyciu API OpenAI

Aplikacja umożliwia automatyczne formatowanie artykułów w HTML przy użyciu API OpenAI. Przetwarza tekst, dodając odpowiednią strukturę HTML oraz miejsca na grafiki.

### Kroki działania aplikacji:

1. **Połączenie z API OpenAI** Aplikacja łączy się z API OpenAI przy użyciu klucza API, aby przesłać artykuł do przetworzenia i sformatowania.
2. **Odczytanie pliku tekstowego z artykułem** Tekst artykułu jest odczytywany z pliku tekstowego.
3. **Przesłanie treści do OpenAI** Zawartość pliku artykułu wraz z promptem jest przekazywana do API OpenAI w celu przetworzenia na odpowiedni kod HTML.
4. **Zapisanie wynikowego kodu HTML** Otrzymany od OpenAI kod HTML jest zapisywany w pliku `artykul.html`.

# Dokumentacja projektu

## Opis plików JavaScript

1. **prompt.js**

   - Plik zawiera funkcję, która pobiera zawartość z plików tekstowych i generuje pełny prompt dla OpenAI.
   - W plikach tekstowych znajdują się teksty do poprawy oraz polecenia dla sztucznej inteligencji, które są łączone przez funkcję w spójny prompt dla zapytania do API OpenAI.

2. **app.js**

   - Plik odpowiada za połączenie z API OpenAI oraz wykonanie zapytania.
   - Rezultat zapytania zostaje zapisany do zmiennej i następnie przekazany do funkcji `saveToFile`, która zapisuje wynik zapytania do pliku wynikowego.

3. **saveToFile.js**
   - Plik zawiera funkcję `saveToFile`, która odpowiada za zapis odebranych danych z API OpenAI do pliku `.html`.
   - Funkcja tworzy gotowy do przeglądania dokument wynikowy, który można następnie wyświetlić w przeglądarce.

## Opis plików HTML

1. **artykul.html**

   - Plik przechowuje rezultat komunikacji z OpenAI.
   - Zawiera wygenerowaną treść artykułu w formacie HTML, gotową do przeglądania.

2. **podglad.html**

   - Służy do podglądu wygenerowanego rezultatu w ostylowanej formie.
   - Wymaga ręcznego wklejenia wygenerowanej treści (z pliku `artykul.html`) do sekcji `<body>`, aby zobaczyć podgląd w stylizowanej formie.

3. **szablon.html**

   - Jest to szablon HTML do ręcznego podglądu treści artykułu.
   - Należy ręcznie wkleić wygenerowaną treść do sekcji `<body>`, aby wyświetlić zawartość w przeglądarce.

4. **AutmoatycznySzablon.html**
   - Szablon, który automatycznie wyświetla treść z `artykul.html` (jeśli plik ten znajduje się w strukturze plików projektu).
   - Używa funkcji `fetch` do pobrania zawartości `artykul.html` i wyświetlenia jej w sekcji `<body>`.
   - Aby poprawnie uruchomić ten plik, zalecane jest włączenie go przez lokalny serwer (np. VS Code Live Server lub inny lokalny serwer HTTP).

**Uwaga:** Ze względu na ograniczenia przeglądarki (polityka CORS), `AutmoatycznySzablon.html` wymaga uruchomienia na serwerze lokalnym, aby skrypt JavaScript mógł bezpiecznie pobrać dane z pliku `artykul.html`.

### Konfiguracja pliku `.env`

1. Utwórz plik `.env` w głównym katalogu aplikacji.
2. Dodaj następującą linię, zastępując `twój klucz` rzeczywistym kluczem API OpenAI:
   OPENAI_API_KEY=twój klucz

### Uruchomienie aplikacji

- Otwórz terminal w katalogu aplikacji.
- Wpisz następującą komendę, aby uruchomić aplikację: `node app.js`
