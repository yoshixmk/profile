3.times do |i|
	puts i**2
end

#こっちのほうがすっきり
3.times{|i|	puts i**2}

value=["Ruby","Python","Perl"]
value.each{|v| puts v}

{:name=>"yoshixmk",
 :age=>22,
 :length=>165,
 :weight=>55}.each{|k,v|
 p "<key:#{k}, value:#{v}>"
}

hash={:name=>"yoshixmk",
 :age=>22,
 :length=>165,
 :weight=>55}
hash2={:name=>"aaa",
 :age=>20,
 :length=>160,
 :weight=>50}

hash.each do |k,v|
	 puts "#{k}, #{v}"
end
hash2.each do |k,v|
	 puts "#{k}, #{v}"
end