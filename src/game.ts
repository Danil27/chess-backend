import { Match } from "./entity/Match";
import { Repository } from "typeorm";
import { StockfishInstance } from 'node-stockfish'

export class Game {
    private matchRepository: Repository<Match>;
    private stockfishEngine;

    constructor(repository: Repository<Match>) {
        this.matchRepository = repository;
        this.stockfishEngine = StockfishInstance.getInstance();
    }

    public async run() {
        await this.matchRepository.clear();
        this.stockfishEngine.setBoardstateByMoves('e2e4 e7e5 b1c3');
        this.stockfishEngine.startAnalysing({
            // Number of lines to include in the analysis.
            lines: 5
        });

        this.stockfishEngine.onAnalysisData(analysisData =>
            {
                console.log(`Analysis for depth ${ analysisData.depth }:`)
            
                for (const line of analysisData.lines)
                {
                    console.log(`\t${ line.score }: ${ line.moves.join(' ') }`)
                }
            
                console.log('')
            
                if (analysisData.depth >= 15)
                {
                    // Stop the analysis and terminate the Stockfish instance.
            
                    this.stockfishEngine.terminate()
                }
            })
    }

    // private async save(move: string, playerId: number) {
    //     await this.matchRepository.save({
    //         move,
    //         playerId
    //     });
    // }
}