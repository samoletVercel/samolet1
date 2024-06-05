CONTENT="$( cd "$( dirname $0 )" && pwd )"
SERV_CONTENT=petr@samolet.ibnd.ru:/home/petr/samolet
PORT=2021
echo "Deploying all files"
rsync -rtvu --delete -e "ssh -p $PORT" "$CONTENT"/app $SERV_CONTENT/
rsync -rtvu --delete -e "ssh -p $PORT" "$CONTENT"/public $SERV_CONTENT/
rsync -v -e "ssh -p $PORT" "$CONTENT"/next.config.js $SERV_CONTENT/
rsync -v -e "ssh -p $PORT" "$CONTENT"/tsconfig.json $SERV_CONTENT/
#rsync -v -e "ssh -p $PORT" "$CONTENT"/package.json $SERV_CONTENT/