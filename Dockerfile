# Minimal static server for the TelcoOS landing page.
# Coolify can also serve this repo via its native "Static Site" type with no
# Dockerfile; this file just guarantees a deterministic build for the
# "Dockerfile" deployment type.
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
