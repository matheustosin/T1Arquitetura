import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';

import Product from './Product';
import Ecommerce from './Ecommerce';
import Customer from './Customer';

@Entity("orders")
export default class Order {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'dt_order', type: 'date' })
    orderDate: Date;

    @Column({ name: 'dt_delivery', type: 'date' })
    deliveryDate: Date;

    @Column({ name: 'dt_estimated_delivery', type: 'date'})
    estimatedDeliveryDate: Date;

    @Column({ name: 'status'})
    status: string;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];

    @ManyToOne(() => Ecommerce, ecommerce => ecommerce.orders)
    @JoinColumn({ name: 'ecommerce_id' })
    ecommerce: Ecommerce;

    @ManyToOne(() => Customer, customer => customer.orders)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;
}
