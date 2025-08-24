
def fizzBuzz(self, n: int) -> list[str]:
        res = []
        for i in range( 1 , n+1) : 
             if i % 3 == 0 and i % 5 == 0 : res.append("FizzBuzz")
             if i % 3 == 0 : res.append("Fizz")
             if i % 5 == 0 : res.append("Buzz")
             else: res.append(str(i))
        return res   

