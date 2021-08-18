import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('celula_participant', table => {
    table.string('id_participant').notNullable();
    table.integer('id_celula').notNullable();

    table.foreign('id_participant').references('id_participant').inTable('participant');
    table.foreign('id_celula').references('id_celula').inTable('celula');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('celula_participant');
}

