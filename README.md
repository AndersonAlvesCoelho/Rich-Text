# Rich Text
> "Ainda temos uma longa caminhada pela frente"

### :bulb: Objetivo
- Essa aplicação tem como intuito, terinar e aplicar minhas habilidades com react.js.
- O rick text dessa aplicação tem como objetivo de facilitar na hora dar o start na documnetação de um projeto.

> Você pode visualizar o projeto aqui: [http://placid-word.surge.sh/](http://placid-word.surge.sh/)

### :page_with_curl: Requisito
- [x] Criar aplicação com npm **create-react-app rich-text**
- [x] Personalize e construa CKEditor 5 - [CKEditor 5 online builder](https://ckeditor.com/ckeditor-5/online-builder/);
- [x] Menu simples como opção de selecionar modelos de documentos padrões, sendo esse modelos:
    - [x] Ata de ruinão;
    - [x] Listar Requisito;
    - [x] Documento de Visão;
    - [x] Documento de Regra de Negócio.
- [x] Intuição sobre o modelo de documentação atual que estiver utilizando; 
- [x] Guia de comandos;
- [x] Opção de exportação para pdf/word.

> as intruições citas abaixo foram feita no windows 10
### :floppy_disk: Instituições para visualizar o projeto   
###### 1º Git clone:

```bash
    #sleciona uma pasta para relizar a copia do projeto (recomendo coloca no C:\WorkSpace)
    git clone https://github.com/AndersonAlvesCoelho/Rich-Text.git
    cd Rich-Text
```
###### 2º Subir as dependência & execute as construção necessarias do CKEditor 5:

```bash
    cd ckeditor5-build-classic
    npm install
    # após finalizar executa
    npm ruin build
```

###### 3º Subir as dependência e startar o projeto:

```bash
    #para voltar ao diretório principal
    cd ..
    npm install
    # após finalizar executa
    npm start
```

> Referências
>[https://medium.com/@jacobtamus/ckeditor5-custom-react-editor-tutorial-a9e91aab9d16](https://medium.com/@jacobtamus/ckeditor5-custom-react-editor-tutorial-a9e91aab9d16)