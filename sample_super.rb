class SampleSuper
	def foo
		puts "foo"
	end

	def bar
		puts "bar"
	end
end

class SampleSub<SampleSuper
	def baz
		puts "baz"
	end

	def bar
		puts "BAR"
	end
end

a_super=SampleSuper.new
a_sub=SampleSub.new

a_sub.foo
a_sub.bar
a_sub.baz
puts
a_super.foo
a_super.bar
a_super.baz