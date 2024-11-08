import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cuil: string;

  @Column()
  dni: string;

  @Column()
  name: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  accountNumber: string;

  @Column()
  initialBalance: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
