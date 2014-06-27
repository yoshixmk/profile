3.times do |i|
	puts i**2
end

#こっちのほうがすっきり
3.times{|i|	puts i**2}

value=["Ruby","Python","Perl"]
value.each{|v| puts v}