#W3D4 Map

class Map
    attr_accessor :map
    def initialize
        @map = Array.new(3){[]}
    end

    def set(key, val)
    
        idx1 = nil
        @map.each_with_index do |ele, idx|
            if ele[0] == key
            idx1 = idx 
            end
        end
        if !idx1
            @map << [key, val]
        else
            @map[idx1][1] = val
        end
    end

    def get(key)
        @map.each do |ele|
            if ele[0] == key
                return ele[1]
            end
        end

        false
    end

    def del(key)
        @map.each do |ele|
            if ele[0] == key
                ele.delete
            end
        end
    end

end