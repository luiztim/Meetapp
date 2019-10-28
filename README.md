# Certificação GoStack - Projeto Meetapp do Bootcamp da Rocketseat

O Meetapp é o projeto de conclusão de curso do Bootcamp GoStack, ministrado pela Rocketseat.

O projeto foi feito usando NodeJS, ReactJS e React Native.

Para o projeto funcionar, você deve primeiramente instalar o NodeJS e o Yarn, além dos bancos de dados: Postgres, Mongo e Redis (utilize o Docker para facilitar).

No Postgres, criar um banco chamado **meetapp**

# Instalando a aplicação

## Clone o respositório na raiz do disco

git clone https://github.com/luiztim/meetapp.git

### Acesse a pasta backend

cd meetapp/backend

Faça uma cópia do arquivo .env.example, renomeando-o para .env

copy .env.example .env

Abra o arquivo .env e altere os parâmetros conforme sua instalação

#### Faça a instalação do backend executando o comando abaixo
yarn

#### Executar a instalação das tabelas, executando o comando abaixo
yarn migrate


#### Execute o backend com o comando abaixo
yarn dev

## Instalando o frontend

#### Vá para a pasta frontend 
cd meetapp/frontend

#### Instalar as dependências do frontend, executando o comando abaixo
yarn

#### Execute o frontend com o comando abaixo
yarn start

## Instalando o mobile (testado somente no android)

#### Vá para a pasta mobile 
cd meetapp/mobile

#### Instalae as dependências do mobile, executando o comando abaixo
yarn

#### Execute o mobile com o comando abaixo
react-native run-android

Antes de rodar o comando acima, já deixe o emulador (Genymotion) ligado ou, o celular plugado no USB em modo de depuração
