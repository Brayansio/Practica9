class Calificaciones {
    constructor() {
        this.datos = [];
    }

    agregarDato(nombre, matricula, materias) {
        this.datos.push({
            nombre: nombre,
            matricula: matricula,
            materias: materias
        });
        
        // Llamar a actualizarResultados después de agregar un nuevo dato
        actualizarResultados();
    }

    calcularPromedioMateria(materia) {
        let sum = 0;
        let count = 0;

        for (const dato of this.datos) {
            for (const [nombre, calificacion] of Object.entries(dato.materias)) {
                if (nombre === materia) {
                    sum += parseInt(calificacion);
                    count++;
                }
            }
        }

        return count === 0 ? 0 : sum / count;
    }

    calcularPromedioFinal() {
        let sum = 0;
        let count = 0;

        for (const dato of this.datos) {
            for (const calificacion of Object.values(dato.materias)) {
                sum += parseInt(calificacion);
                count++;
            }
        }

        return count === 0 ? 0 : sum / count;
    }

    calcularPromedioGeneral() {
        let sum = 0;
        let count = 0;

        for (const dato of this.datos) {
            for (const calificacion of Object.values(dato.materias)) {
                sum += parseInt(calificacion);
                count++;
            }
        }

        return count === 0 ? 0 : sum / count;
    }
}

    function agregarCalificaciones() {
        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const matricula = document.getElementById("matricula").value;
        const auditoriaInformatica = parseInt(document.getElementById("auditoriaInformatica").value);
        const desarrolloAplicacionesWeb = parseInt(document.getElementById("desarrolloAplicacionesWeb").value);
        const fundamentosInvestigacion = parseInt(document.getElementById("fundamentosInvestigacion").value);
        const interconectividadRedes = parseInt(document.getElementById("interconectividadRedes").value);
    
        // Calcular el promedio general
        const promedioGeneral = (auditoriaInformatica + desarrolloAplicacionesWeb + fundamentosInvestigacion + interconectividadRedes) / 4;
    
        // Crear una nueva fila en la tabla con los datos ingresados
        const tableBody = document.getElementById("calificacionesBody");
        const newRow = tableBody.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
    
        // Llenar la nueva fila con los datos y el promedio general
        cell1.textContent = nombre;
        cell2.textContent = matricula;
        cell3.textContent = auditoriaInformatica;
        cell4.textContent = desarrolloAplicacionesWeb;
        cell5.textContent = fundamentosInvestigacion;
        cell6.textContent = interconectividadRedes;
        cell7.textContent = promedioGeneral.toFixed(2);
    
        // Limpiar los campos del formulario
        document.getElementById("calificacionesForm").reset();
    }
