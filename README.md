# CHAKRA UI
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

# 2) Instalando e Configurando Chakra UI

	-> instalar ChakraUI: npm add @chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion
	-> em styles criar arquivo theme.ts
	-> aplicar chakraprovider no _app.ts para recuperar o tema de theme.ts
	-> aplicar tons de cores gray em theme.ts
	-> criar arquivo _document.tsx em pages
	-> recuperar links fontes p/ Roboto e colar em _document
	-> inserir fonts Roboto em theme.ts

# 3) Login e Dashboard
	Obs:
	* Split Html attributes (extensão p/ identar html)
	* Sempre irá fazer o processo de componentizar os elementos em partes menores

	-> trabalhar em index.tsx
	-> criar componente p/ input criado em index.tsx => pasta Form/Input.tsx
	-> criar página dashboard.tsx
	-> criar componente Header.tsx em components
	-> instalar biblioteca react-icons p/ icone do search: npm add react-icons
	-> Em dshboars.tsx envolver todo o conteudo em Flex e criar um Flex especifico para o conteudo abaixo do header
	-> criar componente sidebar
	-> em Dashboard criar charts (https://apexcharts.com/): npm add apexcharts react-apexcharts

# 4) Lista de Usuários
	-> criar pasta users em pages
	-> criar index.tsx em users p/ criação de listagem de usuarios
	-> criar component Pagination.tsx e aplicar na página users
	-> criar arquivo create.tsx na pasta users para página de criação de usuários

# 5) Responsividade
	obs: com interfaces declarativas ganha-se na manutenção, porém o código fica mais verboso
	solução: separa os componentes em mais subcomponentes

	* Separação de componentes
		-> Criar pasta Header
			-> criar componente Logo.tsx
			-> criar componente SearchBox.tsx
			-> crir componente NotificationsNav.tsx
			-> criar componente Profile.tsx
			-> ir no componente Header.tsx e pegarcada trwcho de código e inserir nos respectivos componentes criados
			-> remover importações não utilizadas
			-> criar arquivo index.tsx na pasta Header
			-> passar o conteudo de Header.tsx p/ index.tsx
			-> deletar arquivo Header.tsx
			-> reiniciar servidor

		-> Criar pasta Sidebar
			-> criar arquivo index.tsx (inserir conteudo do Sidebar.tsx)
			-> criar componente NavLink.tsx
			-> criar componente NavSection.tsx
			-> deletar arquivo Sidebar.tsx
			-> reiniciar servidor

		-> Criar pasta pagination
			-> criar arquivo index.tsx (inserir conteudo de Pagination.tsx)
			-> criar componente PaginationItem.tsx
			-> deletar Pagination.tsx
			-> reiniciar servidor

	* Header responsivo
	* Sidebar Responsiva
		-> criar componente SidebarNav.tsx
		-> passar conteudo do Index.tsx para SidebarNav.tsx
		-> importar componente no Index.tsx
		-> criar pasta contexts em src
		-> criar arquivo SideBarDrawerContext.tsx
		-> aplicar contexto em Header e Sidebar
	* Dashboard responsivo
	* Listagem e pagination responsiva
	* Cadastro responsivo
	* Fluxo de navegação
		-> Componente NavLink
			obs: passHref passa de forma forçado ocomportamento do elemento de link 'a'
	* sinalizando link ativo
		-> criar componente ActiveLink.tsx
			obs: asPath do useRouter() indica a rota ativa

# 6) Formulários e Validação

	Obs:
	Controlled Components => useState()
	Uncontrolled Componentes => useRef()

	react Hook Forms atualização:
	ref={register} => {...register('email')}

	Ex:
	Formik
	React Hook Form
	Unform (Rockeat Seat)


	-> instalar React Hook Form: npm add react-hook-form
	-> Form de autenticação
	-> Validação dos dados
		-> instalar yup e integração do hook form c/ yup: npm add yup @hookform/resolvers
	-> Form de criação do usuário

# DATA FETCHING E CACHE LOCAL
Obs:
Cache local de dados: armazenar dados da req em um cache para mostrar de maneira instantanea
Data Sync: altarar dados cache q foram alterados

Ex:
React Query
SWR

# 1) Configurando MirageJS
	1) instalar miragejs p/ simular comportamento de uma API: npm add miragejs -D
	2) Criar pastas services -> mirage -> index.ts
	3) Aplicar make Server no _app.tsx caso seja em ambiente de dev
	4) restarta servidor
# 2) Factories e seeds
	seeds: cria dados assim q o servidor for inicializado
	factories: formas de conseguir gerar dados e massa

	1) aplicar factories em index.ts no mirage
	2) instalar Faker p/ e-mails ficticios: npm add @faker-js/faker -D
	3) chamar os users gerados no arquivo indext.tsx da pasta users
# 3) Configurando React Query
	1) Instalar react query: npm add react-query
	2) Em user importar a biblioteca
	3) Aplica o fetch dentro da const do react query criada
	4) Aplicar QueryClientProvider no App passndo valor do queryClient
	5) Listar usuário utilizando map
