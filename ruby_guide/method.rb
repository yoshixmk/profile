#最後に評価された式が戻り値の結果になる
def sum(a, b)
	a+b
end

def sumd(a,b=100,c=200)
	a+b+c
end

puts sum(5,10)
puts sumd(10)
puts sumd(10,1)