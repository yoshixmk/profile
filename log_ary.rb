log_ary = ["asdfghjkl:500 id:1234","asdfghjkl:500 id:1234","asdfghjkl:510 id:1234"]

count = 0
log_ary.each do |s|
  count += 1 if s =~ /[5][0][0]/
end
puts "500:#{count}"