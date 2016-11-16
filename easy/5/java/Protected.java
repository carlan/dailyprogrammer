import java.util.*;
import java.io.*;
import java.nio.file.*;

class Protected {

    private Map<String, String> authInfo;
    private Boolean loggedIn;

    public Protected() {
        this.authInfo = new HashMap<>();
        this.loggedIn = false;
    }

    private void loadLoginAndPasswordFromFile() {
        try {
            String fileContents = new String(Files.readAllBytes(Paths.get("secret.txt")));
            for(String line : fileContents.split("\n")) {
                line = line.replace("\n", "").replace("\r", "");
                String[] array = line.split(":");
                this.authInfo.put(array[0], array[1]);
            }
        } catch(IOException e) {
            System.out.println("Error reading the secret.txt");
        }
    }

    public void getUserInput() {
        this.loadLoginAndPasswordFromFile();

        Console console = System.console();
        System.out.println("What's your username?");
        String username = console.readLine();

        System.out.println("What's your password?");
        String password = console.readLine();

        this.login(username, password);
        this.authorize();
    }

    private void login(String username, String password) {
        if(this.authInfo.containsKey(username)) {
            this.loggedIn = this.authInfo.get(username).equals(password);
        }
    }

    private void authorize() {
        if(this.loggedIn) {
            System.out.println("Logged in");
        } else {
            System.out.println("Not allowed to login");
        }
    }
}