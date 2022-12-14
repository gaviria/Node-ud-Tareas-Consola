const inquirer = require("inquirer");
require("colors");

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Qué desea hacer?",
        choices: [
            {
                value: "1",
                name: `${"1.".green} Crear Tarea`,
            },
            {
                value: "2",
                name: `${"2.".green} Listar Tarea`,
            },
            {
                value: "3",
                name: `${"3.".green} Listar Tareas Completadas`,
            },
            {
                value: "4",
                name: `${"4.".green} Listar Tareas Pendientes`,
            },
            {
                value: "5",
                name: `${"5.".green} Completar Tarea(s)`,
            },
            {
                value: "6",
                name: `${"6.".green} Borrar tarea`,
            },
            {
                value: "0",
                name: `${"0.".green} Salir`,
            },
        ],
    },
];

const inquirerMenu = async () => {
    console.clear();
    console.log("==============================".green);
    console.log("     Seleccione una opción".white);
    console.log("==============================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
};

const pausa = async () => {
    const question = [
        {
            type: "input",
            name: "enter",
            message: `Presione ${"enter".green} para continuar`,
        },
    ];

    console.log("\n");
    await inquirer.prompt(question);
};

/**
 *
 * @param {String} message
 * @returns
 */
const leerInput = async (message) => {
    const question = [
        {
            type: "input",
            name: "desc",
            message: message,
            validate(value) {
                if (value.length === 0) {
                    return "Por favor ingrese un valor";
                }
                return true;
            },
        },
    ];

    const { desc } = await inquirer.prompt(question);

    return desc;
};

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
};
