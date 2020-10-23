# -TDS-Company---Desafio-Criativo

Instalação padrão pelo bash
```bash
$npm install
```
para abrir em modo visual, execute o comando:
```bash
$npx cypress open
```


para abrir em modo headless, execute o comando:
```bash
$npx cypress run
```
Arquivos de video serão gerados exclusivamente se executado no modo headless e armazenados na pasta

```bash
../cypress/videos
```


Em caso de erro, screenshots serão gerados exclusivamente se executado modo headless e armazenados na pasta

```bash
../cypress/screenshots
```

Infelizmente não tive tempo para adicionar o AllureReport nas dependencias do projeto.
