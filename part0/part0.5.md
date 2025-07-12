```mermaid

sequenceDiagram

    participant browser

    participant server

  

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    activate server

    server-->>browser: HTML document + js + css
    note left of server : the server processes the new note (notes.push(...))

    deactivate server



```
