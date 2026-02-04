# Checking Whether a Number is Even or Odd

```java
import java.util.Scanner;
    public class EvenOdd {
        public static void main(String[] args) {

            Scanner reader = new Scanner(System.in);

            System.out.print("Enter a number: ");

            int num = reader.nextInt();
            if(num % 2 == 0)
                System.out.println(num + " is even");
            else
                System.out.println(num + " is odd");
        }
    }
```

```
Enter a number: 12
12 is even
```


# Check whether an Alphabet is a Vowel or Consonant

```java
public class VowelConsonant {
        public static void main(String[] args) {

            char ch = 'i';

            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' )
                System.out.println(ch + " is vowel");
            else
                System.out.println(ch + " is consonant");
        }
    } 
```

```
i is vowel
```


# Finding The Largest among Three Numbers

```java
public class Largest {
        public static void main(String[] args) {

            double n1 = -4.5, n2 = 3.9, n3 = 2.5;

            if( n1 >= n2 && n1 >= n3)
                System.out.println(n1 + " is the largest number.");
            else if (n2 >= n1 && n2 >= n3)
                System.out.println(n2 + " is the largest number.");
            else
                System.out.println(n3 + " is the largest number.");
        }
    }
```

```
3.9 is the largest number.
```


# 