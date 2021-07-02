import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('student', (table) => {
    table.string('id_student').primary().notNullable();
    table.string('matricula').notNullable();
    table.string('course').notNullable();
    table.string('password').notNullable();
    table.string('complement_hours').notNullable();
    table.boolean('is_facilitator').defaultTo(false).notNullable(); 
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('student');
}

