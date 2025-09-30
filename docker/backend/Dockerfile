FROM php:8.2-fpm

# Install basic extensions and composer
RUN apt-get update && apt-get install -y git zip unzip libpq-dev libzip-dev     && docker-php-ext-install pdo pdo_pgsql

# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
# Copy project (mounted as volume during development)
CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
