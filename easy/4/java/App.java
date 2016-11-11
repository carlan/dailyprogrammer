import java.util.*;

public class App {

    public App() {
        PasswordGenerator passwordGenerator = new PasswordGenerator(10);
        List<String> passwords = passwordGenerator.generate();
        for(String pwd: passwords) {
            System.out.println( pwd );    
        }
    }

    public static void main(String[] args) {
        new App();
    }

}