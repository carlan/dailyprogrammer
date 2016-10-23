import java.io.Console;
import java.io.FileWriter;
import java.io.IOException;

public class App {

  public App() {

    Console console = System.console();

    System.out.println("What's your name?");
    String name = console.readLine();

    System.out.println("What's your age?");
    String age = console.readLine();

    System.out.println("What's your reddit username?");
    String username = console.readLine();

    String output = "your name is " + name + ", you are " + age + " years old, and your username is " + username;
    System.out.println(output);

    try {
      FileWriter fileWriter = new FileWriter("output.txt");
      fileWriter.write(output);
      fileWriter.write("\n");
      fileWriter.close();
    } catch (Exception e) {

    }

  }

  public static void main(String[] args) {
    new App();
  }
}
