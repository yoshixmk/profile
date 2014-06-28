def foo
	raise "例外発生"
end

begin 
	foo
rescue => ex
	puts "クラス#{ex.class.name}"
	puts "メッセージ={ex.message}"
end