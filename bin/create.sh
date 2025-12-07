YEAR=$1;
DAY=$2;

DIR="$DAY"

if [ ! -d $YEAR ]; then
  mkdir $YEAR
fi

mkdir $YEAR/$DIR
touch $YEAR/$DIR/instructions.txt

cat <<EOF > "$YEAR/$DIR/main.js"
import { readFileSync } from "node:fs";

const parseInstructions = (data) => {
  const instructions = data.trim().split("\n");

  return instructions;
};

(() => {
  const data = readFileSync("./instructions.txt", "utf-8");
  const instructions = parseInstructions(data);

  console.log(instructions);
})();
EOF

cat <<EOF > "$YEAR/$DIR/main.go"
package main

import (
	"fmt"
	"os"
	"strings"
)

func parse_instructions(data []byte) ([]string, error) {
	content := strings.TrimSpace(string(data))
	instructions := strings.Split(content, "\\n")
  
	return instructions, nil
}

func main() {
	data, err := os.ReadFile("./instructions.txt")
	if err != nil {
		return
	}

	instructions, err := parse_instructions(data)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println(instructions)
}
EOF

cd $YEAR/$DAY
