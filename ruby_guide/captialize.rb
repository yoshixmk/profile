#練習問題（3）

def word_capitalize(str)
  str.gsub(/(\w+)/){ |v| v.capitalize }
end
 

p word_capitalize('in-reply-to')
p word_capitalize('X-MAILER')

=begin
def word_capitalize(str)
	nstr=str.gsub(/^.?/) do |matched|
		print matched.upcase
	end
	print nstr + "\n"

	str.gsub(/-.+?-/) do |matched|
		/-(.)(.+)/ =~ matched
		print $1.upcase + $2 + "\n"
	end

	str.gsub(/-.+?$/) do |matched|
		/-(.)(.+)/ =~ matched
		print $1.upcase + $2 + "\n"
	end	
end

word_capitalize("in-reply-to")
=end
