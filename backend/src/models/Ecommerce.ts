import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("ecommerces")
export default class Ecommerce {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
}
