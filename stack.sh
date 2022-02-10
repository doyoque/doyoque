#!/bin/bash

declare options=$@
declare optionsArr=($options)
REDCOLOR="\e[31m"
GREENCOLOR="\e[32m"
YELLOWCOLOR="\e[33m"
ENDCOLOR="\e[0m"
clear

blog_run() {
  docker-compose --file doyoque-blog/compose-dev.yaml up --detach
}

blog_stop() {
  docker-compose --file doyoque-blog/compose-dev.yaml down --remove-orphans
  docker volume rm doyoque-blog_doyoque-db
  docker volume rm doyoque-blog_doyoque-echo
  docker volume rm doyoque-blog_doyoque-redis
}

blog_build() {
  docker-compose --file doyoque-blog/compose-dev.yaml up --build --detach
}

blog() {
  docker-compose --file doyoque-blog/compose-dev.yaml exec blog sh
}

blog_test() {
  docker-compose --file doyoque-blog/compose-dev.yaml exec blog ./vendor/bin/phpunit
  npm run test --prefix doyoque-blog/blog/
}

blog_watch() {
  npm run watch --prefix doyoque-blog/blog/
}

if [[ "${optionsArr[0]}" == "blog" ]]
then
  if [[ "${optionsArr[1]}" == "build" ]]
  then
    echo -e "${GREENCOLOR}Build blog stacks...${ENDCOLOR}"
    blog_build
  elif [[ "${optionsArr[1]}" == "stop" ]]
  then
    echo -e "${REDCOLOR}Stop blog stacks...${ENDCOLOR}"
    blog_stop
  elif [[ "${optionsArr[1]}" == "watch" ]]
  then
    blog_watch
  elif [[ "${optionsArr[1]}" == "test" ]]
  then
    blog_test
  elif [[ "${optionsArr[1]}" == "exec" ]]
  then
    blog
  else
    echo -e "${GREENCOLOR}Run blog stacks...${ENDCOLOR}"
    blog_run
  fi
fi
