import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {

    computeMatrix(): void {
        console.log('Computing matrix...');

        // pull the numbers from the form into a 1D array
        const inputElements: HTMLInputElement[] = Array.from(document.querySelectorAll('.input_matrix input'));
        const matrixInputs: number[] = inputElements.map(input => Number(input.value));

        // construct the two 3x3 matrices
        const matrix1: number[][] = [];
        matrix1.push(matrixInputs.slice(0, 3));
        matrix1.push(matrixInputs.slice(3, 6));
        matrix1.push(matrixInputs.slice(6, 9));
        const matrix2: number[][] = [];
        matrix2.push(matrixInputs.slice(9, 12));
        matrix2.push(matrixInputs.slice(12, 15));
        matrix2.push(matrixInputs.slice(15, 18));

        console.log('Matrix 1:', matrix1);
        console.log('Matrix 2:', matrix2);

        // compute the result matrix
        const resultMatrix: number[][] = [];
        resultMatrix[0] = [0, 0, 0];
        resultMatrix[1] = [0, 0, 0];
        resultMatrix[2] = [0, 0, 0];

        resultMatrix[0][0] = matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0] + matrix1[0][2] * matrix2[2][0];
        resultMatrix[0][1] = matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1] + matrix1[0][2] * matrix2[2][1];
        resultMatrix[0][2] = matrix1[0][0] * matrix2[0][2] + matrix1[0][1] * matrix2[1][2] + matrix1[0][2] * matrix2[2][2];

        resultMatrix[1][0] = matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0] + matrix1[1][2] * matrix2[2][0];
        resultMatrix[1][1] = matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1] + matrix1[1][2] * matrix2[2][1];
        resultMatrix[1][2] = matrix1[1][0] * matrix2[0][2] + matrix1[1][1] * matrix2[1][2] + matrix1[1][2] * matrix2[2][2];

        resultMatrix[2][0] = matrix1[2][0] * matrix2[0][0] + matrix1[2][1] * matrix2[1][0] + matrix1[2][2] * matrix2[2][0];
        resultMatrix[2][1] = matrix1[2][0] * matrix2[0][1] + matrix1[2][1] * matrix2[1][1] + matrix1[2][2] * matrix2[2][1];
        resultMatrix[2][2] = matrix1[2][0] * matrix2[0][2] + matrix1[2][1] * matrix2[1][2] + matrix1[2][2] * matrix2[2][2];

        console.log('Result Matrix:', resultMatrix);

        // display the result matrix in the result inputs
        const resultInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.result_matrix input');
        console.log('Result Inputs:', resultInputs);
        resultInputs[0].value = resultMatrix[0][0].toString();
        resultInputs[1].value = resultMatrix[0][1].toString();
        resultInputs[2].value = resultMatrix[0][2].toString();
        resultInputs[3].value = resultMatrix[1][0].toString();
        resultInputs[4].value = resultMatrix[1][1].toString();
        resultInputs[5].value = resultMatrix[1][2].toString();
        resultInputs[6].value = resultMatrix[2][0].toString();
        resultInputs[7].value = resultMatrix[2][1].toString();
        resultInputs[8].value = resultMatrix[2][2].toString();
    }
}
