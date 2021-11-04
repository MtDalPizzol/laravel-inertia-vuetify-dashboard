## Laravel + Inertia + Vuetify Dashboard

This a simple admin dashboard developed with Laravel and Inertia JS along with Vuetify.

This is the result of a lesson I recorded and posted to my Youtube Channel (portuguese only) to demonstrate various features of the Vuetify component Library.

Laravel was used basically to generate the fake data for the table and Inertia to pass that data to the Vue components.

The `resources` folder is an app generated with Vue CLI, so all the `npm` commands should run inside it.

## How to use it

Clone the repo and setup a database on the .env file. Then:

```bash
composer install

php artisan migrate

php artisan db:seed

cd resources

npm install

npm run serve
```
