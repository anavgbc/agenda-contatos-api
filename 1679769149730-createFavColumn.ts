import { MigrationInterface, QueryRunner } from "typeorm";

export class createFavColumn1679769149730 implements MigrationInterface {
    name = 'createFavColumn1679769149730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "favorite" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "number" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "number" character varying(13) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "favorite"`);
    }

}
