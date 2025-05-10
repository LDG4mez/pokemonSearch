# Usa la imagen oficial de Nginx
FROM nginx:alpine

# Elimina la página por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia el contenido de src/ a la carpeta pública de Nginx
COPY src/ /usr/share/nginx/html/

# Expone el puerto 80
EXPOSE 80

# Usa el comando por defecto de nginx
CMD ["nginx", "-g", "daemon off;"]
