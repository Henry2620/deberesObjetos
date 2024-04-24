export function decodedResistorValue(col: string[]): string | undefined {
    let [col1, col2, col3] = col;
    let num3 = COLORS.indexOf(col3);
    let num4 = (10 * COLORS.indexOf(col1) + COLORS.indexOf(col2)) * Math.pow(10, num3);

    let count = 0;
    String(num4).split("").forEach((num) => {
        if (num === "0") {
            count++;
        }
    });

    if (count < 3) {
        return num4.toString() + " ohms";
    } else if (count >= 3 && count < 6) {
        return (num4 / 1000).toString() + " kiloohms";
    } else if (count >= 6 && count < 9) {
        return (num4 / 1000000).toString() + " megaohms";
    } else if (count === 9) {
        return (num4 / 1000000000).toString() + " gigaohms";
    } else {
        return undefined;
    }
}

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
