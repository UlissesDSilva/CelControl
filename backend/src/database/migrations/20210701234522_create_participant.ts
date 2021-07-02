import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('participant', (table) => {
    table.string('id_participant').primary().notNullable();
    table.string('matricula').notNullable();
    table.string('course').notNullable();
    table.string('password').notNullable();
    table.string('complement_hours').notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('participant');
}

