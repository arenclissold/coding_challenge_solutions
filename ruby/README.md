# Ruby Coding Solutions 🔺

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

```ruby
# You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

def valid_walk?(walk)
  walk.count('n') == walk.count('s') && walk.count('e') == walk.count('w') && walk.length == 10
end

valid_walk(['n','s','n','s','n','s','n','s','n','s'])
# => true
```
