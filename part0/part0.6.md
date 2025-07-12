```mermaid

sequenceDiagram

    participant browser

    participant server

    note over server: Same as part 0.5

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    note right of browser : the browser prevents default behavior and sends request with js  
    activate server

    server-->>browser: HTML document + js + css

    deactivate server



```
