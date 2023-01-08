import {v4 as uuidv4} from 'uuid'

const mockData = [
    {
        id:uuidv4(),
        title: '📋 Por hacer',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar CSS'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Python'
            },
            {
                id: uuidv4(),
                title: 'Estudiar NodeJS'
            },
        ]
    },
    {
        id:uuidv4(),
        title: '✏️ En progreso',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Tailwind'
            },
            {
                id: uuidv4(),
                title: 'Estudiar React'
            },
        ]
    },
    {
        id:uuidv4(),
        title: '✔️ Completado',
        tasks: [
            {
                id: uuidv4(),
                title: 'Curso de HTML'
            },
            {
                id: uuidv4(),
                title: 'Curso manejo de la consola'
            }
        ]
    },
];

export default mockData;