import { Component, OnInit } from '@angular/core';

// verbosity flag
const verbose: boolean = false;


// 3x3 matrix class
class Matrix {
    public values: number[][];

    constructor(values: number[][]) {
        if (values.length !== 3 || values.some(row => row.length !== 3)) {
            throw new Error("Matrix must be 3x3");
        }
        this.values = values;
    }
}


// Angular component definition
@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 implements OnInit {


    // multiply two 3x3 matrices
    protected multiplyMatrices(m1: Matrix, m2: Matrix): Matrix {

        // matrix to hold result
        const result: number[][] = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        // do matrix multiplication
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    result[i][j] += m1.values[i][k] * m2.values[k][j];
                }
            }
        }

        // return result matrix
        return new Matrix(result);
    }


    // compute the result matrix and display it
    public computeMatrix(): void {

        if (verbose) console.log('Computing matrix...');

        // pull the numbers from the form into a 1D array
        const inputElements: HTMLInputElement[] = Array.from(document.querySelectorAll('.input_matrix input'));
        const matrixInputs: number[] = inputElements.map(input => Number(input.value));
        // construct the two 3x3 matrices
        const m1 = new Matrix([matrixInputs.slice(0, 3), matrixInputs.slice(3, 6), matrixInputs.slice(6, 9)]);
        const m2 = new Matrix([matrixInputs.slice(9, 12), matrixInputs.slice(12, 15), matrixInputs.slice(15, 18)]);
        if (verbose) console.log('Matrix 1:', m1);
        if (verbose) console.log('Matrix 2:', m2);

        // compute the result matrix
        const resultMatrix = this.multiplyMatrices(m1, m2);
        if (verbose) console.log('Result Matrix:', resultMatrix);

        // display the result matrix in the result inputs
        // get array of result input elements
        const resultInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.result_matrix input');
        // flatten the result matrix for easy assignment
        let flatResult: number[] = [];
        resultMatrix.values.forEach(row => flatResult.push(...row));
        // assign values to result input elements
        resultInputs.forEach((input, index) => {
            input.value = flatResult[index].toString();
        });

    }


    // pupulate the result matrix on component initialization
    public ngOnInit(): void {
        this.computeMatrix();
    }

}
