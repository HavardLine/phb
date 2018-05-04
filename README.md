
![under construction](/src/images/under_construction.gif)

# phb
Elate's "personalhåndbok".

> Book available here:
> https://elateas.github.io/phb

## Develop

Git clone and run
```bash
> npm i && npm start
```

 - [Gitbook reference](https://toolchain.gitbook.com/)
 - [Gitbook plugins](https://plugins.gitbook.com/browse)

## Build

Running the build command writes a static site to `docs`. This is the directory used by github pages to serve the site at https://elateas.github.io/phb

```bash
> npm run build
```

## Configurations

### Custom CSS

Custom CSS can be added in `src/custom/style.css`

### Custom JS

Custom javascript can be added in `src/custom/script.css`

### Book properties
**book.json** properties
```json
 {
    "plugins": [],
    "root": "book",
    "styles": {
      "website": "styles/website.css",
      "pdf": "styles/pdf.css",
      "epub": "styles/epub.css",
      "mobi": "styles/mobi.css",
      "ebook": "styles/ebook.css",
      "print": "styles/print.css"
    },
    "pluginsConfig": {
      "highlight": {},
      "search": {},
      "lunr": {
        "maxIndexSize": 1000000,
        "ignoreSpecialCharacters": false
      },
      "sharing": {
        "facebook": true,
        "twitter": true,
        "google": false,
        "weibo": false,
        "instapaper": false,
        "vk": false,
        "all": ["facebook", "google", "twitter", "weibo", "instapaper"]
      },
      "fontsettings": {
        "theme": "white",
        "family": "sans",
        "size": 2
      },
      "theme-default": {
        "styles": {
          "website": "styles/website.css",
          "pdf": "styles/pdf.css",
          "epub": "styles/epub.css",
          "mobi": "styles/mobi.css",
          "ebook": "styles/ebook.css",
          "print": "styles/print.css"
        },
        "showLevel": false
      }
    },
    "theme": "default",
    "pdf": {
      "pageNumbers": true,
      "fontSize": 12,
      "fontFamily": "Arial",
      "paperSize": "a4",
      "chapterMark": "pagebreak",
      "pageBreaksBefore": "/",
      "margin": {
        "right": 62,
        "left": 62,
        "top": 56,
        "bottom": 56
      }
    },
    "structure": {
      "langs": "LANGS.md",
      "readme": "README.md",
      "glossary": "GLOSSARY.md",
      "summary": "SUMMARY.md"
    },
    "variables": {},
    "title": "Elate PHB",
    "language": "nb",
    "gitbook": "*",
    "description": "Personalhåndbok for Elate's ansatte"
  }
```
