import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('frequency', table => {
    table.increments('id_frequency').primary().notNullable();
    table.string('id_student').notNullable();
    table.integer('id_celula').notNullable();

    table.foreign('id_celula').references('id_celula').inTable('celula');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('frequency');
}

