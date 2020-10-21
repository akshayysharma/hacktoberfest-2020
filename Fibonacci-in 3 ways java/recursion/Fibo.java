import java.util.Scanner;

class Fibo2 {

  int fib(int num) {
    if (num <= 1) return num;
    return fib(num - 1) + fib(num - 2);
  }

  public static void main(String[] args) {
    Fibo2 f = new Fibo2();
    Scanner scan = new Scanner(System.in);
    System.out.print("Enter the position of fibonacci number you need: ");
    int findFibo = scan.nextInt();
    System.out.println(
      f.fib(findFibo) + " is the fibonacci number of position " + findFibo
    );
  }
}
