FROM node:20-alpine

# Crear usuario y grupo no-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copiar dependencias primero (mejor uso de cache)
COPY package*.json ./

# Instalar solo dependencias de producción
RUN npm install --omit=dev && \
    npm cache clean --force

# Copiar código fuente
COPY . .

# Asignar permisos al usuario no-root
RUN chown -R appuser:appgroup /app

# Ejecutar como usuario no-root
USER appuser

EXPOSE 3001

CMD ["node", "src/server.js"]