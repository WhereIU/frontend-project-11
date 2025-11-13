setup: install

install:
	npm ci

develop:
	npm run dev

build:
	NODE_ENV=production npm run build

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .