# Docusaur Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
It includes several other libraries for managing Markdown and HTML, 
[suneditor](https://github.com/JiHong88/suneditor) for editing HTML in a WYSWYG editor, and generating a nice HTML tree, then [rehype-remark](https://github.com/rehypejs/rehype-remark) for emitting Markdown from that tree
[docs-to-pdf](https://github.com/jean-humann/docs-to-pdf) for generating PDF from Markdown

Currently this site is a POC for several different things regarding Docusaurus 3.7 and Markdown we needed to validate. It really runs though. Typescript and React 19, on Node 22 here, as of March 2025 this was a very modern web stack. 

Sun editor and rehype should be easy to cut out, they are only used in one place, and docs-to-pdf isn't even used in the web app, despite being installed along with the rest in the package.json, so if bit rot sets in this would be fairly trivial to convert to a base Docusaurus project.


### Installation
npm install

### Local Development
npm start

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server, runs on localhost:3000

### PDF Generation
see /pdfgen folder for a sample command, the PDF generator runs offline but requires the application to be running (it scrapes the content from the live site via GET requests). An example PDF has been left in that folder as well.

### Build
npm run build

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

TBD
