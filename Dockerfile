FROM node:latest

RUN apt-get update && \
    apt-get install -y && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/api

# Copie apenas package.json e package-lock.json antes de instalar dependências
COPY package*.json ./
RUN npm install --force --quiet --no-optional --no-fund --loglevel=error

# Copie o resto do código após as dependências serem instaladas
COPY . .

RUN npm run build
CMD [ "npm", "run", "start:prod"]

EXPOSE 3000


#docker login regconteinerportalavp.azurecr.io
#docker build --pull --rm -f "Dockerfile" -t portal-aluno-api-avp:latest "." 
#docker tag portal-aluno-api-avp regconteinerportalavp.azurecr.io/portal-aluno-api-avp
#docker push regconteinerportalavp.azurecr.io/portal-aluno-api-avp