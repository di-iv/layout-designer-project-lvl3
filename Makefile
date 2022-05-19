install:
	npm i

serve:
	gulp serve

build:
	gulp build

lint:
	npx stylelint ./src/scss/**/*.scss

deploy:
	gulp build
	npx surge ./build/ --domain bad-hydrant.surge.sh
