import express from 'express';


class MatrixError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MatrixError";
    }
}

// 3x3 matrix class
class Matrix {
    public values: number[][];

    constructor(values: number[][]) {
        if (values.length !== 3 || values.some(row => row.length !== 3)) {
            throw new MatrixError("Matrix must be 3x3");
        }
        this.values = values;
    }
}

// multiply two 3x3 matrices
function multiplyMatrices(m1: Matrix, m2: Matrix): Matrix {

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


export function demo2(req: express.Request, res: express.Response): void { 

    const data = req.body;
    console.log('Received demo2 request');

    try {

        // parse input matrices
        const m1 = new Matrix(data.m1);
        const m2 = new Matrix(data.m2);
        
        // multiply matrices
        const result = multiplyMatrices(m1, m2);
        res.json(result.values);

    } catch (error) {

        if (error instanceof MatrixError) {
            res.status(400).send(`Invalid matrix input: ${error.message}`);
        } else {
            res.status(400).send(`Error parsing input matrices: ${error}`);
        }
        
    }

}
