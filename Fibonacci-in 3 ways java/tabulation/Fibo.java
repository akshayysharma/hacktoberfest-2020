import java.util.Scanner;

/*
Tabulation is an approach where you solve a dynamic programming problem by first filling up a table
*/
//bottom up approach
class Fibo3 {

  int fib(int n) {
    int f[] = new int[n + 1];
    f[0] = 0;
    f[1] = 1;
    for (int i = 2; i <= n; i++) f[i] = f[i - 1] + f[i - 2];
    return f[n];
  }

  public static void main(String[] args) {
    Fibo3 f = new Fibo3();
    Scanner scan = new Scanner(System.in);
    System.out.print("Enter the position of fibonacci number you need: ");
    int findFibo = scan.nextInt();
    System.out.println(
      f.fib(findFibo) + " is the fibonacci number of position " + findFibo
    );
  }
}
