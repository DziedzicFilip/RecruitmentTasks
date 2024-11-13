# Instrukcja do aplikacji przetwarzającej artykuły przy użyciu API OpenAI

Aplikacja umożliwia automatyczne formatowanie artykułów w HTML przy użyciu API OpenAI. Przetwarza tekst, dodając odpowiednią strukturę HTML oraz miejsca na grafiki.

### Kroki działania aplikacji:

1. **Połączenie z API OpenAI** Aplikacja łączy się z API OpenAI przy użyciu klucza API, aby przesłać artykuł do przetworzenia i sformatowania.
2. **Odczytanie pliku tekstowego z artykułem** Tekst artykułu jest odczytywany z pliku tekstowego.
3. **Przesłanie treści do OpenAI** Zawartość pliku artykułu wraz z promptem jest przekazywana do API OpenAI w celu przetworzenia na odpowiedni kod HTML.
4. **Zapisanie wynikowego kodu HTML** Otrzymany od OpenAI kod HTML jest zapisywany w pliku `artykul.html`.

### Konfiguracja pliku `.env`

1. Utwórz plik `.env` w głównym katalogu aplikacji.
2. Dodaj następującą linię, zastępując `twój klucz` rzeczywistym kluczem API OpenAI:
   OPENAI_API_KEY=twój klucz

### Uruchomienie aplikacji

- Otwórz terminal w katalogu aplikacji.
- Wpisz następującą komendę, aby uruchomić aplikację: `node app.js`
