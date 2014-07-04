re1=Regexp.new("abc*def")
re2=Regexp.new(Regexp.quote("abc*def"))
p (re1=~"abc*def")
p (re2=~"abc*def*")