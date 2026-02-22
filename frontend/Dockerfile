# -------- Build Stage --------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -------- Production Stage --------
FROM nginx:alpine

# Eliminar configuración default si existe
RUN rm -rf /usr/share/nginx/html/*

# Copiar archivos compilados
COPY --from=build /app/dist /usr/share/nginx/html

# Cambiar permisos al usuario nginx
RUN chown -R nginx:nginx /usr/share/nginx/html

# Ejecutar como usuario no-root (nginx ya existe en la imagen)
USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]