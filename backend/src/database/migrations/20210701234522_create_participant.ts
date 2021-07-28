import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('participant', (table) => {
    table.string('id_participant').primary().notNullable();
    table.string('name').notNullable();
    table.string('phone').notNullable();
    table.string('login').notNullable();
    table.string('password').notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('participant');
}

