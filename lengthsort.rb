class Vector
	attr_accessor :x,:y
	def initialize(x=0, y=0)
		@x=x
		@y=y
	end
	def length
		Math::sqrt(@x**2+@y**2)
	end
	def to_s
		"#{@x},#{@y}"
	end
	def <=> other
		length <=>other.length
	end
end
arr=[]
arr<<Vector.new
arr<<Vector.new(2,3)
arr<<Vector.new(4,5)
arr.sort.each do |x|
	puts x
end

