# Javascript Coding Solutions

A collection of my solutions to Ruby coding challenges.

## Code Wars

```ruby
# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0.

# For example solution(10) => [3, 5, 6, 9] => 23

def solution(number)
  total = 0
  for num in 2...number
    if (num % 3 == 0) || (num % 5 == 0)
      total += num
    end
  end
  return total
end

solution(20)
# => 78
```

```ruby
# Implement the function which takes an array containing the names of people that like an item.

# Examples:
# []                                =>  "no one likes this"
# ["Peter"]                         =>  "Peter likes this"
# ["Jacob", "Alex"]                 =>  "Jacob and Alex like this"
# ["Max", "John", "Mark"]           =>  "Max, John and Mark like this"
# ["Alex", "Jacob", "Mark", "Max"]  =>  "Alex, Jacob and 2 others like this"

def likes(names)
  case names.length
    when 0
      "no one likes this"
    when 1
      "#{names[0]} likes this"
    when 2
      "#{names[0]} and #{names[1]} like this"
    when 3
      "#{names[0]}, #{names[1]} and #{names[2]} like this"
    else
      "#{names[0]}, #{names[1]} and #{names.length()-2} others like this"
    end
end

likes(['Max', 'John', 'Mark'])
# => 'Max, John and Mark like this'
```
