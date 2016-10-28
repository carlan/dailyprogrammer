public class App {

    public App() {
        Calculator calc = new Calculator();
        calc.addition(2,2);
        calc.subtraction(10,5);
        calc.multiplication(3,3);
        calc.division(9,3);
    }

    public static void main(String[] args) {
        new App();
    }

}

class Calculator {
    public Integer addition(Integer n1, Integer n2) {
        System.out.println("Addition n1=" + n1 + " and n2=" + n2);
        System.out.println("result=" + (n1+n2));
        return n1+n2;
    }
    public Integer subtraction(Integer n1, Integer n2) {
        System.out.println("Subtraction n1=" + n1 + " and n2=" + n2);
        System.out.println("result=" + (n1-n2));
        return n1-n2;
    }
    public Integer multiplication(Integer n1, Integer n2) {
        System.out.println("Multiplication n1=" + n1 + " and n2=" + n2);
        System.out.println("result=" + (n1*n2));
        return n1*n2;
    }
    public Integer division(Integer n1, Integer n2) {
        System.out.println("Division n1=" + n1 + " and n2=" + n2);
        System.out.println("result=" + (n1/n2));
        return n1/n2;
    }        
}