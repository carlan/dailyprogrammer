import java.util.*;
import java.util.stream.*;

public class PasswordGenerator {

    private int amount;
    private Config config;

    public PasswordGenerator(int amount) {
        this.amount = amount;
        this.config = new Config();
    }

    public List<String> generate() {
        List<String> passwords = new ArrayList<>();

        for(String word : this.config.getLegend().get("w").split(" ")) {
            int wordIndex = Arrays.asList( this.config.getLegend().get("w").split(" ") ).indexOf(word);
            
            for(char letter : word.toCharArray()) {
                int letterIndex = word.chars().mapToObj((i) -> Character.valueOf((char)i)).collect(Collectors.toList()).indexOf(letter);
                Character[] charArray = new Character[]{Character.toUpperCase(letter), letter};
                int randCase = charArray[new Random().nextInt(charArray.length)];
                word = word.substring(0, letterIndex) + (char)randCase + word.substring(letterIndex + 1);
            }

            this.config.getLegend().put("w", this.config.getLegend().get("w").replace(word.toLowerCase(), word));
        }

        for(char letter : this.config.getLegend().get("l").toCharArray()) {
            int letterIndex = this.config.getLegend().get("l").chars().mapToObj((i) -> Character.valueOf((char)i)).collect(Collectors.toList()).indexOf(letter);
            Character[] charArray = new Character[]{Character.toUpperCase(letter), letter};
            int randCase = charArray[new Random().nextInt(charArray.length)];
            this.config.getLegend().put("l", this.config.getLegend().get("l").replace(Character.toLowerCase(letter), (char)randCase) );
        }

        for(int i = 0; i < this.amount; i++) {
            String password = "";
            for(char letter : this.config.getTemplate().toCharArray()) {
                String sorteable = this.config.getLegend().get( Character.toString(letter) );
                if(sorteable.indexOf(" ") == -1) {
                    char[] charArray = sorteable.toCharArray();
                    char picked = charArray[new Random().nextInt(charArray.length - 1) ];
                    password+=picked;
                } else {
                    String[] stringArray = sorteable.split(" ");
                    String picked = stringArray[new Random().nextInt(stringArray.length - 1) ];
                    password+=picked;
                }
            }
            passwords.add(password);
        }

        return passwords;
    }

}