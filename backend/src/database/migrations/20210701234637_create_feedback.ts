import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('feedback', table => {
    table.increments('id_feedback').primary().notNullable();
    table.string('name').notNullable();
    table.string('text').notNullable();
    table.integer('id_celula').notNullable();
    table.foreign('id_celula').references('id_celula').inTable('celula');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('feedback');
}

