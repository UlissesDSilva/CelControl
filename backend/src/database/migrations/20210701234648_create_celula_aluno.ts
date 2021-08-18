import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('celula_student', table => {
    table.string('id_student').notNullable();
    table.integer('id_celula').notNullable();

    table.foreign('id_student').references('id_student').inTable('student');
    table.foreign('id_celula').references('id_celula').inTable('celula');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('celula_student');
}

