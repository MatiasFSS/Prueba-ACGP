/*
    Problema:
    Implementa una clase “ColaMinimo” que funcione como una cola (FIFO), pero que además tenga un método “minimo()” que devuelva el valor mínimo actual en la cola.

    Métodos esperados:
    - encolar(valor)
    - desencolar()
    - minimo()
*/

class ColaMinimo {
    constructor() {
        this.cola = [];
    }

    encolar(valor) {
        this.cola.push(valor);
    }

    desencolar() {
        if (this.cola.length === 0) {
            console.log("La cola está vacía.");
            return null;
        }
        return this.cola.shift();
    }

    minimo() {
        if (this.cola.length === 0) {
            console.log("La cola está vacía.");
            return null;
        }
        let min = this.cola[0];
        for (let i = 1; i < this.cola.length; i++) {
            if (this.cola[i] < min) {
                min = this.cola[i];
            }
        }
        return min;
    }
}

const cola = new ColaMinimo();

cola.encolar(10);
cola.encolar(5);
cola.encolar(7);
cola.encolar(2);
cola.encolar(1);

console.log("Mínimo actual:", cola.minimo());

cola.desencolar();
cola.desencolar(); 

console.log("Mínimo actual:", cola.minimo());
