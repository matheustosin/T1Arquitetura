import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrder1603171292825 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "orders",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "dt_order",
                    type: "date"
                },
                {
                    name: "dt_delivery",
                    type: "date"
                },
                {
                    name: "dt_estimated_delivery",
                    type: "date"
                },
                {
                    name: "status",
                    type: "string"
                },
                {
                    name: "ecommerce_id",
                    type: "integer"
                },
                {
                    name: "customer_id",
                    type: "integer"
                }
            ],
            foreignKeys: [
                {
                    name: 'EcommerceId',
                    columnNames: ['ecommerce_id'],
                    referencedTableName: 'ecommerces',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                {
                    name: 'CustomerId',
                    columnNames: ['customer_id'],
                    referencedTableName: 'customers',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }));

        await queryRunner.createTable(new Table({
            name: "orders_products_products",
            columns: [
                {
                    name: "ordersId",
                    type: "integer",
                    isPrimary: true
                },
                {
                    name: "productsId",
                    type: "integer",
                    isPrimary: true
                }
            ],
            foreignKeys: [
                {
                    name: "OrderId",
                    columnNames: ["ordersId"],
                    referencedTableName: "orders",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                },
                {
                    name: "ProductId",
                    columnNames: ["productsId"],
                    referencedTableName: "products",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
        await queryRunner.dropTable("orders_products_products");
    }

}
