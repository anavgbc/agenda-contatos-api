import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1679922962557 implements MigrationInterface {
    name = 'createTables1679922962557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(60) NOT NULL, "lastName" character varying(60), "email" character varying NOT NULL, "password" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "number" character varying NOT NULL, "img" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(60) NOT NULL, "lastName" character varying(60), "email" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "number" character varying NOT NULL, "favorite" boolean NOT NULL DEFAULT false, "img" character varying, "note" character varying, "userId" uuid, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
