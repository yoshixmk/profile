module Greeting
	def say_hello
		puts "Hello."
	end
	def say_good_bye
		puts "Good-bye"
	end
end

class Foo
	include Greeting
	def say
		puts "foo"
	end
end

class Super
	include Greeting
	def hello
		puts "hello"
	end
	def goodnight
		puts "good night"
	end
end

class Sub<Super
	def hello
		puts "HELLO"
	end
	def goodmorning
		puts "GOOD MORNING"
	end
end

s_0=Sub.new()
s_0.hello
s_0.goodnight
s_0.goodmorning
s_0.say_hello
s_0.say_good_bye
puts
s_1=Super.new()
s_1.hello
s_1.goodnight
#s_1.goodmorning
puts
s_2=Foo.new()
s_2.say
s_2.say_hello
s_2.say_good_bye

