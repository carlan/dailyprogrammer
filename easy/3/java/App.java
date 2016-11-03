public class App {

    public App() {
        CaesarCipher caesar = new CaesarCipher();
        String quoteLowercase = "The first step is you have to say that you can.";
        String quoteUppercase = quoteLowercase.toUpperCase();

        String encLowercase = caesar.encrypt(1, quoteLowercase);
        String encUppercase = caesar.encrypt(1, quoteUppercase);
        String decLowercase = caesar.decrypt(1, encLowercase);
        String decUppercase = caesar.decrypt(1, encUppercase);

        System.out.println( "Quote (lowercase): " + quoteLowercase );
        System.out.println( "Quote (uppercase): " + quoteUppercase );
        System.out.println( "Encrypted (lowercase): " + encLowercase );
        System.out.println( "Encrypted (uppercase): " + encUppercase );
        System.out.println( "Decrypted (lowercase): " + decLowercase );
        System.out.println( "Decrypted (uppercase): " + decUppercase );

    }

    public static void main(String[] args) {
        new App();
    }

}

class CaesarCipher {

    public String encrypt(Integer key, String text) {
        StringBuffer buffer = new StringBuffer();
        for(char symbol : text.toCharArray()) {
            if(Character.isLetterOrDigit(symbol)) {
                if(Character.isLowerCase(symbol)) {
                    int shifted = ((int)symbol - 97 + key) % 26 + 97;
                    buffer.append((char)shifted);
                } else if(Character.isUpperCase(symbol)) {
                    int shifted = ((int)symbol - 65 + key) % 26 + 65;
                    buffer.append((char)shifted);
                }
            } else {
                buffer.append(Character.toString((char)symbol));
            }
        }
        return buffer.toString();
    }

    public String decrypt(Integer key, String text) {
                StringBuffer buffer = new StringBuffer();
        for(char symbol : text.toCharArray()) {
            if(Character.isLetterOrDigit(symbol)) {
                if(Character.isLowerCase(symbol)) {
                    int shifted = ((int)symbol - 97 - key) % 26 + 97;
                    buffer.append((char)shifted);
                } else if(Character.isUpperCase(symbol)) {
                    int shifted = ((int)symbol - 65 - key) % 26 + 65;
                    buffer.append((char)shifted);
                }
            } else {
                buffer.append(Character.toString((char)symbol));
            }
        }
        return buffer.toString();
    }

}