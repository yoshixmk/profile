class Integer
	def to_heisei
		self-1988
	end
	def plus
		self+1
	end
end
y=2014
puts "西暦：#{y}  平成#{y.to_heisei}  次は#{y.plus}"