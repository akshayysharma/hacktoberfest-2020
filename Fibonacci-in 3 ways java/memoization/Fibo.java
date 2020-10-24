import java.util.Scanner;

/*Memoization ensures that a method doesn't run for 
the same inputs more than once by keeping a record of the results for the given inputs*/
class Fibo1 {
  final int MAX = 100; //max size of the array
  final int NIL = -1;
  int lookup[] = new int[MAX];

  //initialize NIL values in lookup table
  void initialize() {
    for (int i = 0; i < MAX; i++) lookup[i] = NIL;
  }

  int fib(int n) {
    if (lookup[n] == NIL) {
      if (n <= 1) lookup[n] = n; else lookup[n] = fib(n - 1) + fib(n - 2);
    }
    return lookup[n];
  }

  public static void main(String[] args) {
    Fibo1 f = new Fibo1();
    Scanner scan = new Scanner(System.in);
    System.out.print("Enter the position of fibonacci number you need: ");
    int findFibo = scan.nextInt();
    f.initialize();
    System.out.println(
      f.fib(findFibo) + " is the fibonacci number of position " + findFibo
    );
  }
}
