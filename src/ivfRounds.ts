export class IVFRounds {
    generate(num: number): string[] {
        let output: string[] = []
        for (let i = 0; i < num; i++){
            const live_birth: boolean = (i + 1) % 5 === 0;
            output.push(this.fetchReplacement(i, live_birth));
        }
        return output;
    }
    
    fetchReplacement(num: number, live_birth: boolean): string {
        let ivf = ""
            if (num % 3 === 0) {
                ivf = "FRESH";
            } else {
                ivf = "FROZEN";
            }
    
            if (live_birth) {
                return ivf + "+LIVE_BIRTH"
            } else {
                return ivf
            }
        }
    }