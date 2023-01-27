#W3D4 HW: Abstract Data Structures
class Stack

    def initialize
        @stack = Array.new
    end

    def push(val)
        @stack += [val]
    end

    def pop
        temp = @stack[-1]
        @stack = @stack[0...-1]
        return temp
    end

    def peek
        return @stack[-1]
    end
    

end