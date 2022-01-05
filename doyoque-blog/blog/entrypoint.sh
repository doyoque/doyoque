#!/usr/bin/env sh

cp .env.example .env
sed -i -e 's/MIX_PORT=8000/MIX_PORT=8001/g' .env
sed -i -e 's/DB_HOST=127.0.0.1/DB_HOST=db/g' .env
sed -i -e 's/DB_PASSWORD=/DB_PASSWORD=secret/g' .env
sed -i -e 's/BROADCAST_DRIVER=log/BROADCAST_DRIVER=redis/g' .env
sed -i -e 's/QUEUE_CONNECTION=sync/QUEUE_CONNECTION=redis/g' .env
sed -i -e 's/REDIS_HOST=127.0.0.1/REDIS_HOST=redis/g' .env
chown -R $USER:www-data storage
chown -R $USER:www-data bootstrap/cache
chmod -R 775 storage
chmod -R 775 bootstrap/cache
php /app/artisan passport:install --force
php /app/artisan migrate --seed
php /app/artisan key:generate
php /app/artisan config:cache
rm -rf .env
/usr/bin/supervisord -n -c /etc/supervisord.conf

exec "$@"
