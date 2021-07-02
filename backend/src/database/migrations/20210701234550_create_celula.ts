import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('celula', table => {
    table.increments('id_celula').notNullable();
    table.string('id_student').notNullable();
    table.foreign('id_student').references('id_student').inTable('student')
    
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('celula');
}

