FROM node:20-alpine

# Crear usuario y grupo no-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copiar solo dependencias primero (mejor cache)
COPY package*.json ./

# Instalar solo dependencias productivas
RUN npm install --omit=dev

# Copiar el resto del código
COPY . .

# Cambiar permisos al usuario no-root
RUN chown -R appuser:appgroup /app

# Cambiar a usuario no-root
USER appuser

EXPOSE 3002

CMD ["node", "src/server.js"]