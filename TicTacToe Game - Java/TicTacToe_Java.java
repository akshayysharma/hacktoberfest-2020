import java.util.Scanner;
public class TicTacToe_Java
{
	public static void main(String[] args) 
	{
		Scanner scan = new Scanner(System.in);
		int i,j,k,l,x,y,n,z=0,m=1,ans=0;
		char c;
		String player1,player2,player;
		System.out.println("TicTacToe : ");
		System.out.println("Ready To Play : ");
		char a[][]={{'.','.','.'},
					{'.','.','.'},
					{'.','.','.'}};
		System.out.println(" "+" 0 1 2 ");
		System.out.println(" "+" _ _ _ ");
		for(i=0;i<3;i++)
		{
			System.out.print(i+"|");
			for(j=0;j<3;j++)
			{
				System.out.print(a[i][j]+" ");
			}
			System.out.println(" ");
		}
		System.out.println("Enter the first player name : ");
		player1=scan.next();
		System.out.println("Enter the second player name : ");
		player2=scan.next();
		while(true)
		{
			if(z%2==0)
			{
				player=player1;
				c='x';
			}
			else
			{
				player=player2;
				c='o';
			}
			System.out.println(player+",It's Your Turn !!");
			System.out.println("Enter the x co-ordinate to place "+c+" : ");
			x=scan.nextInt();
			if(x<0 || x>=3)
			{
				System.out.println("Incorrect x co-ordinate");
				continue;
			}
			System.out.println("Enter the y co-ordinate to place "+c+" : ");
			y=scan.nextInt();
			if(y<0 || y>=3)
			{
				System.out.println("Incorrect y co-ordinate");
				continue;
			}
			if(a[x][y]=='x' || a[x][y]=='y')
			{
				System.out.println("Cannot change previous position !!! ");
				continue;
			}
			if(a[x][y]=='.')
			{
				a[x][y]=c;
			}
			System.out.println(" "+" 0 1 2 ");
			System.out.println(" "+" _ _ _ ");
			for(i=0;i<3;i++)
			{
				System.out.print(i+"|");
				for(j=0;j<3;j++)
				{
					System.out.print(a[i][j]+" ");
				}
				System.out.println(" ");
			}
			for(i=0;i<3;i++)
			{
				if((a[i][m]==a[i][m+1] && a[i][m]==a[i][m-1] && a[i][m]!='.') || (a[m][i]==a[m+1][i] && a[m][i]==a[m-1][i] && a[m][i]!='.'))
				{
					ans=1;
					break;
				}
			}
			if(a[0][0]==a[1][1] && a[1][1]==a[2][2] && a[1][1]!='.')
			{
				ans=1;
			}
			if(a[0][2]==a[1][1] && a[1][1]==a[2][0] && a[1][1]!='.')
			{
				ans=1;
			}
			if(ans==1)
			{
				System.out.println(" ");
				System.out.println(player+" Wins ");
				break;
			}
			ans=0;
			z++;
		}
	}
}