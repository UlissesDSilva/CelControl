import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('administrator', table => {
    table.increments('id_adm').primary().notNullable();
    table.string('login').notNullable();
    table.string('password').notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('administrator');
}

