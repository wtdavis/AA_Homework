class LRUCache

    def initialize(max_size)
        @cache = []
        @max_size = max_size
    end

    def count
        return @cache.length
    end

    def add(ele)
        if cache.include?(ele)
            cache.delete(ele)
            cache << ele
        else
            cache << ele
            count == max_size + 1 ? cache.shift : return
            return 
        end
    end

    def show
        p cache.dup
    end

    private
    attr_accessor :cache, :max_size

end

johny = LRUCache.new(4)

johny.add("ring of fire")
johny.add(:hurt)
johny.add([5,5,5,5])

p johny.show

johny.add(:hurt)
p johny.show

johny.add("this land")
p johny.show