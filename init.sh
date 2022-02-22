#!/bin/bash


CURRENT=`pwd`

PARENT_NAME=$(basename $CURRENT)

SCRIPT=admin.$PARENT_NAME
echo $SCRIPT

SITE_NAME=`basename "$SCRIPT"`
echo "Creation du site wordpress $SITE_NAME"
# Your domain (or domains)
DOMAINS=$SITE_NAME,www.$SITE_NAME
echo "Génération du SSL pour les domaines : $DOMAINS"
NETWORK=webproxy

SITE_CONTENT=$CURRENT/$SITE_NAME/www/


echo "Le site est hébergé sous  : $SITE_CONTENT"

# Your email for Let's Encrypt register
LETSENCRYPT_EMAIL=mahbouba.bmabrouk@gmail.com
CONTAINER_DB_NAME=db
SITE_NAME_EX="`echo $SITE_NAME| tr '.' '_' | tr '-' '_'`"
#ex:services_express_fr
MYSQL_DATABASE=$SITE_NAME_EX
#ex services_express_fr
MYSQL_USER=$SITE_NAME_EX

echo "BDD du site : $MYSQL_DATABASE et user : $MYSQL_USER"
echo "LA BDD doit être crée "

WORDPRESS_TABLE_PREFIX=wp_5db1780276eb2_
echo "prefixe BDD $WORDPRESS_TABLE_PREFIX"

MYSQL_PASSWORD=$MYSQL_USER

echo "bdd password sera:$MYSQL_PASSWORD"
docker run -d -e VIRTUAL_HOST=$DOMAINS \
              -e LETSENCRYPT_HOST=$DOMAINS \
              -e LETSENCRYPT_EMAIL=$LETSENCRYPT_EMAIL \
              -e WORDPRESS_DB_HOST=${CONTAINER_DB_NAME}:3306 \
              -e WORDPRESS_DB_NAME=${MYSQL_DATABASE} \
              -e WORDPRESS_DB_USER=${MYSQL_USER} \
              -e WORDPRESS_DB_PASSWORD=${MYSQL_PASSWORD} \
              -e WORDPRESS_TABLE_PREFIX=${WORDPRESS_TABLE_PREFIX} \
              --network=$NETWORK \
              --name $SITE_NAME \
              -v $SITE_CONTENT:/var/www/html/ \
              -v $CURRENT/$SITE_NAME/config/conf.d/uploadsize.ini:/usr/local/etc/php/conf.d/uploadsize.ini \
              wordpress:latest \

docker-compose up -d --build