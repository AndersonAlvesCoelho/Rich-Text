# Rich Text
> "Ainda temos uma longa caminhada pela frente"

<img  src="https://cdn.discordapp.com/attachments/779342878513954829/801226622334009374/unknown.png">
### :bulb: Objetivo
- Essa aplicação tem como intuito, terinar e aplicar minhas habilidades com react.js.
- O rick text dessa aplicação tem como objetivo de facilitar na hora dar o start na documnetação de um projeto.

> Você pode visualizar o projeto aqui: [http://brief-shelf.surge.sh/](http://brief-shelf.surge.sh/)

### :page_with_curl: Requisito
- [x] Criar aplicação com npm **create-react-app rich-text**
- [x] Personalize e construa CKEditor 5 - [CKEditor 5 online builder](https://ckeditor.com/ckeditor-5/online-builder/);
- [x] Menu simples como opção de selecionar modelos de documentos padrões, sendo esse modelos:
    - [x] Ata de ruinão;
    - [x] Listar Requisito;
    <!-- - [ ] Documento de Visão; -->
    <!-- - [ ] Documento de Regra de Negócio. -->
- [x] Instruções sobre o modelo de documentação atual que estiver utilizando; 
- [ ] Opção de exportação para pdf/word.
- [x] Manter documentos utilizando localstorage.

### :floppy_disk: Instruções para visualizar o projeto   
> As instruções citadas abaixo foram feita no windows 10
##### 1º Node:
Instala o [node](https://nodejs.org/en/) 

##### 2º Git clone:

```bash
    #sleciona uma pasta para relizar a copia do projeto (recomendo coloca no C:\WorkSpace)
    git clone https://github.com/AndersonAlvesCoelho/Rich-Text.git
    cd Rich-Text
```
##### 3º Subir as dependência & execute as construção necessarias do CKEditor 5:

```bash
    cd ckeditor5-build-classic
    npm install
    # após finalizar executa
    npm ruin build
```

##### 4º Subir as dependência & startar o projeto:

```bash
    #para voltar ao diretório principal
    cd ..
    npm install
    # após finalizar executa
    npm start
```

> Referências
>[https://medium.com/@jacobtamus/ckeditor5-custom-react-editor-tutorial-a9e91aab9d16](https://medium.com/@jacobtamus/ckeditor5-custom-react-editor-tutorial-a9e91aab9d16)
