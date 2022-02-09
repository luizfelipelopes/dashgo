# CHACKRA UI
Projeto para fins de estudo utilizando Chakra UI React JS e Next JS

* Interface declarativa: estilização de elementos direto pela tag do jsx
* Theme UI
* Tailwind Css
* Chakra UI => FrameMotion

# 1) Configurando Projeto

	-> criar projeto: npm create next-app dashgo
	-> deletar ReadMe
	-> deletar Styles
	-> deletar arquivos da pasta public
	-> deletar em pages a pasta Api
	-> trocar extensaão p/ tsx no _app e index
	-> remover importações não utilizadas
	-> tipar MyApp com AppProps
	-> limpar arquivo index
	-> instalar typescript @types/react @types/node: npm add typescript @types/react @types/node -D
	-> rodar run dev para criar tsconfig.json
	-> jogar pasta pages pra dentro da pasta src
	-> roda o servidor novamente

# 2) Instalando e Configurando chakra UI

	-> instalar ChakraUI: npm add @chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion
	-> em styles criar arquivo theme.ts
	-> aplicar chakraprovider no _app.ts para recuperar o tema de theme.ts
	-> aplicar tons de cores gray em theme.ts
	-> criar arquivo _document.tsx em pages
	-> recuperar links fontes p/ Roboto e colar em _document
	-> inserir fonts Roboto em theme.ts