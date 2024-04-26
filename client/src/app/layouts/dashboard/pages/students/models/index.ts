export interface IStudent{
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    curso:'Angular' | 'React'
    createdAt: Date;
}