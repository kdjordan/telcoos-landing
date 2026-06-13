# Minimal static server for the TelcoOS landing page.
# Serves the single index.html via nginx on port 80.
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
