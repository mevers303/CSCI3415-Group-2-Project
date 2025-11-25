import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const verbose: boolean = true;


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
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.html',
  styleUrl: './demo2.css',
})
export class Demo2 {

    // properties
    private resultMatrix: Matrix | undefined;
    private http = inject(HttpClient);


    // methods
    // function to handle API response and display result
    public handleApiResponse(data: number[][]): void {

        if (verbose) {
            console.log('Received API response:');
            console.log(data);
        }

        // store result matrix
        let resultMatrix = new Matrix(data);

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

    // compute the result matrix
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
        const data = { m1: m1.values, m2: m2.values };
        this.http.post<number[][]>('/api/demo2', data).subscribe(this.handleApiResponse);

    }

}
