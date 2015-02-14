s = gets.chomp.split(" ")
sum=0
s.each do |v|
	v=v.to_i
	sum+=v
end
p sum