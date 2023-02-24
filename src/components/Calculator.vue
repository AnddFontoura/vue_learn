<script>
export default {
    data() {
        return {
            entrada1: '',
            entrada2: '',
            operador: '',
            resultado: 0,
        }
    },
    methods: {
        setResult() {
            switch (this.operador) {
                case '+':
                    this.resultado = parseInt(this.entrada1) + parseInt(this.entrada2)
                    break;
                case '-':
                    this.resultado = parseInt(this.entrada1) - parseInt(this.entrada2)
                    break;
                case 'x':
                    this.resultado = parseInt(this.entrada1) * parseInt(this.entrada2)
                    break;
                case '/':
                    this.resultado = parseInt(this.entrada1) / parseInt(this.entrada2)
                    break;
            }

        },
        setValue(value) {
            if (this.operador == '') {
                this.entrada1 = this.entrada1 + value
            } else {
                this.entrada2 = this.entrada2 + value
            }
        },
        setOperator(value) {
            this.operador = value
        },
        reset() {
            this.entrada1 = ''
            this.operador = ''
            this.entrada2 = ''
            this.resultado = 0
        },
    }
} 
</script>

<template>
    <p>{{ entrada1 }} {{ operador }} {{ entrada2 }}</p>
    <p>{{ resultado }}</p>
    <div>
        <button @click="setValue(1)">1</button>
        <button @click="setValue(2)">2</button>
        <button @click="setValue(3)">3</button>
        <button @click="setOperator('x')">x</button>
        <p> <button @click="setValue(4)">4</button>
            <button @click="setValue(5)">5</button>
            <button @click="setValue(6)">6</button>
            <button @click="setOperator('/')">/</button>
        </p>
        <button @click="setValue(7)">7</button>
        <button @click="setValue(8)">8</button>
        <button @click="setValue(9)">9</button>
        <p> <button @click="setValue(0)">0</button>
            <button @click="setOperator('+')">+</button>
            <button @click="setOperator('-')">-</button>
            <button @click="setResult()">=</button>
            <button @click="reset()">CE</button>
        </p>
    </div>
</template>
