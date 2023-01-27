#ADT HW Queue is spelled weird

class Queue

    def initialize
        @queue = Array.new
    end

    def enqueue(ele)
        @queue += [ele]
    end

    def dequeue
        temp = @queue[0]
        @queue = @queue[1..-1]
        return temp
    end

    def peek
        @queue[0]
    end

end
