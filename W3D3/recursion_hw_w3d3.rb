#Homework for William Davis, W3D3(Recursion, W3D3(Recursion, W3D3(1)))

#exercise 1

def sum_to(n) #returns sum of all numbers from 1 to n, inclusive
    if n == 1
        return n
    else
        n + sum_to(n-1)
    end
end

#exercise 2
def add_numbers(nums_arr) #adds numbers in an array, returns sum
    if nums_arr.length == 0
        return 0
    else
        nums_arr[0] + nums_arr[1..-1]
end

#exercise 3
def gamma_function(n) #returns factorial of n-1
    return 1 if n==1 || return nil if n <= 0
    (n - 1) * gamma_function(n-2) 

end

#exercise 4
def ice_cream_shop(flavor_arr, favorite)
    if flavor_arr[0] == favorite
        return favorite
    else
        ice_cream_shop(flavor_arr[1..-1], favorite)
    end
end

#exercise 5
def reverse(string) #returns a string reversed
    if string.length <= 1
        return string
    else
        string[-1] + reverse(string[0...-1])
end

  sum_to(5)  # => returns 15
  sum_to(1)  # => returns 1
  sum_to(9)  # => returns 45
  sum_to(-8)  # => returns nil

    add_numbers([1,2,3,4]) # => returns 10
  add_numbers([3]) # => returns 3
  add_numbers([-80,34,7]) # => returns -39
  add_numbers([]) # => returns nil

    gamma_fnc(0)  # => returns nil
  gamma_fnc(1)  # => returns 1
  gamma_fnc(4)  # => returns 6
  gamma_fnc(8)  # => returns 5040


    ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  # => returns false
  ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  # => returns true
  ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')  # => returns false
  ice_cream_shop(['moose tracks'], 'moose tracks')  # => returns true
  ice_cream_shop([], 'honey lavender')  # => returns false

    reverse("house") # => "esuoh"
  reverse("dog") # => "god"
  reverse("atom") # => "mota"
  reverse("q") # => "q"
  reverse("id") # => "di"
  reverse("") # => ""