import {FormInputValue} from "@/app";

export type HospitalizedPersonsProps = {
    total: FormInputValue,
    mediana: FormInputValue,
    mediana_small: FormInputValue,
    mediana_heavy: FormInputValue,
    mediana_presumable: FormInputValue
}

export class Calculations {
    hospShareTotal: number;
    hospShareOverall: number;
    hospShareIntensive: number;
    hospProbTotal: number;
    hospProbGeneral: number;
    hospProbIntensive: number;
    mediana_presumable: number;
    constructor({
        total,
        mediana,
        mediana_small,
        mediana_heavy,
        mediana_presumable
    }: HospitalizedPersonsProps) {
        this.hospShareTotal = Number(mediana) * 100 / Number(total);
        this.hospShareOverall = Number(mediana_small) * 100 / Number(mediana);
        this.hospShareIntensive = Number(mediana_heavy) * 100 / Number(mediana);
        this.hospProbTotal = 0;
        this.hospProbGeneral = 0;
        this.hospProbIntensive = 0;
        this.mediana_presumable = Number(mediana_presumable)
    }

    secondStep() {
        this.hospProbTotal = this.hospShareTotal * (this.mediana_presumable / 100)
    }

    thirdStep() {
        this.hospProbGeneral = this.hospProbTotal * (this.hospShareOverall / 100)
    }

    fourthStep() {
        this.hospProbIntensive = this.hospProbTotal * (this.hospShareIntensive / 100)
    }

    getResult() {
        this.secondStep()
        this.thirdStep();
        this.fourthStep();

        return {
            totalResult: Math.round(this.hospProbGeneral / 1.076),
            intensiveResult: Math.round(this.hospProbIntensive / 0.7)
        }
    }
}