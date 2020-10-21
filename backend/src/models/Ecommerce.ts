import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import Order from './Order';

@Entity("ecommerces")
export default class Ecommerce {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Order, order => order.ecommerce, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'ecommerce_id' })
    orders: Order[];
}
