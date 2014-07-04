p Time.local(2016,7,3,13,13)

def add_value(*v)
	return v.inject{ |mem, var|  mem+=var}
end

p add_value(1,2,3,4)
p add_value("a","b","c")
p add_value([1,2,3],[4],[5,6])