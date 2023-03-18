export const findLessCostPath = (board: number[][]): number => {
    const lastElement = board[board.length - 1][board[board.length - 1].length - 1];
    const n = board.length, m = board[n - 1].length;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            let curr = Number.MAX_VALUE;
            if(i - 1 >= 0){ /// up
                curr = Math.min(curr, board[i - 1][j]);
            }
            if(j - 1 >= 0){ // left
                curr = Math.min(curr, board[i][j - 1]);
            }
            if(curr === Number.MAX_VALUE){
                curr = 0;
            }
            board[i][j] += curr;
        }
    }
    return board[n - 1][m - 1] - lastElement;
};
